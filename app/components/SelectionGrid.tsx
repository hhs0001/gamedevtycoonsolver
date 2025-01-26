import Image from "next/image";

interface SelectionGridProps {
  title: string;
  items: Array<{
    id: string;
    name: string;
    icon?: string;
    cost?: number;
    marketShare?: number;
  }>;
  onSelect: (item: string) => void;
}

export function SelectionGrid({ title, items, onSelect }: SelectionGridProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700">×</button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <button
              key={item.id}
              className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center"
              onClick={() => onSelect(item.name)}
            >
              {item.icon ? (
                <Image
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 mb-2"
                  width={64}
                  height={64}
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2" />
              )}
              <span className="font-medium">{item.name}</span>
              {item.cost && (
                <span className="text-sm text-gray-500">
                  Dev. cost: {item.cost}K
                </span>
              )}
              {item.marketShare && (
                <span className="text-sm text-gray-500">
                  Marketshare: {item.marketShare}%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
