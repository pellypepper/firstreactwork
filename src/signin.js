import React from 'react';
import { NavLink } from "react-router-dom";
import { FaCoffee } from 'react-icons/fa';
import './App.css';

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-header">
          <span>flag</span>
          <span>logo</span>
        </div>

        <div className="login-wrapper">
          <div className='login-header'>
            <h5>Login</h5>
            <NavLink to="/homepage" className="nav-item">
              <FaCoffee size={30} style={{ color: 'brown' }} />
            </NavLink>
          </div>
          <div className='login-input-wrapper'>
            <div>
              <FaCoffee className='icon' size={25} style={{ color: 'brown' }} />
              <input placeholder='User ID'></input>
            </div>
            <div>
              <FaCoffee className='icon' size={25} style={{ color: 'brown' }} />
              <input placeholder='Password'></input>
            </div>
          </div>
          <div className='login-check-wrapper'>
            <div className='check-header'>
              <input type='checkbox'></input>
              <span>Save User ID</span>
            </div>
            <span>Forget Password</span>
          </div>
          <div className='login-btn-wrapper'>
            <button className='btn-box'>SIGN IN</button>
            <button>Register</button>
          </div>
          <div className='login-footer'>
            <span>Open An Account</span>
            <span>ATM Locator</span>
          </div>
          <span className='bottom'>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
