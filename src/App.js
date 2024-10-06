import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnePage from './question/1';
import HomePage from './HomePage';
import TwoPage from './question/2';
import ThreePage from './question/3';
import FourPage from './question/4';
import FivePage from './question/5';
import SixPage from './question/6';
import SevenPage from './question/7';
import EightPage from './question/8';
import NinePage from './question/9';
import TenPage from './question/10';
import ElevenPage from './question/11';
import TwelvePage from './question/12';
import EnfjPage from './result/EnfjPage';
import EnfpPage from './result/EnfpPage';
import EntjPage from './result/EntjPage';
import EntpPage from './result/EntpPage';
import EsfjPage from './result/EsfjPage';
import EsfpPage from './result/EsfpPage';
import EstjPage from './result/EstjPage';
import EstpPage from './result/EstpPage';
import InfjPage from './result/InfjPage';
import InfpPage from './result/InfpPage';
import IntjPage from './result/IntjPage';
import IntpPage from './result/IntpPage';
import IsfjPage from './result/IsfjPage';
import IsfpPage from './result/IsfpPage';
import IstjPage from './result/IstjPage';

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
      <Route path="/8" element={<EightPage />} />
      <Route path="/9" element={<NinePage />} />
      <Route path="/10" element={<TenPage />} />
      <Route path="/11" element={<ElevenPage />} />
      <Route path="/12" element={<TwelvePage />} />
      <Route path="/ENFJ" element={<EnfjPage />} />
      <Route path="/ENFP" element={<EnfpPage />} />
      <Route path="/ENTJ" element={<EntjPage />} />
      <Route path="/ENTP" element={<EntpPage />} />
      <Route path="/ESFJ" element={<EsfjPage />} />
      <Route path="/ESFP" element={<EsfpPage />} />
      <Route path="/ESTJ" element={<EstjPage />} />
      <Route path="/ESTP" element={<EstpPage />} />
      <Route path="/INFJ" element={<InfjPage />} />
      <Route path="/INFP" element={<InfpPage />} />
      <Route path="/INTJ" element={<IntjPage />} />
      <Route path="/INTP" element={<IntpPage />} />
      <Route path="/ISFJ" element={<IsfjPage />} />
      <Route path="/ISFP" element={<IsfpPage />} />
      <Route path="/ISTJ" element={<IstjPage />} />
    </Routes>
  );
}

export default App;