import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CharacterDetail } from './pages/character/CharacterDetail/CharacterDetail';

import { HeaderSection } from './components/HeaderSection/HeaderSection';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:name" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
