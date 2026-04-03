import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


function Dashboard() {
const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="back-btn" onClick={() => navigate("/")}>
  ← Back Home
</div>

        <h2 className="logo">Church CMS</h2>

        <ul className="menu">
          <li>Dashboard</li>
          <li>Members</li>
          <li>Events</li>
          <li>Donations</li>
          <li>Ministries</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Admin Dashboard</h1>
        <p className="welcome">Welcome to your Church Management System</p>

        {/* Stats Cards */}
        <div className="cards">
          <div className="card">
            <h3>Total Members</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Upcoming Events</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Total Donations</h3>
            <p>$3,500</p>
          </div>

          <div className="card">
            <h3>Active Ministries</h3>
            <p>8</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>John Doe registered as a member</li>
            <li>New event "Youth Conference" added</li>
            <li>$200 donation received</li>
            <li>Choir ministry updated</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;