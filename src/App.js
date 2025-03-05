import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register"; // Import Register page when ready

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Placeholder Pages */}
        <Route path="/security" element={<Placeholder title="Security Page" />} />
        <Route path="/how-it-works" element={<Placeholder title="How It Works?" />} />
        <Route path="/elections" element={<Placeholder title="Elections" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </Router>
  );
}

// ✅ Placeholder component for missing pages
const Placeholder = ({ title }) => (
  <div style={styles.container}>
    <h1 style={styles.heading}>{title}</h1>
    <p style={styles.text}>This page is under construction.</p>
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    backgroundColor: "#14192D",
    minHeight: "100vh",
    padding: "50px",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    opacity: 0.8,
  },
};

export default App;

