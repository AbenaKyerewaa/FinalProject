import React from 'react';
import './StatsSection.css';

const stats = [
  { value: "100", label: "Years of Ministry" },
  { value: "5,000+", label: "Church Members" },
  { value: "15", label: "Active Ministries" },
  { value: "5,000+", label: "Lives Transformed" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;