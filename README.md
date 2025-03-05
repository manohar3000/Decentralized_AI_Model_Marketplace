# Decentralized AI Model Marketplace

A decentralized platform for AI model distribution, where developers securely upload, register, and sell their AI models using blockchain and IPFS, and buyers can purchase models via cryptocurrency and gain access through secure, temporary signed URLs.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

The **Decentralized AI Model Marketplace** is built on Web3 technologies, integrating Ethereum smart contracts and IPFS for decentralized storage. Developers can register AI models with metadata stored on-chain, while buyers purchase models using crypto payments. For secure access, files are stored on **Private IPFS via Pinata**, which generates time-limited signed URLs for authorized downloads.

---

## Features

- **Model Registration & Metadata:**  
  Developers can register models with details (name, description, price, and IPFS CID) stored on-chain.
- **Secure File Storage:**  
  Integrates with **Pinata Private IPFS** to securely store AI models and generate temporary signed URLs.
- **Decentralized Payments:**  
  Buyers purchase models with **cryptocurrency**, with funds transferred directly to the developer’s wallet.
- **Modern, Responsive UI:**  
  A sleek frontend built with **React and Vite** that supports wallet connectivity (e.g., MetaMask).
- **Robust Testing:**  
  Comprehensive testing for smart contracts (using Hardhat, Mocha, Chai), frontend (Jest, Selenium), and API endpoints (Postman).

---

## Technologies Used

### Frontend
- **React.js** (with Vite)
- **CSS Modules** for component-specific styling
- **ethers.js** for Web3 interaction

### Backend & Smart Contracts
- **Solidity**
- **Hardhat** for development and deployment
- **Ethereum (Sepolia Testnet)**
- **IPFS via Pinata (Private IPFS)**

### Testing
- **Jest & Selenium** (Frontend)
- **Mocha, Chai & Hardhat** (Smart Contracts)
- **Postman** (API Testing)

---

## Folder Structure
```
decentralized-ai-marketplace/
├── contracts/                      # Solidity smart contracts
│   ├── ModelRegistry.sol         # Model registration & metadata contract
│   └── Marketplace.sol           # Purchase & payment contract
├── scripts/                        # Deployment scripts for Hardhat
│   └── deploy.js                 # Deploys contracts on Sepolia
├── test/                           # Unit and integration tests for contracts
│   ├── ModelRegistry.test.js     
│   └── Marketplace.test.js       
├── frontend/                       # React application
│   ├── public/                     # Static assets
│   │   └── index.html            
│   ├── src/                        # React source code
│   │   ├── components/             # Reusable React components
│   │   │   ├── Dashboard.jsx     
│   │   │   ├── Dashboard.css     
│   │   │   ├── Footer.jsx        
│   │   │   ├── Footer.css        
│   │   │   ├── Header.jsx        
│   │   │   ├── Header.css        
│   │   │   ├── HomePage.jsx      
│   │   │   ├── HomePage.css      
│   │   │   ├── ModelCard.jsx     
│   │   │   ├── ModelCard.css     
│   │   │   ├── ModelDetails.jsx  
│   │   │   ├── ModelDetails.css  
│   │   │   ├── UploadPage.jsx    # Integrated with Pinata for Private IPFS
│   │   │   ├── UploadPage.css    
│   │   │   ├── WalletConnect.jsx 
│   │   │   └── WalletConnect.css
│   │   ├── utils/                  # Utility functions and configuration files
│   │   │   └── config.ts         # Pinata configuration
│   │   ├── App.jsx               # Main React component with routing
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # React entry point
│   ├── .env.local                # Environment variables (VITE_PINATA_JWT, VITE_GATEWAY_URL)
│   ├── package.json              # Frontend dependencies and scripts (Vite, React)
│   └── vite.config.js            # Vite configuration file
├── .env                          # Environment variables for Hardhat (SEPOLIA_RPC_URL, PRIVATE_KEY)
├── hardhat.config.js             # Hardhat configuration for deploying contracts
├── package.json                  # Root-level package.json (for monorepo or shared dependencies)
└── README.md                     # Project documentation and instructions
```