import React from 'react';
import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay" />
      <div className="cta-container">
        <h2 className="cta-title">
          READY TO TAKE THE NEXT STEP?
        </h2>
        <p className="cta-description">
          Join our church family and experience the love, community, and spiritual growth that comes from walking with Christ together.
        </p>
        <Link
          to="/contact"
          className="cta-button"
        >
          Connect With Us
        </Link>
      </div>
    </section>
  );
};

export default CTASection;