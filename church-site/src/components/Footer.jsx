import React from 'react';
import { Link } from "react-router-dom";
import { Church, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Church Info Section */}
          <div className="footer-section">
            <Link to="/" className="footer-logo-link">
              <Church className="footer-logo-icon" />
              <div>
                <span className="footer-logo-title">MUSAMA DISCO</span>
                <span className="footer-logo-subtitle">CHRISTO CHURCH</span>
              </div>
            </Link>
            <p className="footer-description">
              Building faith, strengthening community, and transforming lives through the love of Christ.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <Youtube className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            {[
              { label: "About Us", to: "/about" },
              { label: "Ministries", to: "/ministries" },
              { label: "Events", to: "/events" },
              { label: "Sermons", to: "/sermons" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link key={link.label} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Ministries Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Ministries</h4>
            {[
              { label: "Youth Ministry", to: "/ministries/youth-ministry" },
              { label: "Women's Fellowship", to: "/ministries/womens-fellowship" },
              { label: "Men's Ministry", to: "/ministries/mens-ministry" },
              { label: "Children's Ministry", to: "/ministries/childrens-ministry" },
              { label: "Worship Ministry", to: "/ministries/worship-ministry" },
            ].map((link) => (
              <Link key={link.label} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <p className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                Gomoa Fetteh, Kasoa Branch, Ghana
              </p>
              <p className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                +233 20 778 9194
              </p>
              <p className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                info@musama.org
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="footer-container">
          <p className="footer-copyright-text">
            © 2026 Musama Disco Christo Church · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;