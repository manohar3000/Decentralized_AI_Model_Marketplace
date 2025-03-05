import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './WalletConnect.css'

function WalletConnect() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // In ethers v6, use BrowserProvider
        const provider = new ethers.BrowserProvider(window.ethereum);
        const bal = await provider.getBalance(accounts[0]);
        // In ethers v6, use ethers.formatEther
        const formattedBalance = ethers.formatEther(bal);
        setBalance(formattedBalance);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      connectWallet();
    }
  }, []);

  return (
    <div className="wallet-connect">
      {account ? (
        <div className="wallet-info">
          <span>{account.slice(0, 6)}...{account.slice(-4)}</span>
          <span>{balance} ETH</span>
        </div>
      ) : (
        <button className="connect-button" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletConnect;


