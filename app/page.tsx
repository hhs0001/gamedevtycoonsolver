"use client";

import { useState } from "react";
import { topics, platforms, genres, genreStages } from "@/lib/data";
import {
  ratingToNumber,
  Rating,
  GameCombination,
  GameReview,
  ViewConfig,
} from "@/lib/types";
import { calculateReview } from "@/lib/review";
import { DevelopmentStage } from "./components/DevelopmentStage";
import { ViewSettings } from "./components/ViewSettings";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [viewConfig, setViewConfig] = useState<ViewConfig>({
    showCombinations: true,
    showDevelopment: true,
    showReviews: true,
  });
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [gameSize, setGameSize] = useState<GameReview["gameSize"]>("small");
  const [isSequel, setIsSequel] = useState(false);
  const [isMMO, setIsMMO] = useState(false);
  const [hasNewEngine, setHasNewEngine] = useState(false);
  const [designPoints, setDesignPoints] = useState(0);
  const [techPoints, setTechPoints] = useState(0);
  const [bugs, setBugs] = useState(0);
  const [filterTopic, setFilterTopic] = useState("all");
  const [filterPlatform, setFilterPlatform] = useState("all");

  const calculateScore = (topic: string, genre: string, platform: string) => {
    const topicData = topics.find((t) => t.name === topic);
    const platformData = platforms.find((p) => p.name === platform);

    if (!topicData || !platformData)
      return {
        genreScore: 0,
        audienceScore: 0,
        totalScore: 0,
      };

    // Calcular pontuação do gênero
    const genreScore = ratingToNumber(topicData.ratings[genre] as Rating);

    // Calcular pontuação da audiência
    const audienceScore = (
      Object.keys(topicData.audience) as Array<keyof typeof topicData.audience>
    ).reduce((score, audience) => {
      return (
        score +
        ratingToNumber(topicData.audience[audience]) *
          ratingToNumber(platformData.audience[audience])
      );
    }, 0);

    return {
      genreScore,
      audienceScore,
      totalScore: genreScore + audienceScore,
    };
  };

  const getBestCombinations = () => {
    const combinations: GameCombination[] = [];

    // Se tiver um filtro de tópico, usar apenas esse tópico
    const topicsToUse =
      filterTopic && filterTopic !== "all"
        ? topics.filter((t) => t.name === filterTopic)
        : topics;

    // Se tiver um filtro de plataforma, usar apenas essa plataforma
    const platformsToUse =
      filterPlatform && filterPlatform !== "all"
        ? platforms.filter((p) => p.name === filterPlatform)
        : platforms;

    for (const topic of topicsToUse) {
      for (const genre of genres) {
        for (const platform of platformsToUse) {
          const score = calculateScore(topic.name, genre, platform.name);
          combinations.push({
            topic: topic.name,
            genre,
            platform: platform.name,
            ...score,
          });
        }
      }
    }

    return combinations.sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);
  };

  const getReviewPreview = () => {
    if (!selectedGenre || !selectedTopic || !selectedPlatform) return null;

    const review: GameReview = {
      design: designPoints,
      tech: techPoints,
      bugs,
      gameSize,
      isSequel,
      isMMO,
      hasNewEngine,
      score: 0,
    };

    return calculateReview(review);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">
              Game Dev Tycoon Solver
            </h1>
            <ViewSettings config={viewConfig} onChange={setViewConfig} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Filtros e Combinações */}
          <div className="col-span-12 lg:col-span-8">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Filtros de Busca</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tópico</Label>
                    <Select value={filterTopic} onValueChange={setFilterTopic}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os Tópicos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os Tópicos</SelectItem>
                        {topics.map((topic) => (
                          <SelectItem key={topic.name} value={topic.name}>
                            {topic.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Plataforma</Label>
                    <Select
                      value={filterPlatform}
                      onValueChange={setFilterPlatform}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as Plataformas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Todas as Plataformas
                        </SelectItem>
                        {platforms.map((platform) => (
                          <SelectItem key={platform.name} value={platform.name}>
                            {platform.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {viewConfig.showCombinations && (
              <Card>
                <CardHeader>
                  <CardTitle>Melhores Combinações</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getBestCombinations().map((combo, index) => (
                      <Card
                        key={index}
                        className="hover:bg-accent cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedTopic(combo.topic);
                          setSelectedGenre(combo.genre);
                          setSelectedPlatform(combo.platform);
                        }}
                      >
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-lg text-foreground">
                                {combo.topic} + {combo.genre}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {combo.totalScore}
                              </span>
                            </div>
                            <span className="text-muted-foreground">
                              {combo.platform}
                            </span>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Gênero: {combo.genreScore}</span>
                              <span>Audiência: {combo.audienceScore}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Configurações do Jogo */}
          <div className="col-span-12 lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Jogo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Tamanho do Jogo</Label>
                    <Select
                      value={gameSize}
                      onValueChange={(value) =>
                        setGameSize(value as GameReview["gameSize"])
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Pequeno</SelectItem>
                        <SelectItem value="medium">Médio</SelectItem>
                        <SelectItem value="large">Grande</SelectItem>
                        <SelectItem value="aaa">AAA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isSequel"
                        checked={isSequel}
                        onCheckedChange={(checked) =>
                          setIsSequel(checked as boolean)
                        }
                      />
                      <Label htmlFor="isSequel">Sequência</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isMMO"
                        checked={isMMO}
                        onCheckedChange={(checked) =>
                          setIsMMO(checked as boolean)
                        }
                      />
                      <Label htmlFor="isMMO">MMO</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasNewEngine"
                        checked={hasNewEngine}
                        onCheckedChange={(checked) =>
                          setHasNewEngine(checked as boolean)
                        }
                      />
                      <Label htmlFor="hasNewEngine">Nova Engine</Label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Design</Label>
                      <Input
                        type="number"
                        value={designPoints}
                        onChange={(e) =>
                          setDesignPoints(Number(e.target.value))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Técnico</Label>
                      <Input
                        type="number"
                        value={techPoints}
                        onChange={(e) => setTechPoints(Number(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Bugs</Label>
                    <Input
                      type="number"
                      value={bugs}
                      onChange={(e) => setBugs(Number(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {getReviewPreview() && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Preview de Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-sm text-muted-foreground">
                          Score Base
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {getReviewPreview()?.baseScore.toFixed(1)}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-sm text-muted-foreground">
                          Qualidade
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {getReviewPreview()?.qualityScore.toFixed(2)}x
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary/20 rounded-lg">
                      <div className="text-sm text-primary">Score Final</div>
                      <div className="text-3xl font-bold text-primary">
                        {getReviewPreview()?.finalScore}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {getReviewPreview()?.reviews.map((review, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {review}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4">
                      <span className="font-medium text-foreground">
                        Comentários:
                      </span>
                      <ul className="mt-2 space-y-1">
                        {getReviewPreview()?.messages.map((message, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {message}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Development Stage */}
        {viewConfig.showDevelopment &&
          selectedGenre &&
          genreStages[selectedGenre] && (
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Desenvolvimento do Jogo</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="stage1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="stage1">Estágio 1</TabsTrigger>
                      <TabsTrigger value="stage2">Estágio 2</TabsTrigger>
                      <TabsTrigger value="stage3">Estágio 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="stage1">
                      <DevelopmentStage
                        stage={1}
                        genreStages={genreStages[selectedGenre]}
                      />
                    </TabsContent>
                    <TabsContent value="stage2">
                      <DevelopmentStage
                        stage={2}
                        genreStages={genreStages[selectedGenre]}
                      />
                    </TabsContent>
                    <TabsContent value="stage3">
                      <DevelopmentStage
                        stage={3}
                        genreStages={genreStages[selectedGenre]}
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
      </div>
    </main>
  );
}
