import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // optional styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMPORARY login logic
    if (email === "admin@gmail.com" && password === "1234") {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="back-btn" onClick={() => navigate("/")}>
  ← Back Home
</div>
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </p>
      </form>

      <h2>Welcome Back</h2>
<p className="subtitle">Sign in to continue</p>
    </div>
  );
}

export default Login;