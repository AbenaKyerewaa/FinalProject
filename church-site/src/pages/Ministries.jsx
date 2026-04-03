import { Link } from "react-router-dom";
import "./Ministries.css";
import {
  Users, Heart, Music, BookOpen, Baby, HandHelping,
  Mic2, Shield, Soup, Church, Camera
} from "lucide-react";

export const allMinistries = [
  { slug: "womens-fellowship", icon: Heart, title: "Women's Fellowship", description: "Building strong relationships among women through prayer, study, and mutual support." , fullDescription:
      "The Women’s Fellowship is a place where women are encouraged to grow spiritually, support one another, and serve the church with love and dedication."
  },
  { slug: "mens-ministry", icon: Shield, title: "Men's Fellowship", description: "Equipping men to be godly leaders in their homes, church, and community." },
  { slug: "prayer-ministry", icon: Church, title: "Nahathien|Prayer Group ", description: "Establishing prayer warriors committed to interceding for our church and community." },
  { slug: "seenim-ministry", icon: HandHelping, title: "SEENIM", description: "A ministry focused on nurturing students and young believers through fellowship, discipleship, and spiritual growth." },
  { slug: "faith-society-ministry", icon: BookOpen, title: "Faith-Society", description: "A ministry focused on strengthening believers in their faith through prayer, Bible study, and spiritual guidance." },
  { slug: "worship-ministry", icon: Music, title: "Worship Ministry", description: "Leading our congregation in spirit-filled worship through music and praise." },
  { slug: "youth-ministry", icon: Users, title: "Youth Ministry", description: "Empowering the next generation through vibrant study, fellowship, and community service." },
  { slug: "childrens-ministry", icon: Baby, title: "Children's Ministry", description: "Nurturing young hearts and minds with age-appropriate biblical teachings." },
  { slug: "choir-ministry", icon: Music, title: "Choir Ministry", description: "A team of dedicated singers and musicians who lead the congregation in worship through music." },
  { slug: "media-ministry", icon: Camera, title: "Media Ministry", description: "Managing church media, live streaming, and digital communication." },
  { slug: "welfare-ministry", icon: Soup, title: "Welfare Ministry", description: "Supporting members and community through benevolence and care programs." },
    { slug: "community-outreach", icon: HandHelping, title: "Community Outreach", description: "Serving our local community through various outreach campaigns and initiatives." },

];

function Ministries() {
  return (
    <div className="ministries-page">

      {/* HERO */}
      <section className="ministries-hero">
        <div className="container">
          <p className="hero-tag">✦ Serving Together</p>
          <h1>OUR MINISTRIES</h1>
          <p className="hero-subtext">
            Discover how you can serve and grow through our diverse ministries.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="ministries-section">
        <div className="container">
          <div className="ministries-grid">

            {allMinistries.map((ministry) => {
              const Icon = ministry.icon;

              return (
                <Link
                  to={`/ministries/${ministry.slug}`}
                  key={ministry.slug}
                  className="ministry-card"
                >
                  <div className="icon-box">
                    <Icon size={24} />
                  </div>

                  <h3>{ministry.title}</h3>
                  <p>{ministry.description}</p>

                  <span className="learn-more">Learn More →</span>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}

export default Ministries;