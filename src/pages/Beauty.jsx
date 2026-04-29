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

const bestSellers = [
  { img: "/images/trending/trending2.jpg", title: "Makeup Must-haves", subtitle: "New drops" },
  { img: "/images/trending/trending8.jpg", title: "Fragrances", subtitle: "Min 30% off" },
  { img: "/images/trending/trending9.jpg", title: "Hair Care", subtitle: "Salon picks" },
  { img: "/images/trending/trending2.jpg", title: "Makeup Must-haves", subtitle: "New drops" },
  { img: "/images/trending/trending8.jpg", title: "Fragrances", subtitle: "Min 30% off" },
  { img: "/images/trending/trending9.jpg", title: "Hair Care", subtitle: "Salon picks" },
];

const premiumPicks = [
  { img: "/images/trending/trending7.jpg", title: "Designer Bags", subtitle: "Luxury picks" },
  { img: "/images/trending/trending6.jpg", title: "Sunglasses & More", subtitle: "Trending now" },
  { img: "/images/trending/trending5.jpg", title: "Grooming Essentials", subtitle: "Best sellers" },
  { img: "/images/trending/trending2.jpg", title: "Makeup Must-haves", subtitle: "New drops" },
  { img: "/images/trending/trending8.jpg", title: "Fragrances", subtitle: "Min 30% off" },
  { img: "/images/trending/trending9.jpg", title: "Hair Care", subtitle: "Salon picks" },
];



export default function Beauty({ cart }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar cart={cart} />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="section-page">
          <div className="section-hero">
            <div>
              <h1 className="text-3xl font-semibold mb-2" >Beauty</h1>
              <p className="text-gray-600 mb-4">Skincare, makeup, fragrances & grooming — curated like a real marketplace.</p>
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
      </div>
      <Footer />
    </div>
  );
}

