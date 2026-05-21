import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../auth/Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm]     = useState({ fullName: "", phone: "", password: "" });
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user",  JSON.stringify(data.user));
      navigate("/setup");

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
          <h1 className="panel-title">Join the Family</h1>
          <p className="panel-subtitle">Musama Disco Christo Church</p>
          <div className="panel-divider"></div>
          <p className="panel-verse">"For where two or three gather in my name, there am I with them."</p>
          <p className="panel-verse-ref">— Matthew 18:20</p>
        </div>

        <div className="auth-panel auth-panel--right">
          <div className="form-header">
            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">Join our church community</p>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <form onSubmit={handleSignup} className="auth-form">

            <div className="field-group">
              <label className="field-label">Full Name</label>
              <div className="field-wrap">
                <span className="field-icon">👤</span>
                <input
                  name="fullName"
                  type="text"
                  className="field-input"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Phone Number</label>
              <div className="field-wrap">
                <span className="field-icon">📞</span>
                <input
                  name="phone"
                  type="tel"
                  className="field-input"
                  placeholder="+233 xx xxx xxxx"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Password</label>
              <div className="field-wrap">
                <span className="field-icon">🔒</span>
                <input
                  name="password"
                  type="password"
                  className="field-input"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`submit-btn ${loading ? "submit-btn--loading" : ""}`}
              disabled={loading}
            >
              {loading ? <span className="spinner"></span> : "Create Account"}
            </button>
          </form>

          <div className="form-footer">
            <span>Already have an account?</span>
            <button className="link-btn" onClick={() => navigate("/login")}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;