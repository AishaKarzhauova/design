import React from "react";
import "./Register.css";
import { FaUser, FaPhone, FaWallet, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/agapinklogo.png"; // Ensure this is in the `public` folder

const Register = () => {
  return (
    <div className="register-container">
      <img src={logo} alt="AGA Logo" className="register-logo" />
      <div className="register-box">
        <h2>Registration</h2>
        <p>Create your account.</p>

        {/* Username */}
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Username" />
        </div>

        {/* Name */}
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Name" />
        </div>

        {/* Last Name */}
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Last Name" />
        </div>

        {/* Phone Number */}
        <div className="input-group">
          <FaPhone className="icon" />
          <input type="tel" placeholder="Phone Number" />
        </div>

        {/* Wallet Address */}
        <div className="input-group">
          <FaWallet className="icon" />
          <input type="text" placeholder="Wallet Address" />
        </div>

        {/* Password */}
        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>

        {/* Repeat Password */}
        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Repeat Password" />
        </div>

        <button className="register-btn">Register</button>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;