import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Sample data – in production, fetch based on the connected wallet.
  const uploadedModels = [
    { id: 1, name: 'NLP Sentiment Analyzer', price: 0.05 },
    { id: 2, name: 'Image Classifier', price: 0.1 }
  ];

  const purchasedModels = [
    { id: 3, name: 'Speech Recognizer', price: 0.08 }
  ];

  return (
    <div className="dashboard container">
      <h2>User Dashboard</h2>
      <div className="dashboard-section">
        <h3>Uploaded Models</h3>
        <ul>
          {uploadedModels.map((model) => (
            <li key={model.id}>
            <span className="model-name">{model.name}</span>
            <span className="model-price">{model.price} ETH</span>
          </li>          
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h3>Purchased Models</h3>
        <ul>
          {purchasedModels.map((model) => (
            <li key={model.id}>
            <span className="model-name">{model.name}</span>
            <span className="model-price">{model.price} ETH</span>
          </li>          
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
