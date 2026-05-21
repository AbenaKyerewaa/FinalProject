import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

        {/* HERO */}
      <section className="contact-hero">
        <div className="mh-cross">✝</div>
        <div className="mh-orb mh-orb--1" />
        <div className="mh-orb mh-orb--2" />
        <div className="mh-inner">
          <span className="mh-badge">✦ Get In Touch</span>
          <h1 className="mh-title">CONTACT US</h1>
          <div className="mh-rule" />
          <p className="mh-text">
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* LEFT - INFO */}
            <div>
              <h2 className="section-title">Church Information</h2>

              <div className="info-list">

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="info-title">Address</h3>
                    <p className="info-text">Gomoa Fetteh, Ghana</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="info-title">Phone</h3>
                    <p className="info-text">+233 20 778 9194</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="info-title">Email</h3>
                    <p className="info-text">info@musama.org</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="info-title">Service Times</h3>
                    <p className="info-text">Sunday: 9:00 AM – 11:30 AM</p>
                    <p className="info-text">Wednesday: 6:00 PM – 8:00 PM</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="form-wrapper">

              {submitted ? (
                <div className="success-box">
                  <p className="success-icon">✦</p>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">

                  <h2>Send a Message</h2>

                  <div className="row">
                    <div>
                      <label>Full Name</label>
                      <input type="text" required placeholder="Your name" />
                    </div>

                    <div>
                      <label>Phone</label>
                      <input type="tel" placeholder="+233..." />
                    </div>
                  </div>

                  <div>
                    <label>Email</label>
                    <input type="email" required placeholder="you@example.com" />
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea rows="5" required placeholder="How can we help you?" />
                  </div>

                  <button type="submit">Send Message</button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;