import React, { useState } from 'react';
import { pinata } from '../utils/config.js';
import './UploadPage.css';

function UploadPage() {
  const [modelName, setModelName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [signedUrl, setSignedUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!modelName || !description || !price || !file) {
      alert('Please fill in all fields and select a file.');
      return;
    }
    setUploading(true);
    try {
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
      
      // Here, call your smart contract function with modelName, description, price, and cid if needed.
      
      alert('Model uploaded successfully!');
      setSignedUrl(signedUrlResult);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed.');
    }
    setUploading(false);
  };

  return (
    <div className="upload-page container">
      <h2>Upload Your AI Model</h2>
      <form onSubmit={handleUpload}>
        <label>
          Model Name:
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
          />
        </label>
        <label>
          Model File:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <button className="btn primary" type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Model'}
        </button>
      </form>
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
