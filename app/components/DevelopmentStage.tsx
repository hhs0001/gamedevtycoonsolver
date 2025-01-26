import { GenreStages } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DevelopmentStageProps {
  stage: 1 | 2 | 3;
  genreStages: GenreStages;
}

export function DevelopmentStage({
  stage,
  genreStages,
}: DevelopmentStageProps) {
  const stageData = genreStages[`stage${stage}`];
  const stageKeys = Object.keys(stageData) as Array<keyof typeof stageData>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Development Stage {stage}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stageKeys.map((key) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium capitalize text-foreground">
                  {key}
                </span>
                <span className="text-lg font-bold text-foreground">
                  {stageData[key]}
                </span>
              </div>
              <Progress value={stageData[key]} />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Time Allocation Preview
          </h3>
          <div className="h-4 bg-muted rounded-full overflow-hidden flex">
            {stageKeys.map(
              (key, index) =>
                stageData[key] > 0 && (
                  <div
                    key={key}
                    className="h-full"
                    style={{
                      width: `${
                        (stageData[key] /
                          Object.values(stageData).reduce((a, b) => a + b, 0)) *
                        100
                      }%`,
                      backgroundColor: ["#ef4444", "#22c55e", "#3b82f6"][index],
                    }}
                  />
                )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
