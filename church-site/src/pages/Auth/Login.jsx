import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user",  JSON.stringify(data.user));

      if (data.user.role === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/user");
      }

    } catch (err) {
      setError("Could not connect to server");
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-bg">
        <div className="bg-circle bg-circle--1"></div>
        <div className="bg-circle bg-circle--2"></div>
        <div className="bg-circle bg-circle--3"></div>
        <div className="cross-pattern"></div>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        <span className="back-arrow">←</span> Back Home
      </button>

      <div className="auth-card">
        <div className="auth-panel auth-panel--left">
          <div className="panel-emblem">✝</div>
          <h1 className="panel-title">M D C C </h1>
          <p className="panel-subtitle">Akofo, Yewo ha!</p>
          <div className="panel-divider"></div>
          <p className="panel-verse">"I am the way, the truth, and the life."</p>
          <p className="panel-verse-ref">— John 14:6</p>
        </div>

        <div className="auth-panel auth-panel--right">
          <div className="form-header">
            <h2 className="form-title">Welcome Back</h2>
            <p className="form-subtitle">Sign in to your account</p>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <form onSubmit={handleLogin} className="auth-form">

            <div className="field-group">
              <label className="field-label">Phone Number</label>
              <div className="field-wrap">
                <span className="field-icon">📞</span>
                <input
                  type="tel"
                  className="field-input"
                  placeholder="+233 xx xxx xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Password</label>
              <div className="field-wrap">
                <span className="field-icon">🔒</span>
                <input
                  type="password"
                  className="field-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`submit-btn ${loading ? "submit-btn--loading" : ""}`}
              disabled={loading}
            >
              {loading ? <span className="spinner"></span> : "Sign In"}
            </button>
          </form>

          <div className="form-footer">
            <span>Don't have an account?</span>
            <button className="link-btn" onClick={() => navigate("/signup")}>Create one</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;