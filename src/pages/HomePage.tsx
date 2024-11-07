import React, { useState } from 'react';
import { Wand2, RefreshCcw } from 'lucide-react';
import { NameFilters } from '../components/NameFilters';
import { NameGrid } from '../components/NameGrid';
import { SeoContent } from '../components/SeoContent';
import { GenderToggle } from '../components/GenderToggle';
import { generateNames } from '../utils/nameGenerator';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    startsWith: '',
    length: '',
    nationality: '',
    gender: 'boy' as 'boy' | 'girl'
  });

  const handleGenerateNames = () => {
    setLoading(true);
    setTimeout(() => {
      const newNames = generateNames(
        filters.startsWith,
        filters.length,
        filters.nationality,
        filters.gender
      );
      setNames(newNames);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <GenderToggle
            gender={filters.gender}
            onGenderChange={(gender) => setFilters({ ...filters, gender })}
          />
          <NameFilters filters={filters} onFilterChange={setFilters} />

          <button
            onClick={handleGenerateNames}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium shadow-lg transition-all flex items-center justify-center gap-2 ${
              filters.gender === 'boy'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600'
            }`}
          >
            {loading ? (
              <RefreshCcw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Generate Names
              </>
            )}
          </button>

          <NameGrid names={names} gender={filters.gender} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <SeoContent />
      </div>

      <Footer />
    </>
  );
}