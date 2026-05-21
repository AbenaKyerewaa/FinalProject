import { useParams, Link } from "react-router-dom";
import { allMinistries } from "./ministriesData";
import { ArrowLeft, Clock, User } from "lucide-react";
import "./MinistryDetail.css";

const MinistryDetail = () => {
  const { slug } = useParams();
  const ministry = allMinistries.find((m) => m.slug === slug);

  if (!ministry) {
    return (
      <div className="md-page">
        <div className="md-not-found">
          <h1>Ministry Not Found</h1>
          <Link to="/ministries" className="md-back">
            <ArrowLeft size={16} />
            <span>Back to Ministries</span>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ministry.icon;

  return (
    <div className="md-page">

      {/* HERO IMAGE */}
      <div className="md-hero-image">
        <img src={ministry.heroImage[0]} alt={ministry.title} style={{ objectPosition: top || "center" }}/>
        <div className="md-hero-overlay" />
      </div>

      {/* ARTICLE BODY */}
      <div className="md-body">

        {/* BACK */}
        <Link to="/ministries" className="md-back">
          <ArrowLeft size={16} />
          <span>All Ministries</span>
        </Link>

        {/* TITLE BLOCK */}
        <div className="md-title-block">
          <div className="md-icon-badge">
            <Icon size={20} />
          </div>
          <h1 className="md-title">{ministry.title}</h1>
          <p className="md-lead">{ministry.description}</p>

          <div className="md-meta">
            <span className="md-meta-item">
              <Clock size={14} />
              {ministry.meetingTime}
            </span>
            <span className="md-meta-divider">·</span>
            <span className="md-meta-item">
              <User size={14} />
              {ministry.leader}
            </span>
          </div>
        </div>

        <hr className="md-rule" />

        {/* ABOUT TEXT */}
        <p className="md-prose">{ministry.fullDescription}</p>

      {/* PHOTO GRID */}
{ministry.images?.length > 0 && (
  <div className="md-photo-grid">
    {ministry.images.map((img, i) => (
      <figure key={i} className="md-photo-item">
        <img src={img.src} alt={img.caption} />
        {img.caption && <figcaption>{img.caption}</figcaption>}
      </figure>
    ))}
  </div>
)}

        {/* WHAT WE DO */}
        {ministry.activities && (
          <>
            <h2 className="md-section-title">What We Do</h2>
            <ul className="md-activities">
              {ministry.activities.map((activity, i) => (
                <li key={i}>
                  <span className="md-bullet">✦</span>
                  {activity}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* INLINE IMAGE 2 */}
        {ministry.images?.[1] && (
          <figure className="md-figure">
            <img src={ministry.images[1].src} alt={ministry.images[1].caption} />
            {ministry.images[1].caption && (
              <figcaption>{ministry.images[1].caption}</figcaption>
            )}
          </figure>
        )}

        <hr className="md-rule" />

        {/* CTA */}
        <div className="md-cta">
          <h3>Get Involved</h3>
          <p>
            Interested in joining the {ministry.title}? We'd love to have you!
            Reach out to us to learn about upcoming meetings and how you can contribute.
          </p>
          <Link to="/contact" className="md-cta-btn">Contact Us</Link>
        </div>

      </div>
    </div>
  );
};

export default MinistryDetail;