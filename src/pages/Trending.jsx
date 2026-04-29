import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Styles/SectionPage.css";

const trending = [
  { img: "/images/trending/trending1.jpg", title: "Printed Tees", subtitle: "Min 40% off" },
  { img: "/images/trending/trending2.jpg", title: "Kurtas", subtitle: "New season" },
  { img: "/images/trending/trending3.jpg", title: "Running Shoes", subtitle: "Top rated" },
  { img: "/images/trending/trending4.jpg", title: "Backpacks", subtitle: "Everyday carry" },
  { img: "/images/trending/trending5.jpg", title: "Smart Watches", subtitle: "Hot deals" },
  { img: "/images/trending/trending6.jpg", title: "Sunglasses", subtitle: "Trending styles" },
  { img: "/images/trending/trending7.jpg", title: "Jeans", subtitle: "Best sellers" },
  { img: "/images/trending/trending8.jpg", title: "Handbags", subtitle: "Editor’s pick" },
  { img: "/images/trending/trending9.jpg", title: "Dresses", subtitle: "Party ready" },
  { img: "/images/trending/trending10.jpg", title: "Jackets", subtitle: "New drops" },
];

export default function Trending() {
  return (
    <>

      <div className="profile-page-content">
        <div className="profile-page-content-item">
          <div className="profile-page-content-item-text">
            <Navbar />
          </div>
        </div>
      </div>

      <main className="profile-page-content">
        <div className="profile-page-content bg-gray-100 min-h-screen py-10">
          <div className="profile-page-content-item">
            <div className="profile-page-content-item-text">
              <div className="section-hero">
                <div>
                  <h1>Trending</h1>
                  <p>Popular categories and fast-moving styles — this makes the app feel “alive”.</p>
                  <div className="section-hero-actions">
                    <Link className="section-primary" to="/products">
                      Shop all products
                    </Link>
                    <Link className="section-secondary" to="/cart">
                      Go to bag
                    </Link>
                  </div>
                </div>
              </div>

              <section className="section-block">
                <div className="section-title">Trending now</div>
                <div className="section-grid">
                  {trending.map((t) => (
                    <Link key={t.title} to="/products" className="section-tile section-tile-link">
                      <img src={t.img} alt={t.title} loading="lazy" />
                      <div className="section-tile-meta">
                        <div className="section-tile-title">{t.title}</div>
                        <div className="section-tile-subtitle">{t.subtitle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

