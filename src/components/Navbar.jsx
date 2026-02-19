import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          NETFLIX
        </Link>
        
        {user && (
          <div className="navbar-menu">
            <span className="navbar-user">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="navbar-logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
