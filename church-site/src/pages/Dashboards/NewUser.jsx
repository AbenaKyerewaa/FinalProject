import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";

const ministries = [
  "Women's Fellowship",
  "Men's Fellowship",
  "Prayer Group",
  "SEENIM",
  "Faith Society",
  "Worship Ministry",
  "Youth Ministry",
  "Children's Ministry",
  "Choir Ministry",
  "Media Ministry",
  "Welfare Ministry",
  "Community Outreach",
];

export default function NewUserSetup() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", dob: "", gender: "", address: "", ministries: [],
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleMinistryToggle = (ministry) => {
    const current = form.ministries;
    if (current.includes(ministry)) {
      setForm({ ...form, ministries: current.filter((m) => m !== ministry) });
    } else if (current.length < 4) {
      setForm({ ...form, ministries: [...current, ministry] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.ministries.length === 0) {
      alert("Please select at least one ministry");
      return;
    }
    setSubmitted(true);

    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/users/setup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fullName: form.fullName,
        dob:      form.dob,
        gender:   form.gender,
        address:  form.address,
        ministry: form.ministries.join(", "),
      }),
    })
      .then((res) => res.json())
      .then(() => setTimeout(() => navigate("/login"), 3000))
      .catch(() => setTimeout(() => navigate("/login"), 3000));
  };

  return (
    <div className="ns-wrapper">

      {/* Background decoration */}
      <div className="ns-bg">
        <div className="ns-orb ns-orb--1" />
        <div className="ns-orb ns-orb--2" />
        <div className="ns-cross-mark">✝</div>
      </div>

      <div className="ns-card">

        {/* Logo */}
        <div className="ns-logo">
          <span className="ns-logo-cross">✝</span>
          <div>
            <p className="ns-logo-name">Musama</p>
            <p className="ns-logo-sub">Church Management System</p>
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Welcome message */}
            <div className="ns-welcome">
              <span className="ns-welcome-badge">✦ Welcome to the Family</span>
              <h1 className="ns-welcome-title">Complete Your Profile</h1>
              <p className="ns-welcome-text">
                You're almost in! Fill in a few details so we can set up your
                membership profile and connect you to the right ministry.
              </p>
            </div>

            {/* Form */}
            <form className="ns-form" onSubmit={handleSubmit}>

              <div className="ns-field">
                <label className="ns-label" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName" name="fullName" type="text"
                  className="ns-input" placeholder="e.g. Abena Mensah"
                  value={form.fullName} onChange={handleChange} required
                />
              </div>

              <div className="ns-row">
                <div className="ns-field">
                  <label className="ns-label" htmlFor="dob">Date of Birth</label>
                  <input
                    id="dob" name="dob" type="date"
                    className="ns-input"
                    value={form.dob} onChange={handleChange} required
                  />
                </div>

                <div className="ns-field">
                  <label className="ns-label" htmlFor="gender">Gender</label>
                  <select
                    id="gender" name="gender"
                    className="ns-input ns-select"
                    value={form.gender} onChange={handleChange} required
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="ns-field">
                <label className="ns-label" htmlFor="address">Home Address</label>
                <input
                  id="address" name="address" type="text"
                  className="ns-input" placeholder="e.g. Gomoa Fetteh, Ghana"
                  value={form.address} onChange={handleChange} required
                />
              </div>

              <div className="ns-field">
                <label className="ns-label">
                  Interested Ministries
                  <span style={{ color:"#7a7370", fontWeight:400, textTransform:"none", letterSpacing:0 }}>
                    {" "}(choose up to 4)
                  </span>
                </label>

                <div className="ns-ministry-grid">
                  {ministries.map((m) => {
                    const selected = form.ministries.includes(m);
                    const maxed    = form.ministries.length >= 4 && !selected;
                    return (
                      <button
                        type="button" key={m}
                        className={`ns-ministry-btn ${selected ? "ns-ministry-btn--on" : ""} ${maxed ? "ns-ministry-btn--disabled" : ""}`}
                        onClick={() => handleMinistryToggle(m)}
                        disabled={maxed}
                      >
                        {selected && <span className="ns-check">✓</span>}
                        {m}
                      </button>
                    );
                  })}
                </div>

                {form.ministries.length > 0 && (
                  <p className="ns-selected-count">
                    {form.ministries.length} selected: {form.ministries.join(", ")}
                  </p>
                )}
              </div>

              <button type="submit" className="ns-submit">
                Submit &amp; Continue
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>

              <p className="ns-note">
                Your information is safe and only used for church membership records.
              </p>

            </form>
          </>
        ) : (
          <div className="ns-success">
            <div className="ns-success-ring">✦</div>
            <h2 className="ns-success-title">Profile Submitted!</h2>
            <p className="ns-success-text">
              Welcome to the Musama family, <strong>{form.fullName || "friend"}</strong>! 🎉<br />
              You'll be redirected to login in a moment…
            </p>
            <div className="ns-progress-bar">
              <div className="ns-progress-fill" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
