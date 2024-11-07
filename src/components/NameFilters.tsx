import React from 'react';

interface NameFiltersProps {
  filters: {
    startsWith: string;
    length: string;
    nationality: string;
    gender: 'boy' | 'girl';
  };
  onFilterChange: (filters: {
    startsWith: string;
    length: string;
    nationality: string;
    gender: 'boy' | 'girl';
  }) => void;
}

export function NameFilters({ filters, onFilterChange }: NameFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Starts With
        </label>
        <input
          type="text"
          maxLength={1}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filters.startsWith}
          onChange={(e) => onFilterChange({ ...filters, startsWith: e.target.value.toLowerCase() })}
          placeholder="Enter first letter..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name Length
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filters.length}
          onChange={(e) => onFilterChange({ ...filters, length: e.target.value })}
        >
          <option value="">Any length</option>
          {[3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} letters</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nationality
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filters.nationality}
          onChange={(e) => onFilterChange({ ...filters, nationality: e.target.value })}
        >
          <option value="">Any origin</option>
          <option value="african">African</option>
          <option value="american">American</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="indian">Indian</option>
          <option value="japanese">Japanese</option>
          <option value="russian">Russian</option>
        </select>
      </div>
    </div>
  );
}