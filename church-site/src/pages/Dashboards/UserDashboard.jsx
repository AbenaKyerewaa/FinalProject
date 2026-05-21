import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, Bell, CalendarDays, Wallet, LogOut,
  CreditCard, CheckCircle2, ChevronRight, Menu, X, Phone, Hash, Church, Home
} from "lucide-react";
import "./UserDashboard.css";

const announcements = [
  { id: 1, title: "Church Picnic — March 1st", body: "Join us for our annual church family picnic at the church grounds.", date: "Feb 20, 2025", tag: "Event" },
  { id: 2, title: "Fasting & Prayer Week", body: "We will be observing a week of corporate fasting and prayer starting Monday.", date: "Feb 18, 2025", tag: "Spiritual" },
  { id: 3, title: "New Sunday School Schedule", body: "Sunday school classes have been rescheduled to 8:30 AM starting next Sunday.", date: "Feb 15, 2025", tag: "Update" },
];

const events = [
  { id: 1, day: "23", month: "FEB", title: "Sunday Morning Service",    time: "9:00 AM – 11:30 AM", location: "Main Sanctuary" },
  { id: 2, day: "26", month: "FEB", title: "Midweek Prayer Meeting",     time: "6:00 PM – 8:00 PM",  location: "Conference Hall" },
  { id: 3, day: "01", month: "MAR", title: "Church Family Picnic",       time: "10:00 AM – 3:00 PM", location: "Church Grounds" },
];

const tagColors = {
  Event:    { bg: "rgba(13,31,53,0.08)",   color: "#0d1f35" },
  Spiritual:{ bg: "rgba(139,17,17,0.08)", color: "#8b1111" },
  Update:   { bg: "rgba(201,168,76,0.15)", color: "#7a5e10" },
  Ministry: { bg: "rgba(15,118,110,0.1)", color: "#0f766e" },
};

const navItems = [
  { key: "home",          label: "Home",            icon: Home },
  { key: "profile",       label: "My Profile",      icon: User },
  { key: "announcements", label: "Announcements",   icon: Bell },
  { key: "events",        label: "Upcoming Events", icon: CalendarDays },
  { key: "payment",       label: "Give / Pay",      icon: Wallet },
];

const amounts = [20, 50, 100, 200, 500];

