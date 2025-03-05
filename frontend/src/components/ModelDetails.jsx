import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ModelDetails.css';

// For demonstration, using static data. In production, fetch details based on the model ID.
const sampleModel = {
  id: 1,
  name: 'NLP Sentiment Analyzer',
  description: 'Analyze text sentiments with state-of-art NLP models. Perfect for businesses needing rapid sentiment analysis.',
  price: 0.05,
  category: 'NLP',
  cid: 'QmExampleCID'
};

function ModelDetails() {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Replace with dynamic fetch logic.
    setModel(sampleModel);
  }, [id]);

  const handlePurchase = () => {
    // Integrate with your smart contract purchase logic here.
    
    alert('Purchase initiated! (Integration with smart contract needed)');
  };

  if (!model) return <div>Loading...</div>;

  return (
    <div className="model-details container">
      <h2>{model.name}</h2>
      <p>{model.description}</p>
      <div className="model-meta">
        <span>Price: {model.price} ETH</span>
        <span>Category: {model.category}</span>
        <span>IPFS CID: {model.cid}</span>
      </div>
      <button className="btn primary" onClick={handlePurchase}>Purchase Model</button>
    </div>
  );
}

export default ModelDetails;
