import "./Home.css";
import { Users, Heart, Music, HandHelping, Baby, BookOpen } from "lucide-react";
import StatsSection from "../components/StatsSection";


function Home() {
  return (
    <div>

      {/* Church Banner Section - with background image */}
      <section className="church-banner">
        <div className="banner-overlay">
          <div className="banner-container">
            {/* ✦ Welcome to Our Church */}
            <p className="welcome-tag">
              ✦ Welcome to Our Church
            </p>
            
            {/* OUR YEAR OF PEACE */}
            <h1 className="main-heading">
              OUR YEAR OF<br />PEACE
            </h1>
            
            {/* TWENTY-TWENTY SIX */}
            <p className="year-text">
              TWENTY-TWENTY SIX
            </p>
            
            {/* Scripture quote */}
            <p className="scripture-text">
              "May the LORD of PEACE himself give you PEACE"
              <br />
              <span className="scripture-ref">— 2 Thessalonians 3:16</span>
            </p>
            
            {/* Slogan and Response */}
            <p className="slogan-text">
              SLOGAN: I HAVE GOD'S PEACE<br />
              RESPONSE: IN ALL WAYS
            </p>
          </div>
        </div>
      </section>

     <StatsSection />


      {/* About Section */}
<section className="about-section">
  <div className="about-container">

    {/* Left Content */}
    <div className="about-text">
      <p className="about-tag">ABOUT OUR CHURCH</p>

      <h2 className="about-title">
        A Place of Worship, Growth & Community
      </h2>

      <p className="about-description">
        We are a Christ-centered church committed to raising lives,
        restoring hope, and building a strong community through the
        power of God's Word. Our mission is to lead people into a
        growing relationship with Jesus Christ and help them discover
        their purpose.
      </p>

      <p className="about-description">
        Whether you are new to faith or looking for a church home,
        you are welcome here. Join us as we worship, learn, and grow
        together in love and unity.
      </p>

      <a href="/about" className="about-btn">
        Learn More →
      </a>
    </div>

    {/* Right Content */}
    <div className="about-image">
      <img src="./churchpic.png" alt="Church community" />
    </div>

  </div>
</section>

      {/* Ministries */}
<section className="ministries-section">
  <div className="container">

    <h2 className="section-title">OUR MINISTRIES</h2>
    <p className="section-subtitle">
      Serving our community through various ministries that strengthen faith and build lasting relationships.
    </p>

    <div className="ministries-grid">

  {/* Card 1 */}
  <div className="ministry-card">
    <div className="icon-box"><Users size={22} /></div>
    <h3>Youth Ministry</h3>
    <p>Empowering the next generation through vibrant study, fellowship, and community service.</p>
    <a href="#">Learn More →</a>
  </div>

  {/* Card 2 */}
  <div className="ministry-card">
    <div className="icon-box"><Heart size={22} /></div>
    <h3>Women's Fellowship</h3>
    <p>Building strong relationships among women through prayer, study, and mutual support.</p>
    <a href="#">Learn More →</a>
  </div>

  {/* Card 3 */}
  <div className="ministry-card">
    <div className="icon-box"><Music size={22} /></div>
    <h3>Worship Ministry</h3>
    <p>Leading our congregation in spirit-filled worship through music and praise.</p>
    <a href="#">Learn More →</a>
  </div>

  {/* Card 4 */}
  <div className="ministry-card">
    <div className="icon-box"><HandHelping size={22} /></div>
    <h3>Community Outreach</h3>
    <p>Serving our local community through outreach campaigns and initiatives.</p>
    <a href="#">Learn More →</a>
  </div>

  {/* Card 5 */}
  <div className="ministry-card">
    <div className="icon-box"><Baby size={22} /></div>
    <h3>Children's Ministry</h3>
    <p>Nurturing young hearts with age-appropriate biblical teachings.</p>
    <a href="#">Learn More →</a>
  </div>

  {/* Card 6 */}
  <div className="ministry-card">
    <div className="icon-box"><BookOpen size={22} /></div>
    <h3>Prayer Ministry</h3>
    <p>Raising prayer warriors committed to interceding for the church.</p>
    <a href="ministries/prayer-ministry">Learn More →</a>
  </div>

</div>

    <div className="more-link">
      <a href="ministries">Many More →</a>
    </div>

  </div>
</section>

      {/* Upcoming Events Section */}
<section className="events-section">
  <div className="events-container">

    <p className="events-tag">UPCOMING EVENTS</p>
    <h2 className="events-title">JOIN US</h2>
    <p className="events-subtitle">
      Be part of what God is doing in our community
    </p>

    <div className="events-list">

      {/* Event 1 */}
      <div className="event-card">
        <div className="event-date">
          <span className="day">15</span>
          <span className="month">FEB</span>
        </div>

        <div className="event-info">
          <h3>Sunday Morning Service</h3>
          <p>Main Sanctuary · 9:00 AM – 11:30 AM</p>
        </div>

        <span className="event-tag">Worship</span>
      </div>

      {/* Event 2 */}
      <div className="event-card">
        <div className="event-date">
          <span className="day">18</span>
          <span className="month">FEB</span>
        </div>

        <div className="event-info">
          <h3>Prayer & Fasting Conference</h3>
          <p>Conference Hall · 6:00 PM – 9:00 PM</p>
        </div>

        <span className="event-tag">Prayer</span>
      </div>

      {/* Event 3 */}
      <div className="event-card">
        <div className="event-date">
          <span className="day">22</span>
          <span className="month">FEB</span>
        </div>

        <div className="event-info">
          <h3>Youth Revival Night</h3>
          <p>Youth Center · 5:00 PM – 10:00 PM</p>
        </div>

        <span className="event-tag">Revival</span>
      </div>

      {/* Event 4 */}
      <div className="event-card">
        <div className="event-date">
          <span className="day">25</span>
          <span className="month">MAR</span>
        </div>

        <div className="event-info">
          <h3>Annual Leadership Conference</h3>
          <p>Main Auditorium · 9:00 AM – 5:00 PM</p>
        </div>

        <span className="event-tag">Conference</span>
      </div>

    </div>

    <div className="events-more">
      <a href="/events">See More  →</a>
    </div>

  </div>
</section>
  

     {/* Resources Section */}
<section className="resources-section">
  <div className="container">

    <p className="resources-tag">RESOURCES</p>
    <h2 className="resources-title">Grow Your Faith</h2>
    <p className="resources-subtitle">
      Access spiritual materials to strengthen your walk with God.
    </p>

    <div className="resources-grid">

      {/* Hymnal */}
      <a href="/resources/hymnal" className="resource-card">
        <h3>Hymnal</h3>
        <p>Sing along with our collection of powerful hymns.</p>
        <span>Explore →</span>
      </a>

      {/* Constitution */}
      <a href="/resources/constitution" className="resource-card">
        <h3>Church Constitution</h3>
        <p>Learn about our beliefs, structure, and governance.</p>
        <span>Read →</span>
      </a>

      {/* Media */}
      <a href="/media" className="resource-card">
        <h3>Media</h3>
        <p>Watch sermons and stay connected with our teachings.</p>
        <span>Watch →</span>
      </a>

    </div>

  </div>
</section>

     </div>
  );
}

export default Home;