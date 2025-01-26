import { ViewConfig } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeToggle } from "@/components/theme-toggle";

interface ViewSettingsProps {
  config: ViewConfig;
  onChange: (config: ViewConfig) => void;
}

export function ViewSettings({ config, onChange }: ViewSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurar Visualização</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showCombinations"
              checked={config.showCombinations}
              onCheckedChange={(checked) =>
                onChange({ ...config, showCombinations: checked as boolean })
              }
            />
            <Label htmlFor="showCombinations">Melhores Combinações</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showDevelopment"
              checked={config.showDevelopment}
              onCheckedChange={(checked) =>
                onChange({ ...config, showDevelopment: checked as boolean })
              }
            />
            <Label htmlFor="showDevelopment">Estágios de Desenvolvimento</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showReviews"
              checked={config.showReviews}
              onCheckedChange={(checked) =>
                onChange({ ...config, showReviews: checked as boolean })
              }
            />
            <Label htmlFor="showReviews">Preview de Reviews</Label>
          </div>
        </div>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
}
