import React from 'react';
import { Church, BookOpen, Users, Heart, Calendar, Star, Cross, Shield, Footprints, Droplet, Shirt, Utensils } from "lucide-react";
import "./About.css";

const beliefs = [
  "We believe in one God, the Father Almighty, maker of heaven and earth.",
  "We believe in Jesus Christ, His only Son, our Lord and Savior.",
  "We believe in the Holy Spirit, the giver of life and power.",
  "We believe in the Holy Bible as the inspired and infallible Word of God.",
  "We believe in the communion of saints and the fellowship of believers.",
  "We believe in the resurrection of the dead and the life everlasting.",
];

const leadership = [
  { name: "Prophet Jemisimiham Jehu-Appiah", role: "Founder", description: "Founded the Musama Disco Christo Church in 1922, establishing a legacy of faith and spiritual empowerment." },
  { name: "Most Holy Mediator", role: "Head of Church", description: "Provides spiritual direction and oversight for the entire church body across all branches." },
  { name: "Elder Council", role: "Church Governance", description: "A body of seasoned elders who guide the administrative and spiritual affairs of the church." },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container text-center">
          <p className="about-hero-subtitle">✦ Who We Are</p>
          <h1 className="about-hero-title">ABOUT OUR CHURCH</h1>
          <p className="about-hero-text">
            Over 100 years of faith, community, and spiritual transformation in Ghana and beyond.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="about-history">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Church className="history-icon" />
              <h2 className="about-history-heading">Our History</h2>
            </div>
            <div className="about-history-text">
              <p>
                The <strong>Musama Disco Christo Church (MDCC)</strong>, meaning "Army of the Cross of Christ Church," is one of the oldest African Independent Churches in Ghana. Founded in 1922 by <strong>Prophet Jemisimiham (Joseph William Egyanka) Jehu-Appiah</strong>, it represents a fusion of Christian, Methodist, and traditional Akan religious elements. The church is headquartered in <strong>Mozano</strong>, near Gomoa Eshiem in Ghana's Central Region.
              </p>
              <p>
                Initially a Methodist prayer group known as the <strong>Faith Society</strong> (1919), the movement became autonomous following Jehu-Appiah's dismissal from the Methodist Church for his prophetic and healing practices. After persecution in Gomoa Oguan, members relocated several times before settling in Mozano in 1925, regarded as a "holy city" revealed through prophecy.
              </p>
              <p>
                For over a century, the MDCC has grown into a vibrant community with multiple branches across Ghana and the diaspora. The church's name itself reflects its spiritual identity — an army marching forward under the banner of Christ's cross, committed to faith, healing, and community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="about-facts">
        <div className="container">
          <div className="facts-wrapper">
            <div className="facts-header">
              <Star className="facts-icon" />
              <h2 className="facts-title">Key Facts</h2>
            </div>
            <div className="facts-grid">
              <div className="fact-card">
                <span className="fact-year">1922</span>
                <p className="fact-label">Year Founded</p>
              </div>
              <div className="fact-card">
                <span className="fact-year">Mozano</span>
                <p className="fact-label">Headquarters</p>
              </div>
              <div className="fact-card">
                <span className="fact-year">Aug 24</span>
                <p className="fact-label">Asomdwe Afe (Peace Festival)</p>
              </div>
              <div className="fact-card">
                <span className="fact-year">5,000+</span>
                <p className="fact-label">Members Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs & Practices */}
      <section className="about-beliefs">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="beliefs-icon" />
              <h2 className="about-history-heading">Our Beliefs & Practices</h2>
            </div>
            <div className="beliefs-intro">
              <p>The MDCC embodies a rich theological tapestry that weaves biblical foundations with African cultural expressions:</p>
            </div>
            <div className="space-y-4">
              {beliefs.map((belief, i) => (
                <div key={i} className="about-belief-card">
                  <span className="about-belief-icon">✦</span>
                  <p className="belief-text">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distinctive Practices */}
      <section className="about-practices">
        <div className="container">
          <h2 className="practices-title">Distinctive Practices</h2>
          <div className="practices-grid">
            <div className="practice-card">
              <Heart className="practice-icon" />
              <h3>Sacred Practices</h3>
              <p>Extended fasting and prayer, healing with consecrated water, white garments symbolizing purity, and dietary observances rooted in Levitical traditions.</p>
            </div>
            <div className="practice-card">
              <Shield className="practice-icon" />
              <h3>Spiritual Identity</h3>
              <p>Members receive heavenly names, emphasizing purity, communal unity, and covenant relationships blending biblical teaching with Akan cultural ideals.</p>
            </div>
            <div className="practice-card">
              <Calendar className="practice-icon" />
              <h3>Asomdwe Afe Festival</h3>
              <p>The annual Peace Festival on August 24 features covenant renewal rituals, communal reconciliation, and spiritual rededication.</p>
            </div>
            <div className="practice-card">
              <Footprints className="practice-icon" />
              <h3>Removal of Footwear</h3>
              <p>Members remove slippers and shoes before entering the sanctuary as a sign of reverence for holy ground, following the biblical example of Moses at the burning bush.</p>
            </div>
             <div className="practice-card">
              <Droplet className="practice-icon" />
              <h3>Healing with Consecrated Water</h3>
              <p>Water blessed through prayer is used for healing and spiritual cleansing, reflecting faith in God's power to heal through consecrated elements.</p>
            </div>
             <div className="practice-card">
              <Church className="practice-icon" />
              <h3>Sabbath Observance</h3>
              <p>Sunday is kept holy as the Lord's Day, dedicated to worship, rest, and spiritual renewal, free from secular work.</p>
            </div>
             <div className="practice-card">
              <Utensils className="practice-icon" />
              <h3>Dietary Observances</h3>
              <p>Members abstain from pork, rabbit, blood products, and certain meats based on Levitical laws, practicing holiness through self-discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="about-structure">
        <div className="container">
          <div className="structure-content">
            <h2 className="structure-title">Organizational Structure</h2>
            <p className="structure-subtitle">A unique synthesis of Methodist administrative order and Akan traditional leadership</p>
            <div className="structure-grid">
              <div className="structure-card">
                <Cross className="structure-icon" />
                <h3>Akaboha</h3>
                <p>Spiritual head (prophet-king), providing divine guidance and oversight</p>
              </div>
              <div className="structure-card">
                <Users className="structure-icon" />
                <h3>Akatitibi</h3>
                <p>Queen mother, offering wisdom and spiritual counsel</p>
              </div>
              <div className="structure-card">
                <Church className="structure-icon" />
                <h3>Circuits & Assemblies</h3>
                <p>Methodist-inspired administrative divisions organizing local congregations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="leadership-main-title">OUR LEADERSHIP</h2>
            <p className="leadership-subtitle">
              Faithful servants guiding our church community with wisdom and love.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((leader) => (
              <div key={leader.name} className="about-leader-card">
                <div className="about-leader-avatar">
                  <Users className="leader-avatar-icon" />
                </div>
                <h3 className="about-leader-name">{leader.name}</h3>
                <p className="about-leader-role">{leader.role}</p>
                <p className="leader-description">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contemporary Developments */}
      <section className="about-contemporary">
        <div className="container">
          <div className="contemporary-content">
            <h2 className="contemporary-title">Contemporary Developments</h2>
            <p className="contemporary-text">
              Today, the MDCC has multiple branches across Ghana and diaspora communities. The church remains actively involved in education, community development, and peace advocacy while maintaining a nonpolitical stance. In 2015, Ghana's Supreme Court resolved leadership disputes, affirming the church's governance structures. Despite internal challenges and schisms, it continues as a beacon of spiritual vitality and cultural authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="about-legacy">
        <div className="container">
          <div className="legacy-wrapper">
            <h2 className="legacy-title">A Legacy of Faith</h2>
            <p className="legacy-text">
              The Musama Disco Christo Church represents more than a religious denomination — it embodies a movement of spiritual empowerment, cultural affirmation, and prophetic witness. For over a century, this "Army of the Cross" has marched forward, offering Ghanaians and Africans a faith that honors their heritage while embracing the transformative power of the Gospel.
            </p>
            <p className="legacy-quote">
              "Musama Disco Christo" — The Army of the Cross of Christ marches on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;