export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab]   = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser]             = useState(null);
  const [loading, setLoading]       = useState(true);

  // payment state
  const [payType, setPayType] = useState("tithe");
  const [amount, setAmount]   = useState("");
  const [method, setMethod]   = useState("momo");
  const [paid, setPaid]       = useState(false);

  // ── Fetch real user data on load ──
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authorised");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.clear();
        navigate("/login");
      });
  }, []);

  const handlePay = (e) => {
    e.preventDefault();
    if (!amount) return;
    setPaid(true);
    setTimeout(() => { setPaid(false); setAmount(""); }, 4000);
  };

  const switchTab = (key) => { setActiveTab(key); setSidebarOpen(false); };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  if (loading) {
    return (
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", fontFamily:"Outfit,sans-serif", color:"#8b1111", fontSize:"1rem" }}>
        Loading your profile...
      </div>
    );
  }

  return (
    <div className="ud-shell">

      {sidebarOpen && <div className="ud-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`ud-sidebar ${sidebarOpen ? "ud-sidebar--open" : ""}`}>
        <div className="ud-sidebar-top">
          <div className="ud-logo">
            <span className="ud-logo-cross">✝</span>
            <div>
              <p className="ud-logo-name">Musama</p>
              <p className="ud-logo-sub">Member Portal</p>
            </div>
          </div>
          <button className="ud-close-btn" onClick={() => setSidebarOpen(false)}><X size={18}/></button>
        </div>

        <div className="ud-sidebar-user">
          <div className="ud-sidebar-avatar">{getInitials(user?.full_name)}</div>
          <p className="ud-sidebar-name">{user?.full_name}</p>
          <p className="ud-sidebar-id">{user?.membership_id}</p>
        </div>

        <nav className="ud-nav">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className={`ud-nav-item ${activeTab === key ? "ud-nav-item--on" : ""}`}
              onClick={() => switchTab(key)}
            >
              <Icon size={17} />
              <span>{label}</span>
              {activeTab === key && <ChevronRight size={13} className="ud-nav-chevron" />}
            </button>
          ))}
        </nav>

        <button className="ud-logout" onClick={handleLogout}>
          <LogOut size={15} /> Sign Out
        </button>
      </aside>

      {/* Main */}
      <div className="ud-main">

        {/* Topbar */}
        <header className="ud-topbar">
          <button className="ud-hamburger" onClick={() => setSidebarOpen(true)}><Menu size={21}/></button>
          <p className="ud-topbar-title">{navItems.find(n => n.key === activeTab)?.label}</p>
          <div className="ud-topbar-avatar">{getInitials(user?.full_name)}</div>
        </header>

        <div className="ud-content">

          {/* ── HOME ── */}
{activeTab === "home" && (
  <div className="ud-section">

    {/* Welcome banner */}
    <div className="ud-welcome-banner">
      <div>
        <p className="ud-welcome-greeting">Peace be with you 🙏</p>
        <h2 className="ud-welcome-name">Hello, {user?.full_name?.split(" ")[0]}!</h2>
        <p className="ud-welcome-sub">
          Member since {new Date(user?.created_at).toLocaleDateString("en-GB", { month:"long", year:"numeric" })}
        </p>
      </div>
      <div className="ud-welcome-cross">✝</div>
    </div>

    {/* Quick summary cards */}
    <div className="ud-home-cards">
      <div className="ud-home-card">
        <p className="ud-home-card-label">Membership ID</p>
        <p className="ud-home-card-value">{user?.membership_id}</p>
      </div>
      <div className="ud-home-card">
        <p className="ud-home-card-label">My Ministries</p>
        <p className="ud-home-card-value">
          {user?.ministry ? user.ministry.split(", ").length : 0}
        </p>
      </div>
      <div className="ud-home-card">
        <p className="ud-home-card-label">Upcoming Events</p>
        <p className="ud-home-card-value">{events.length}</p>
      </div>
      <div className="ud-home-card">
        <p className="ud-home-card-label">Announcements</p>
        <p className="ud-home-card-value">{announcements.length}</p>
      </div>
    </div>

    {/* Latest announcement */}
    <div className="ud-home-section-title">Latest Announcement</div>
    <div className="ud-announce-card" style={{ marginBottom:"1.25rem" }}>
      <div className="ud-announce-left">
        <span className="ud-announce-tag" style={{ background:"rgba(139,17,17,0.08)", color:"#8b1111" }}>
          {announcements[0].tag}
        </span>
        <h3 className="ud-announce-title">{announcements[0].title}</h3>
        <p className="ud-announce-body">{announcements[0].body}</p>
      </div>
      <p className="ud-announce-date">{announcements[0].date}</p>
    </div>

    {/* Next event */}
    <div className="ud-home-section-title">Next Event</div>
    <div className="ud-event-card">
      <div className="ud-event-date">
        <p className="ud-event-day">{events[0].day}</p>
        <p className="ud-event-month">{events[0].month}</p>
      </div>
      <div className="ud-event-info">
        <h3 className="ud-event-title">{events[0].title}</h3>
        <p className="ud-event-meta">⏰ {events[0].time}</p>
        <p className="ud-event-meta">📍 {events[0].location}</p>
      </div>
    </div>

    {/* Daily verse */}
    <div className="ud-home-verse">
      <p className="ud-verse-text">
        "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures."
      </p>
      <p className="ud-verse-ref">— Psalm 23:1-2</p>
    </div>

  </div>
)}
{/* ── PROFILE ── */}
{activeTab === "profile" && (
  <div className="ud-section">
    <div className="ud-welcome-banner">
      <div>
        <p className="ud-welcome-greeting">Your Profile 🙏</p>
        <h2 className="ud-welcome-name">{user?.full_name}</h2>
        <p className="ud-welcome-sub">
          Member since {new Date(user?.created_at).toLocaleDateString("en-GB", { month:"long", year:"numeric" })}
        </p>
      </div>
      <div className="ud-welcome-cross">✝</div>
    </div>

    <div className="ud-profile-grid">

      {/* ID Card */}
      <div className="ud-id-card">
        <div className="ud-id-card-top">
          <div className="ud-id-avatar">{getInitials(user?.full_name)}</div>
          <div>
            <p className="ud-id-name">{user?.full_name}</p>
            <p className="ud-id-role">Church Member</p>
          </div>
        </div>
        <div className="ud-id-divider" />
        <div className="ud-id-row">
          <Hash size={14}/>
          <span>Membership ID</span>
          <strong>{user?.membership_id}</strong>
        </div>
        <div className="ud-id-row">
          <Phone size={14}/>
          <span>Phone</span>
          <strong>{user?.phone}</strong>
        </div>
        <div className="ud-id-row">
          <User size={14}/>
          <span>Gender</span>
          <strong>{user?.gender || "—"}</strong>
        </div>
        <div className="ud-id-row ud-id-row--last">
          <Church size={14}/>
          <span>Address</span>
          <strong>{user?.address || "—"}</strong>
        </div>
      </div>

      {/* Ministries Panel */}
      <div className="ud-ministries-panel">
        <h3 className="ud-panel-title">My Ministries</h3>
        <div className="ud-ministry-list">
          {user?.ministry ? (
            user.ministry.split(", ").map((m, i) => (
              <div className="ud-ministry-item" key={i}>
                <div className="ud-ministry-dot" />
                <span>{m.trim()}</span>
              </div>
            ))
          ) : (
            <p style={{ fontSize:"0.85rem", color:"#7a7370" }}>
              No ministry assigned yet.
            </p>
          )}
        </div>
        <div className="ud-verse-block">
          <p className="ud-verse-text">
            "Each of you should use whatever gift you have received to serve others."
          </p>
          <p className="ud-verse-ref">— 1 Peter 4:10</p>
        </div>
      </div>

    </div>
  </div>
)}
          {/* ── ANNOUNCEMENTS ── */}
          {activeTab === "announcements" && (
            <div className="ud-section">
              <div className="ud-section-header">
                <h2 className="ud-section-title">Announcements</h2>
                <span className="ud-count-badge">{announcements.length}</span>
              </div>
              <div className="ud-announce-list">
                {announcements.map((a) => {
                  const ts = tagColors[a.tag] || tagColors.Update;
                  return (
                    <div key={a.id} className="ud-announce-card">
                      <div className="ud-announce-left">
                        <span className="ud-announce-tag" style={{ background: ts.bg, color: ts.color }}>{a.tag}</span>
                        <h3 className="ud-announce-title">{a.title}</h3>
                        <p className="ud-announce-body">{a.body}</p>
                      </div>
                      <p className="ud-announce-date">{a.date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── EVENTS ── */}
          {activeTab === "events" && (
            <div className="ud-section">
              <div className="ud-section-header">
                <h2 className="ud-section-title">Upcoming Events</h2>
              </div>
              <div className="ud-events-list">
                {events.map((ev) => (
                  <div key={ev.id} className="ud-event-card">
                    <div className="ud-event-date">
                      <p className="ud-event-day">{ev.day}</p>
                      <p className="ud-event-month">{ev.month}</p>
                    </div>
                    <div className="ud-event-info">
                      <h3 className="ud-event-title">{ev.title}</h3>
                      <p className="ud-event-meta">⏰ {ev.time}</p>
                      <p className="ud-event-meta">📍 {ev.location}</p>
                    </div>
                    <button className="ud-event-btn">Add to calendar</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PAYMENT ── */}
          {activeTab === "payment" && (
            <div className="ud-section">
              <div className="ud-section-header">
                <h2 className="ud-section-title">Give / Pay</h2>
              </div>

              {paid ? (
                <div className="ud-pay-success">
                  <CheckCircle2 size={48} className="ud-pay-check" />
                  <h3>Payment Received!</h3>
                  <p>Thank you for your {payType}. God bless you 🙏</p>
                </div>
              ) : (
                <div className="ud-pay-wrapper">
                  <form onSubmit={handlePay} className="ud-pay-form">

                    <div className="ud-pay-field">
                      <label className="ud-pay-label">Payment Type</label>
                      <div className="ud-pay-types">
                        {["tithe","offering","welfare","project"].map((t) => (
                          <button type="button" key={t}
                            className={`ud-pay-type-btn ${payType === t ? "ud-pay-type-btn--on" : ""}`}
                            onClick={() => setPayType(t)}
                          >
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="ud-pay-field">
                      <label className="ud-pay-label">Amount (GH₵)</label>
                      <div className="ud-quick-amounts">
                        {amounts.map((a) => (
                          <button type="button" key={a}
                            className={`ud-amt-btn ${Number(amount) === a ? "ud-amt-btn--on" : ""}`}
                            onClick={() => setAmount(String(a))}
                          >
                            GH₵{a}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        className="ud-pay-input"
                        placeholder="Or enter custom amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                      />
                    </div>

                    <div className="ud-pay-field">
                      <label className="ud-pay-label">Payment Method</label>
                      <div className="ud-pay-methods">
                        {[
                          { key: "momo", label: "Mobile Money", icon: "📱" },
                          { key: "card", label: "Card",         icon: "💳" },
                          { key: "cash", label: "Cash",         icon: "💵" },
                        ].map((m) => (
                          <button type="button" key={m.key}
                            className={`ud-method-btn ${method === m.key ? "ud-method-btn--on" : ""}`}
                            onClick={() => setMethod(m.key)}
                          >
                            <span>{m.icon}</span> {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button type="submit" className="ud-pay-submit">
                      <CreditCard size={17} />
                      Pay {amount ? `GH₵${amount}` : "Now"}
                    </button>

                    <p className="ud-pay-note">🔒 Your generosity supports the work of God.</p>
                  </form>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}