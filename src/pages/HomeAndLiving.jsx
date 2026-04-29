import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Styles/SectionPage.css";

const categories = [
  { title: "Furniture", subtitle: "Sofas, beds, tables and seating" },
  { title: "Decor", subtitle: "Rugs, curtains, wall art and accents" },
  { title: "Lighting", subtitle: "Lamps and statement lights" },
  { title: "Bedding", subtitle: "Comforters, sheets and pillows" },
  { title: "Storage", subtitle: "Shelving and smart organizers" },
  { title: "Outdoor", subtitle: "Patio furniture and decor" },
];

const HomeAndLiving = ({ cart }) => {
  return (
    <>
      <Navbar cart={cart} />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="section-page">
          <div className="section-hero">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Home & Living</h1>
              <p className="text-gray-600 mb-4">
                Transform your space with furniture, decor and essentials curated
                for modern homes.
              </p>
              <div className="flex flex-row flex-wrap items-center gap-3 mt-8">
                <Link className="text-white px-6 py-2.5 rounded-full" to="/products">
                  Shop home
                </Link>
                <Link className="section-secondary text-black px-6 py-2.5 rounded-full" to="/wishlist">
                  Save ideas
                </Link>
              </div>
            </div>
          </div>

          <section className="section-block">
            <div className="section-title">Featured Collection</div>
            <div className="section-grid">
              {categories.map((item) => (
                <div key={item.title} className="section-tile">
                  <img
                    src="/images/home-and-living.jpg"
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="section-tile-meta">
                    <div className="section-tile-title">{item.title}</div>
                    <div className="section-tile-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomeAndLiving;