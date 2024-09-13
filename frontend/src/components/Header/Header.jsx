import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.webp';
import '../../assets/style/main.css';

const Header = ({ isLoggedIn, userName }) => (
  <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
    </Link>
    <div>
      {isLoggedIn ? (
        <>
          <Link to="/profile" className="main-nav-item">{userName}</Link>
          <Link to="/logout" className="main-nav-item">Sign Out</Link>
        </>
      ) : (
        <Link to="/login" className="main-nav-item">Sign In</Link>
      )}
    </div>
  </nav>
);

export default Header;