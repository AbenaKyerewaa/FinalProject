import { useState } from "react";
import "./Resources.css";

const categories = ["All", "Bible Study", "Devotionals", "Hymnal", "Constitutions", "Teachings"];

const resources = [
  { id: 1,  category: "Bible Study",   title: "40 Days of Prayer Guide",      desc: "A structured 40-day prayer and fasting devotional for personal growth.",    type: "PDF",  size: "1.2 MB", date: "Feb 2025" },
  { id: 2,  category: "Devotionals",   title: "Daily Strength — Feb Edition",  desc: "Daily scripture readings and reflections for the month of February.",       type: "PDF",  size: "840 KB", date: "Feb 2025" },
  { id: 3,  category: "Bible Study",   title: "Book of Romans Study Notes",    desc: "In-depth chapter-by-chapter study guide through the Book of Romans.",       type: "PDF",  size: "2.4 MB", date: "Jan 2025" },
  { id: 4,  category: "Devotionals",   title: "7-Day Marriage Devotional",     desc: "A faith-based couples devotional for strengthening godly marriages.",        type: "PDF",  size: "1.8 MB", date: "Dec 2024" },
  { id: 5,  category: "Hymnal",        title: "Musama Hymnal — Vol. 1",        desc: "A collection of sacred hymns and songs sung in our church services.",       type: "PDF",  size: "3.5 MB", date: "Jan 2025" },
  { id: 6,  category: "Hymnal",        title: "Praise & Worship Songbook",     desc: "Contemporary worship songs and choruses used in Sunday services.",           type: "PDF",  size: "2.1 MB", date: "Feb 2025" },
  { id: 7,  category: "Constitutions", title: "Church Constitution",           desc: "The official constitution and bylaws governing the Musama church.",          type: "PDF",  size: "1.6 MB", date: "Mar 2024" },
  { id: 8,  category: "Constitutions", title: "Ministry Code of Conduct",      desc: "Guidelines and standards of conduct for all church ministers and leaders.",  type: "PDF",  size: "980 KB", date: "Jun 2024" },
  { id: 9,  category: "Teachings",     title: "Foundations of Faith",          desc: "Core doctrinal teachings and beliefs of the Musama church.",                 type: "PDF",  size: "2.8 MB", date: "Jan 2025" },
  { id: 10, category: "Teachings",     title: "The Holy Spirit — A Study",     desc: "A comprehensive teaching series on the person and work of the Holy Spirit.", type: "PDF",  size: "1.4 MB", date: "Dec 2024" },
];

const typeIcon = {
  PDF:  { icon: "📄", color: "#8b1111", label: "PDF" },
  DOCX: { icon: "📝", color: "#0d1f35", label: "DOCX" },
};

const catIcon = {
  "Bible Study":  "📖",
  Devotionals:    "🙏",
  Hymnal:         "🎵",
  Constitutions:  "📜",
  Teachings:      "✝",
};

const Resources = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? resources : resources.filter((r) => r.category === active);

  return (
    <div className="res-page">

      {/* Hero */}
      <section className="res-hero">
        <div className="rh-cross">✝</div>
        <div className="rh-orb rh-orb--1" />
        <div className="rh-orb rh-orb--2" />
        <div className="rh-inner">
          <span className="rh-badge">✦ Download &amp; Grow</span>
          <h1 className="rh-title">Resources</h1>
          <div className="rh-rule" />
          <p className="rh-text">
            Hymnals, constitutions, teachings, Bible study guides and devotionals — everything you need to grow in faith.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="res-body">
        <div className="r-container">

          {/* Filters */}
          <div className="r-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`r-filter ${active === c ? "r-filter--on" : ""}`}
                onClick={() => setActive(c)}
              >
                {catIcon[c] && <span>{catIcon[c]}</span>}
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="r-grid">
            {filtered.map((item) => {
              const t = typeIcon[item.type] || typeIcon.PDF;
              return (
                <div key={item.id} className="r-card">

                  {/* Icon area */}
                  <div className="r-card-icon-wrap" style={{ background: `${t.color}12` }}>
                    <span className="r-card-emoji">{t.icon}</span>
                    <span className="r-type-badge" style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10` }}>
                      {t.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="r-card-body">
                    <span className="r-cat-label">{catIcon[item.category]} {item.category}</span>
                    <h3 className="r-card-title">{item.title}</h3>
                    <p className="r-card-desc">{item.desc}</p>

                    <div className="r-card-foot">
                      <div className="r-meta">
                        <span>{item.date}</span>
                        <span className="r-dot">·</span>
                        <span>{item.size}</span>
                      </div>
                      <button className="r-download-btn">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Coming soon strip */}
          <div className="r-coming">
            <span>📚</span>
            <p>More resources will be available once our document library is connected to the backend.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Resources;