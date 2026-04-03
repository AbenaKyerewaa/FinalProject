import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // optional styling

function Signup() {
const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="back-btn" onClick={() => navigate("/")}>
  ← Back Home
</div>
      <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="number" placeholder="Number" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Create your account to access the Church Management System</p>
    </div>
  );
}

export default Signup;