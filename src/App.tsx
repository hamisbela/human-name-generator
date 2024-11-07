import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NationalityPage } from './pages/NationalityPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/african-names" element={<NationalityPage nationality="african" />} />
          <Route path="/american-names" element={<NationalityPage nationality="american" />} />
          <Route path="/french-names" element={<NationalityPage nationality="french" />} />
          <Route path="/german-names" element={<NationalityPage nationality="german" />} />
          <Route path="/indian-names" element={<NationalityPage nationality="indian" />} />
          <Route path="/japanese-names" element={<NationalityPage nationality="japanese" />} />
          <Route path="/russian-names" element={<NationalityPage nationality="russian" />} />
        </Routes>
      </div>
    </Router>
  );
}