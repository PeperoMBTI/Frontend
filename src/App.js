import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnePage from './question/1';
import HomePage from './HomePage';
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
import IstpPage from './result/IstpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<OnePage />} />
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
      <Route path="/ISTP" element={<IstpPage />} />
    </Routes>
  );
}

export default App;