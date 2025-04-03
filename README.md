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
  Buyers purchase models with **cryptocurrency**, with funds transferred directly to the developer's wallet.
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

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/decentralized-ai-marketplace.git
cd decentralized-ai-marketplace
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the root directory
   - Copy `frontend/.env.example` to `frontend/.env.local`
   - Fill in your environment variables:
     - `SEPOLIA_RPC_URL`: Your Sepolia testnet RPC URL
     - `PRIVATE_KEY`: Your wallet private key for contract deployment
     - `VITE_PINATA_JWT`: Your Pinata JWT token
     - `VITE_GATEWAY_URL`: Your IPFS gateway URL

## Usage

1. Deploy smart contracts:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Access the application:
   - Open your browser and navigate to `http://localhost:5173`
   - Connect your Web3 wallet (e.g., MetaMask)
   - Browse available AI models or upload your own

## Testing

### Smart Contract Testing
```bash
# Run all contract tests
npx hardhat test

# Run specific test file
npx hardhat test test/ModelRegistry.test.js
```

### Frontend Testing
```bash
cd frontend
npm test
```

### API Testing
- Import the Postman collection from `postman/` directory
- Set up environment variables in Postman
- Run the test suite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Project Link: [https://github.com/yourusername/decentralized-ai-marketplace](https://github.com/yourusername/decentralized-ai-marketplace)
- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)