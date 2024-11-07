import React from 'react';
import { Baby } from 'lucide-react';

interface GenderToggleProps {
  gender: 'boy' | 'girl';
  onGenderChange: (gender: 'boy' | 'girl') => void;
}

export function GenderToggle({ gender, onGenderChange }: GenderToggleProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onGenderChange('boy')}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
          gender === 'boy'
            ? 'bg-blue-500 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Baby className="w-5 h-5" />
        Boy Names
      </button>
      <button
        onClick={() => onGenderChange('girl')}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
          gender === 'girl'
            ? 'bg-pink-500 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Baby className="w-5 h-5" />
        Girl Names
      </button>
    </div>
  );
}