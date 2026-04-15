import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Styles/SectionPage.css";

const beautyTiles = [
  { img: "/images/beauty.jpg", title: "Skincare Staples", subtitle: "Up to 40% off" },
  { img: "/images/trending/trending6.jpg", title: "Sunglasses & More", subtitle: "Trending now" },
  { img: "/images/trending/trending5.jpg", title: "Grooming Essentials", subtitle: "Best sellers" },
  { img: "/images/trending/trending2.jpg", title: "Makeup Must-haves", subtitle: "New drops" },
  { img: "/images/trending/trending8.jpg", title: "Fragrances", subtitle: "Min 30% off" },
  { img: "/images/trending/trending9.jpg", title: "Hair Care", subtitle: "Salon picks" },
];

export default function Beauty() {
  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>Beauty</h1>
            <p>Skincare, makeup, fragrances & grooming — curated like a real marketplace.</p>
            <div className="section-hero-actions">
              <Link className="section-primary" to="/products">
                Shop beauty
              </Link>
              <Link className="section-secondary" to="/wishlist">
                View wishlist
              </Link>
            </div>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Featured picks</div>
          <div className="section-grid">
            {beautyTiles.map((t) => (
              <div key={t.title} className="section-tile">
                <img src={t.img} alt={t.title} loading="lazy" />
                <div className="section-tile-meta">
                  <div className="section-tile-title">{t.title}</div>
                  <div className="section-tile-subtitle">{t.subtitle}</div>
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

