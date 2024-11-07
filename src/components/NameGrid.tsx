import React from 'react';
import { Heart } from 'lucide-react';

interface NameGridProps {
  names: string[];
  gender: 'boy' | 'girl';
}

export function NameGrid({ names, gender }: NameGridProps) {
  if (names.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        Click the generate button to see name suggestions
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {names.map((name, index) => (
        <div
          key={index}
          className={`rounded-lg p-4 text-center transition-colors ${
            gender === 'boy' ? 'bg-blue-50 hover:bg-blue-100' : 'bg-pink-50 hover:bg-pink-100'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Heart className={`w-4 h-4 ${gender === 'boy' ? 'text-blue-500' : 'text-pink-500'}`} />
            <span className="text-lg font-medium text-gray-800">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}