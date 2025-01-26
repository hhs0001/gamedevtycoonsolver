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
import Link from "next/link";

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
                <CardTitle>Search Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Topic</Label>
                    <Select value={filterTopic} onValueChange={setFilterTopic}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Topics" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Topics</SelectItem>
                        {topics.map((topic) => (
                          <SelectItem key={topic.name} value={topic.name}>
                            {topic.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Platform</Label>
                    <Select
                      value={filterPlatform}
                      onValueChange={setFilterPlatform}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Platforms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
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
                  <CardTitle>Best Combinations</CardTitle>
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
                              <span>Genre: {combo.genreScore}</span>
                              <span>Audience: {combo.audienceScore}</span>
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
                <CardTitle>Game Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Game Size</Label>
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
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
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
                      <Label htmlFor="isSequel">Sequel</Label>
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
                      <Label htmlFor="hasNewEngine">New Engine</Label>
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
                      <Label>Technical</Label>
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
                  <CardTitle>Review Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-sm text-muted-foreground">
                          Base Score
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {getReviewPreview()?.baseScore.toFixed(1)}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-sm text-muted-foreground">
                          Quality
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {getReviewPreview()?.qualityScore.toFixed(2)}x
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary/20 rounded-lg">
                      <div className="text-sm text-primary">Final Score</div>
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
                        Comments:
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
                  <CardTitle>Game Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="stage1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="stage1">Stage 1</TabsTrigger>
                      <TabsTrigger value="stage2">Stage 2</TabsTrigger>
                      <TabsTrigger value="stage3">Stage 3</TabsTrigger>
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

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/hhs0001/gamedevtycoonsolver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Open Source on GitHub
              </Link>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Developed by Heitor Stein with ❤️ in Brazil</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  fill="#009B3A"
                  d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                ></path>
                <path
                  fill="#FEDF01"
                  d="M32.728 18L18 29.124L3.272 18L18 6.875z"
                ></path>
                <circle
                  fill="#002776"
                  cx="17.976"
                  cy="17.924"
                  r="6.458"
                ></circle>
                <path
                  fill="#CBE9D4"
                  d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"
                ></path>
                <path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></path>
                <path
                  fill="#55ACEE"
                  d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
                ></path>
                <path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
