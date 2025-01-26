interface DevelopmentSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
}

export function DevelopmentSlider({
  label,
  value,
  max,
}: DevelopmentSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm text-gray-500">Lvl. {value}</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          className="absolute h-full bg-green-500 rounded"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}
