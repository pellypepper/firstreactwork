import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h3>Welcome to your new NG'S Mobile App</h3>
        <span>An experience built from the ground up especially for you. To enjoy this experience, register as a new user using any of the sign</span>

        <div className="home-btn-container">
          <NavLink to="/signin" className="nav-item">
            <button className="home-btn">Log in</button>
          </NavLink>
          <button>Sign up to the New NG'S Mobile App</button>
          <p>Don't have a NG'S Account?</p>
          <button>Open an Account</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
