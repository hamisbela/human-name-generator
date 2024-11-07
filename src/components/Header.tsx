import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Baby } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const path = location.pathname;

  const getTitle = () => {
    switch (path) {
      case '/african-names':
        return 'African Name Generator';
      case '/american-names':
        return 'American Name Generator';
      case '/french-names':
        return 'French Name Generator';
      case '/german-names':
        return 'German Name Generator';
      case '/indian-names':
        return 'Indian Name Generator';
      case '/japanese-names':
        return 'Japanese Name Generator';
      case '/russian-names':
        return 'Russian Name Generator';
      default:
        return 'Human Name Generator';
    }
  };

  return (
    <header className="text-center pt-16 pb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Baby className="w-8 h-8 text-gray-800" />
        <h1 className="text-4xl font-bold text-gray-800">{getTitle()}</h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto px-4 mb-8">
        Discover the perfect name with our intelligent human name generator.
        Create meaningful names that reflect your values and cultural heritage.
      </p>
      
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">All Names</Link>
          <Link to="/african-names" className="text-gray-600 hover:text-gray-800 transition-colors">African Names</Link>
          <Link to="/american-names" className="text-gray-600 hover:text-gray-800 transition-colors">American Names</Link>
          <Link to="/french-names" className="text-gray-600 hover:text-gray-800 transition-colors">French Names</Link>
          <Link to="/german-names" className="text-gray-600 hover:text-gray-800 transition-colors">German Names</Link>
          <Link to="/indian-names" className="text-gray-600 hover:text-gray-800 transition-colors">Indian Names</Link>
          <Link to="/japanese-names" className="text-gray-600 hover:text-gray-800 transition-colors">Japanese Names</Link>
          <Link to="/russian-names" className="text-gray-600 hover:text-gray-800 transition-colors">Russian Names</Link>
        </div>
      </nav>
    </header>
  );
}