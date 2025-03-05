import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ModelDetails from './components/ModelDetails';
import UploadPage from './components/UploadPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/model/:id" element={<ModelDetails />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
