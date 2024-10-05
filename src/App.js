import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnePage from './1';
import HomePage from './HomePage';
import TwoPage from './2';
import ThreePage from './3';
import FourPage from './4';
import FivePage from './5';
import SixPage from './6';
import SevenPage from './7';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<OnePage />} />
      <Route path="/2" element={<TwoPage />} />
      <Route path="/3" element={<ThreePage />} />
      <Route path="/4" element={<FourPage />} />
      <Route path="/5" element={<FivePage />} />
      <Route path="/6" element={<SixPage />} />
      <Route path="/7" element={<SevenPage />} />
    </Routes>
  );
}

export default App;