import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import leftImage from "../assets/backlogin3.png";
import logo from "../assets/agalogo.png"
import { Link } from "react-router-dom";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay for effect
    }, []);

    return (
        <div className="login-container">
            <div className="left-side" style={{backgroundImage: `url(${leftImage})`}}>
            <img src={logo} alt="AGA Logo" className="aga-logo" />
            <img src={leftImage} alt="Left Side" className="left-image" /> 
                <p className={`fade-in-text ${isVisible ? "visible" : ""}`}>
                    <span className="welcome-back">Welcome Back!</span>
                    <br />
                    We are glad to see you again on our platform.
                </p>
            </div>
            <div className="right-side">
                <div className="login-box">
                    <h2>We are <strong>AGA</strong></h2>
                    <p>Log in to your account.</p>
                    
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className="login-btn">Log in</button>

                    <p className="register-text">
                        Don't have an account yet?{" "}
                        <Link to="/register" className="register-link">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
