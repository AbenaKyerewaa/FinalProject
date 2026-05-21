import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, CalendarDays, HandCoins,
  Church, Settings, LogOut, Bell, Search,
  TrendingUp, ChevronRight, Menu, X
} from "lucide-react";
import "./AdminDashboard.css";

const stats = [
  { label: "Total Members",     value: "120",    sub: "+4 this month",  icon: <Users size={22} />,        color: "stat--crimson" },
  { label: "Upcoming Events",   value: "5",      sub: "Next: Sunday",   icon: <CalendarDays size={22} />, color: "stat--navy"    },
  { label: "Total Donations",   value: "GH₵3,500", sub: "+GH₵200 today", icon: <HandCoins size={22} />,   color: "stat--gold"    },
  { label: "Active Ministries", value: "8",      sub: "2 need attention",icon: <Church size={22} />,      color: "stat--teal"    },
];

const activity = [
  { icon: <Users size={15} />,       text: "John Doe registered as a new member",    time: "2 min ago",  type: "member"   },
  { icon: <CalendarDays size={15} />, text: "Youth Conference event added for July",  time: "1 hr ago",   type: "event"    },
  { icon: <HandCoins size={15} />,    text: "GH₵200 donation received from Anonymous",time: "3 hrs ago",  type: "donation" },
  { icon: <Church size={15} />,       text: "Choir ministry schedule updated",         time: "Yesterday",  type: "ministry" },
  { icon: <Users size={15} />,        text: "Mary Asante updated her profile",          time: "Yesterday",  type: "member"   },
];

const navItems = [
  { label: "Dashboard",  icon: <LayoutDashboard size={18} /> },
  { label: "Members",    icon: <Users size={18} /> },
  { label: "Events",     icon: <CalendarDays size={18} /> },
  { label: "Donations",  icon: <HandCoins size={18} /> },
  { label: "Ministries", icon: <Church size={18} /> },
  { label: "Settings",   icon: <Settings size={18} /> },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="db-shell">

      {/* Mobile overlay */}
      {sidebarOpen && <div className="db-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* ── Sidebar ── */}
      <aside className={`db-sidebar ${sidebarOpen ? "db-sidebar--open" : ""}`}>
        <div className="db-sidebar-top">
          <div className="db-logo">
            <span className="db-logo-cross">✝</span>
            <div>
              <p className="db-logo-name">Musama</p>
              <p className="db-logo-sub">Church CMS</p>
            </div>
          </div>
          <button className="db-sidebar-close" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <p className="db-nav-label">Main Menu</p>
        <nav className="db-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`db-nav-item ${active === item.label ? "db-nav-item--active" : ""}`}
              onClick={() => { setActive(item.label); setSidebarOpen(false); }}
            >
              <span className="db-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {active === item.label && <ChevronRight size={14} className="db-nav-chevron" />}
            </button>
          ))}
        </nav>

        <div className="db-sidebar-footer">
          <button className="db-logout" onClick={() => navigate("/")}>
            <LogOut size={16} />
            <span>Back Home</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="db-main">

        {/* Topbar */}
        <header className="db-topbar">
          <div className="db-topbar-left">
            <button className="db-hamburger" onClick={() => setSidebarOpen(true)}>
              <Menu size={22} />
            </button>
            <div className="db-search">
              <Search size={15} className="db-search-icon" />
              <input type="text" placeholder="Search anything..." className="db-search-input" />
            </div>
          </div>
          <div className="db-topbar-right">
            <button className="db-icon-btn">
              <Bell size={18} />
              <span className="db-badge">3</span>
            </button>
            <div className="db-avatar">AD</div>
          </div>
        </header>

        {/* Content */}
        <div className="db-content">

          {/* Page heading */}
          <div className="db-page-header">
            <div>
              <p className="db-page-eyebrow">✦ Overview</p>
              <h1 className="db-page-title">Admin Dashboard</h1>
            </div>
            <p className="db-page-date">{new Date().toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}</p>
          </div>

          {/* Welcome banner */}
          <div className="db-banner">
            <div className="db-banner-text">
              <h2 className="db-banner-title">Good morning, Admin 👋</h2>
              <p className="db-banner-sub">Here's what's happening at your church today.</p>
            </div>
            <div className="db-banner-cross">✝</div>
          </div>

          {/* Stat cards */}
          <div className="db-stats">
            {stats.map((s) => (
              <div key={s.label} className={`db-stat ${s.color}`}>
                <div className="db-stat-icon">{s.icon}</div>
                <div className="db-stat-body">
                  <p className="db-stat-label">{s.label}</p>
                  <p className="db-stat-value">{s.value}</p>
                  <p className="db-stat-sub">
                    <TrendingUp size={11} style={{marginRight:4}} />
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom grid */}
          <div className="db-bottom">

            {/* Recent activity */}
            <div className="db-panel">
              <div className="db-panel-head">
                <h2 className="db-panel-title">Recent Activity</h2>
                <button className="db-panel-link">View all</button>
              </div>
              <ul className="db-activity">
                {activity.map((a, i) => (
                  <li key={i} className="db-activity-item">
                    <span className={`db-activity-dot db-activity-dot--${a.type}`}>{a.icon}</span>
                    <div className="db-activity-body">
                      <p className="db-activity-text">{a.text}</p>
                      <p className="db-activity-time">{a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick stats panel */}
            <div className="db-panel">
              <div className="db-panel-head">
                <h2 className="db-panel-title">Quick Actions</h2>
              </div>
              <div className="db-quick-actions">
                {[
                  { icon: <Users size={18} />,        label: "Add Member"   },
                  { icon: <CalendarDays size={18} />,  label: "New Event"    },
                  { icon: <HandCoins size={18} />,     label: "Log Donation" },
                  { icon: <Church size={18} />,        label: "New Ministry" },
                ].map((q) => (
                  <button key={q.label} className="db-quick-btn">
                    <span className="db-quick-icon">{q.icon}</span>
                    <span>{q.label}</span>
                  </button>
                ))}
              </div>

              <div className="db-panel-head" style={{marginTop:"1.5rem"}}>
                <h2 className="db-panel-title">Service This Week</h2>
              </div>
              <div className="db-service-list">
                {[
                  { day: "Sunday",    time: "9:00 AM", label: "Main Service" },
                  { day: "Wednesday", time: "6:00 PM", label: "Bible Study"  },
                  { day: "Friday",    time: "7:00 PM", label: "Prayer Night" },
                ].map((s) => (
                  <div key={s.day} className="db-service-item">
                    <div className="db-service-dot"></div>
                    <div>
                      <p className="db-service-name">{s.label}</p>
                      <p className="db-service-time">{s.day} · {s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
