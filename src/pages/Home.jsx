import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import { Link } from "react-router-dom";
import "./Styles/Home.css";

const trendingProducts = [
  {
    img: "/images/trending/trending1.jpg",
    brand: "Roadster",
    name: "Men Printed T-Shirt",
    price: 799,
    mrp: 1299,
  },
  {
    img: "/images/trending/trending2.jpg",
    brand: "Anouk",
    name: "Women Kurti",
    price: 999,
    mrp: 1999,
  },
  {
    img: "/images/trending/trending3.jpg",
    brand: "Nike",
    name: "Running Shoes",
    price: 2999,
    mrp: 4999,
  },
  {
    img: "/images/trending/trending4.jpg",
    brand: "Wildcraft",
    name: "Backpack",
    price: 1599,
    mrp: 2499,
  },
  {
    img: "/images/trending/trending5.jpg",
    brand: "Fossil",
    name: "Smart Watch",
    price: 8999,
    mrp: 14999,
  },
  {
    img: "/images/trending/trending6.jpg",
    brand: "Ray-Ban",
    name: "Sunglasses",
    price: 4999,
    mrp: 7999,
  },
  {
    img: "/images/trending/trending7.jpg",
    brand: "Levis",
    name: "Men Jeans",
    price: 2199,
    mrp: 3999,
  },
  {
    img: "/images/trending/trending8.jpg",
    brand: "Baggit",
    name: "Women Handbag",
    price: 1799,
    mrp: 2999,
  },
  {
    img: "/images/trending/trending9.jpg",
    brand: "H&M",
    name: "Women Dress",
    price: 2499,
    mrp: 3999,
  },
  {
    img: "/images/trending/trending10.jpg",
    brand: "Adidas",
    name: "Sports Jacket",
    price: 3499,
    mrp: 5999,
  },
];

const stripTiles = [
  { img: "/images/banner.png", label: "Flat 50% Off", to: "/products" },
  { img: "/images/men.jpg", label: "Men's Deals", to: "/men" },
  { img: "/images/women.jpg", label: "Women’s Picks", to: "/women" },
  { img: "/images/kids.jpg", label: "Kids Fest", to: "/kids" },
  { img: "/images/home.jpg", label: "Home Refresh", to: "/home-living" },
  { img: "/images/beauty.jpg", label: "Beauty Offers", to: "/beauty" },
];

const bigGridSections = [
  {
    title: "DEALS OF THE DAY",
    subtitle: "Top offers from your favourite brands",
    tiles: [
      { img: "/images/trending/trending10.jpg", label: "Sportswear", to: "/men" },
      { img: "/images/trending/trending9.jpg", label: "Dresses", to: "/women" },
      { img: "/images/trending/trending3.jpg", label: "Shoes", to: "/products" },
      { img: "/images/trending/trending5.jpg", label: "Watches", to: "/accessories" },
      { img: "/images/trending/trending6.jpg", label: "Sunglasses", to: "/accessories" },
      { img: "/images/trending/trending4.jpg", label: "Bags", to: "/accessories" },
    ],
  },
  {
    title: "BEST OF MYNTRA EXCLUSIVE BRANDS",
    subtitle: "Big savings on curated styles",
    tiles: [
      { img: "/images/trending/trending1.jpg", label: "Roadster", to: "/men" },
      { img: "/images/trending/trending2.jpg", label: "Anouk", to: "/women" },
      { img: "/images/trending/trending8.jpg", label: "Baggit", to: "/women" },
      { img: "/images/trending/trending7.jpg", label: "Levis", to: "/men" },
      { img: "/images/trending/trending9.jpg", label: "H&M", to: "/women" },
      { img: "/images/trending/trending4.jpg", label: "Wildcraft", to: "/accessories" },
    ],
  },
  {
    title: "CATEGORIES TO BAG",
    subtitle: "Shop by trend",
    tiles: [
      { img: "/images/men.jpg", label: "Casual Wear", to: "/men" },
      { img: "/images/women.jpg", label: "Ethnic", to: "/women" },
      { img: "/images/footwear.jpg", label: "Footwear", to: "/products" },
      { img: "/images/beauty.jpg", label: "Beauty", to: "/beauty" },
      { img: "/images/home.jpg", label: "Home & Living", to: "/home-living" },
      { img: "/images/kids.jpg", label: "Kids", to: "/kids" },
    ],
  },
];

const trendingSearches = [
  "T-Shirts",
  "Sneakers",
  "Kurtas",
  "Dresses",
  "Jeans",
  "Perfumes",
  "Watches",
  "Handbags",
  "Sports Shoes",
  "Sarees",
  "Shirts",
  "Jackets",
];

const HomeSection = ({ title, subtitle, rightLink, children }) => {
  return (
    <section className="home-section">
      <div className="home-section-head">
        <div>
          <div className="home-section-title">{title}</div>
          {subtitle ? <div className="home-section-subtitle">{subtitle}</div> : null}
        </div>
        {rightLink ? (
          <Link className="home-section-link" to={rightLink.to}>
            {rightLink.label}
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="home-page">
        {/* Banner */}
        <div className="home-hero">
          <Banner />
        </div>

        {/* Promo strip (Myntra-like long rails) */}
        <HomeSection
          title="TOP OFFERS"
          subtitle="Limited-time deals you shouldn’t miss"
          rightLink={{ label: "View all", to: "/products" }}
        >
          <div className="home-rail" role="list">
            {stripTiles.map((t) => (
              <Link key={t.label} to={t.to} className="home-rail-tile" role="listitem">
                <img src={t.img} alt={t.label} loading="lazy" />
                <div className="home-rail-label">{t.label}</div>
              </Link>
            ))}
          </div>
        </HomeSection>

        {/* Categories */}
        <div className="home-block">
          <Categories />
        </div>

        {/* Big image grids like Myntra homepage */}
        {bigGridSections.map((sec) => (
          <HomeSection key={sec.title} title={sec.title} subtitle={sec.subtitle}>
            <div className="home-grid-tiles">
              {sec.tiles.map((t) => (
                <Link key={t.label} to={t.to} className="home-grid-tile">
                  <img src={t.img} alt={t.label} loading="lazy" />
                  <div className="home-grid-label">{t.label}</div>
                </Link>
              ))}
            </div>
          </HomeSection>
        ))}

        {/* Trending Products */}
        <HomeSection
          title="TRENDING PRODUCTS"
          subtitle="Popular picks right now"
          rightLink={{ label: "View all", to: "/products" }}
        >
          <div className="home-grid-products">
            {trendingProducts.map((item, index) => (
              <Link
                key={`${item.brand}-${index}`}
                to="/products"
                className="home-product-card"
              >
                <img src={item.img} alt={item.name} loading="lazy" />

                <div className="home-product-meta">
                  <div className="home-product-brand">{item.brand}</div>
                  <div className="home-product-name">{item.name}</div>
                  <div className="home-product-price">
                    <span className="home-product-price-now">₹{item.price}</span>
                    <span className="home-product-price-mrp">₹{item.mrp}</span>
                    <span className="home-product-price-off">
                      ({Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF)
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </HomeSection>

        {/* Trending Searches */}
        <HomeSection
          title="TRENDING SEARCHES"
          subtitle="What people are looking for"
        >
          <div className="home-chips">
            {trendingSearches.map((q) => (
              <Link key={q} to="/products" className="home-chip">
                {q}
              </Link>
            ))}
          </div>
        </HomeSection>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;