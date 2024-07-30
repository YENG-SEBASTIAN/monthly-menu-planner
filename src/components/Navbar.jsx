// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Abena Monthly Menu Planner</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/recipes">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/menus">Menus</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
