import { useParams, Link } from "react-router-dom";
import { allMinistries } from "./Ministries";
import { ArrowLeft } from "lucide-react";
import "./MinistryDetail.css";

const MinistryDetail = () => {
  const { slug } = useParams();
  const ministry = allMinistries.find((m) => m.slug === slug);

  if (!ministry) {
    return (
      <div className="ministry-detail-page">
        <div className="ministry-detail-content-inner" style={{ paddingTop: "100px" }}>
          <h1>Ministry Not Found</h1>
          <Link to="/ministries" className="ministry-detail-back">
            <ArrowLeft size={16} />
            <span>Back to Ministries</span>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ministry.icon;

  return (
    <div className="ministry-detail-page">
      <section className="ministry-detail-hero">
        <div className="ministry-detail-hero-inner">
          <Link to="/ministries" className="ministry-detail-back">
            <ArrowLeft size={18} />
            <span>All Ministries</span>
          </Link>

          <div className="ministry-detail-header">
            <div className="ministry-detail-icon">
              <Icon size={30} />
            </div>

            <h1 className="ministry-detail-title">{ministry.title}</h1>
          </div>
        </div>
      </section>

      <section className="ministry-detail-content">
        <div className="ministry-detail-content-inner">
          <p className="ministry-detail-text">{ministry.fullDescription}</p>

          <div className="ministry-detail-cta">
            <h3>Get Involved</h3>
            <p>
              Interested in joining the {ministry.title}? We'd love to have you!
              Reach out to us to learn about upcoming meetings and how you can contribute.
            </p>

            <Link to="/contact" className="ministry-detail-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetail;