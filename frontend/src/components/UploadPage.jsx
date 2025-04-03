import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { pinata } from '../utils/config.js';
import { modelRegistryABI, marketplaceABI } from '../utils/contracts.js';
import './UploadPage.css';

function UploadPage() {
  const navigate = useNavigate();
  const [modelName, setModelName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [signedUrl, setSignedUrl] = useState('');
  const [error, setError] = useState('');
  const [transactionHash, setTransactionHash] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    setTransactionHash('');

    if (!modelName || !description || !price || !file) {
      setError('Please fill in all fields and select a file.');
      return;
    }

    try {
      setUploading(true);

      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this feature');
      }

      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Upload file to Pinata
      const uploadResult = await pinata.upload.file(file);
      const cid = uploadResult.cid;
      console.log('Model uploaded with CID:', cid);
      
      // Create a signed URL that expires in 30 seconds
      const signedUrlResult = await pinata.gateways.createSignedURL({
        cid: cid,
        expires: 30,
      });
      console.log('Signed URL:', signedUrlResult);
      
      // Convert price to Wei
      const priceInWei = ethers.utils.parseEther(price);

      // Get contract instances
      const modelRegistryAddress = process.env.REACT_APP_MODEL_REGISTRY_ADDRESS;
      const modelRegistry = new ethers.Contract(
        modelRegistryAddress,
        modelRegistryABI,
        signer
      );

      // Register model on blockchain
      const tx = await modelRegistry.registerModel(
        modelName,
        description,
        cid,
        priceInWei,
        { gasLimit: 500000 }
      );

      // Wait for transaction confirmation
      const receipt = await tx.wait();
      setTransactionHash(receipt.transactionHash);

      // Show success message and redirect
      alert('Model uploaded and registered successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Upload failed:', error);
      setError(error.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-page container">
      <h2>Upload Your AI Model</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleUpload}>
        <label>
          Model Name:
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            required
            placeholder="Enter model name"
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Describe your model"
            rows="4"
          ></textarea>
        </label>
        <label>
          Price (in ETH):
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Enter price in ETH"
            min="0"
          />
        </label>
        <label>
          Model File:
          <input 
            type="file" 
            onChange={handleFileChange} 
            required 
            accept=".h5,.pkl,.onnx,.pt,.pth"
          />
          <small className="file-hint">Supported formats: .h5, .pkl, .onnx, .pt, .pth</small>
        </label>
        <button 
          className="btn primary" 
          type="submit" 
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Model'}
        </button>
      </form>

      {transactionHash && (
        <div className="transaction-info">
          <h3>Transaction Successful!</h3>
          <p>Transaction Hash: <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{transactionHash}</a></p>
        </div>
      )}

      {signedUrl && (
        <div className="uploaded-file-preview">
          <p>Uploaded File Preview:</p>
          <img src={signedUrl} alt="Uploaded file preview" />
        </div>
      )}
    </div>
  );
}

export default UploadPage;
