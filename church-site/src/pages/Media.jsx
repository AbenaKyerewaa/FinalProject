import { useState } from "react";
import "./Media.css";

const categories = ["All", "Sermons", "Worship", "Conferences", "Testimonies"];

const mediaItems = [
  { id: 1, category: "Sermons",     title: "Walking in Faith",           speaker: "Pastor James Mensah",  date: "Feb 16, 2025", duration: "48 min" },
  { id: 2, category: "Worship",     title: "Sunday Praise & Worship",    speaker: "Worship Team",          date: "Feb 16, 2025", duration: "32 min" },
  { id: 3, category: "Sermons",     title: "The Power of Prayer",        speaker: "Elder Grace Asante",    date: "Feb 09, 2025", duration: "55 min" },
  { id: 4, category: "Conferences", title: "Leadership Summit 2025",     speaker: "Various Speakers",      date: "Jan 25, 2025", duration: "2 hr"   },
  { id: 5, category: "Sermons",     title: "Grace Upon Grace",           speaker: "Pastor James Mensah",  date: "Jan 19, 2025", duration: "42 min" },
  { id: 6, category: "Testimonies", title: "My Healing Testimony",       speaker: "Sister Abena Boateng", date: "Jan 12, 2025", duration: "18 min" },
  { id: 7, category: "Worship",     title: "Evening Worship Night",      speaker: "Choir Ministry",        date: "Jan 05, 2025", duration: "1 hr"   },
  { id: 8, category: "Conferences", title: "Women's Retreat Highlights", speaker: "Women's Ministry",     date: "Dec 14, 2024", duration: "1.5 hr" },
  { id: 9, category: "Sermons",     title: "Rooted in the Word",         speaker: "Elder Grace Asante",   date: "Dec 08, 2024", duration: "50 min" },
];

const tagStyle = {
  Sermons:     { bg: "rgba(139,17,17,0.1)",   color: "#8b1111" },
  Worship:     { bg: "rgba(13,31,53,0.1)",    color: "#0d1f35" },
  Conferences: { bg: "rgba(201,168,76,0.18)", color: "#7a5e10" },
  Testimonies: { bg: "rgba(15,118,110,0.1)",  color: "#0f766e" },
};

const Media = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? mediaItems : mediaItems.filter((m) => m.category === active);

  return (
    <div className="media-page">

      {/* Hero */}
      <section className="media-hero">
        <div className="mh-cross">✝</div>
        <div className="mh-orb mh-orb--1" />
        <div className="mh-orb mh-orb--2" />
        <div className="mh-inner">
          <span className="mh-badge">✦ Watch &amp; Listen</span>
          <h1 className="mh-title">Media Library</h1>
          <div className="mh-rule" />
          <p className="mh-text">
            Sermons, worship sessions, and conferences — revisit every moment of God's move in our church.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="media-body">
        <div className="m-container">

          {/* Filters */}
          <div className="m-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`m-filter ${active === c ? "m-filter--on" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="m-grid">
            {filtered.map((item) => {
              const ts = tagStyle[item.category] || tagStyle.Sermons;
              return (
                <div key={item.id} className="m-card">
                  <div className="m-thumb">
                    <div className="m-thumb-bg">
                      <div className="m-play">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                    <span className="m-dur">{item.duration}</span>
                    <span className="m-tag" style={{ background: ts.bg, color: ts.color }}>
                      {item.category}
                    </span>
                  </div>

                  <div className="m-body">
                    <h3 className="m-title">{item.title}</h3>
                    <p className="m-speaker">{item.speaker}</p>
                    <div className="m-foot">
                      <span className="m-date">{item.date}</span>
                      <button className="m-watch">
                        Watch
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coming soon */}
          <div className="m-coming">
            <span>🎬</span>
            <p>More content coming soon — videos will load once the media library is connected.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Media;
