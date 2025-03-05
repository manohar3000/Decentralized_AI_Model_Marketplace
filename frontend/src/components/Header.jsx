import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AI Model Marketplace</Link>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/upload">Upload Model</NavLink>
      </nav>
      <WalletConnect />
    </header>
  );
}

export default Header;
