import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/african-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  African Names
                </Link>
              </li>
              <li>
                <Link to="/american-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  American Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">European Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/french-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  French Names
                </Link>
              </li>
              <li>
                <Link to="/german-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  German Names
                </Link>
              </li>
              <li>
                <Link to="/russian-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Russian Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Asian Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/indian-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Indian Names
                </Link>
              </li>
              <li>
                <Link to="/japanese-names" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Japanese Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Name Generator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
                  About Our Names
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}