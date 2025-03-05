import React from "react";
import "./LandingPage.css";
import background from "../assets/background2.png";
import securityIcon from "../assets/about2.png";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/background.mp4"
import Navbar from "../components/Navbar";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <Navbar />
            {/* Hero Section */}
            <div className="hero-section" >
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <div className="text-container">
                        <h1 className="landing-title">
                            Welcome <br /> to our modern, secure voting system
                        </h1>
                        <button className="big-login-btn" onClick={() => navigate("/register")}>
                            Register
                        </button>
                    </div>
                </div>


                <div className="stats-bar">
                    <div className="stat-item">
                        <h2>34</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className="stat-item">
                        <h2>99%</h2>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        <h2>184</h2>
                        <p>Team Members</p>
                    </div>
                    <div className="stat-item">
                        <h2>541</h2>
                        <p>Projects Completed</p>
                    </div>
                
                </div>

            </div>

            {/* Security Features Section */}
            <div className="security-section">
                <div className="security-content">
                    <div className="left-side">
                        <img src={securityIcon} alt="Security Illustration" className="security-image" />
                    </div>
                    <div className="right-side">
                        <span className="trusted-label">Trusted & Secure Voting</span>
                        <h2 className="security-title">
                            Advanced Security for a Reliable Voting System
                        </h2>
                        <div className="features-container">
                            <div className="feature-box">
                                <span className="checkmark">✔</span>
                                <div>
                                    <h3>Blockchain Security</h3>
                                    <p>Our system ensures end-to-end encryption, immutability, and transparency in every vote cast. Each vote is securely recorded on the blockchain, making it tamper-proof and verifiable by anyone while maintaining voter anonymity. This guarantees election integrity and trust in the system.Our system ensures end-to-end encryption, immutability, and transparency in every vote cast.</p>
                                </div>
                            </div>
                            <div className="feature-box">
                                <span className="checkmark">✔</span>
                                <div>
                                    <h3>Fraud Prevention</h3>
                                    <p>We implement multi-layer authentication, including biometric verification, cryptographic keys, and smart contract validation to prevent fraudulent activities. Decentralized validation eliminates risks of vote manipulation, ensuring a fair and auditable election process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;