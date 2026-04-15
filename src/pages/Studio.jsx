import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Styles/SectionPage.css";

const stories = [
  { img: "/images/banner.png", title: "Trend Report", subtitle: "Spring / Summer edits" },
  { img: "/images/women.jpg", title: "Street Style", subtitle: "Creator picks" },
  { img: "/images/men.jpg", title: "Workwear", subtitle: "New season fits" },
  { img: "/images/kids.jpg", title: "Kids Corner", subtitle: "Playful essentials" },
];

export default function Studio() {
  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>Studio</h1>
            <p>Editorial-style collections, lookbooks, and trend stories — like the real Myntra Studio.</p>
            <div className="section-hero-actions">
              <Link className="section-primary" to="/products">
                Explore products
              </Link>
              <Link className="section-secondary" to="/trending">
                Trending now
              </Link>
            </div>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Top stories</div>
          <div className="section-grid">
            {stories.map((s) => (
              <div key={s.title} className="section-tile">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="section-tile-meta">
                  <div className="section-tile-title">{s.title}</div>
                  <div className="section-tile-subtitle">{s.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

