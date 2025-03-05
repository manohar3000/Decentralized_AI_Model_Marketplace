import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelCard.css';

function ModelCard({ model }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/model/${model.id}`);
  };

  return (
    <div className="model-card">
      <h3>{model.name}</h3>
      <p>{model.description}</p>
      <div className="model-info">
        <span className="price">{model.price} ETH</span>
        <span className="category">{model.category}</span>
      </div>
      <button className="btn buy-btn" onClick={handleClick}>Buy Now</button>
    </div>
  );
}

export default ModelCard;

