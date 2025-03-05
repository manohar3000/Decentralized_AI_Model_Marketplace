import React, { useState, useEffect } from 'react';
import ModelCard from './ModelCard';
import './HomePage.css';

// Sample models for demonstration. In production, fetch these from blockchain or a backend.
const sampleModels = [
  {
    id: 1,
    name: 'NLP Sentiment Analyzer',
    description: 'Analyze text sentiments with state-of-art NLP models.',
    price: 0.05,
    category: 'NLP'
  },
  {
    id: 2,
    name: 'Image Classifier',
    description: 'Deep learning powered image classification.',
    price: 0.1,
    category: 'Computer Vision'
  },
  {
    id: 3,
    name: 'Speech Recognizer',
    description: 'Advanced speech-to-text model for accurate transcription.',
    price: 0.08,
    category: 'Audio'
  }
];

function HomePage() {
  const [models, setModels] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    // In production, fetch models dynamically.
    setModels(sampleModels);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredModels = models.filter((model) => {
    return (
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterCategory === '' || model.category === filterCategory)
    );
  });

  return (
    <div className="homepage container">
      <section className="hero">
        <h1>Decentralized AI Model Marketplace</h1>
        <p>Buy, sell, and share AI models securely on blockchain.</p>
        <div className="cta-buttons">
          <a href="/upload" className="btn primary">Upload Your Model</a>
          <a href="/dashboard" className="btn secondary">Go to Dashboard</a>
        </div>
      </section>
      <section className="models-section">
        <h2>Featured Models</h2>
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Search models..." 
            value={searchQuery} 
            onChange={handleSearch}
          />
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="NLP">NLP</option>
            <option value="Computer Vision">Computer Vision</option>
            <option value="Audio">Audio</option>
          </select>
        </div>
        <div className="models-grid">
          {filteredModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
