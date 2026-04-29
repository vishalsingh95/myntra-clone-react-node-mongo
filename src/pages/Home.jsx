import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import { Link } from "react-router-dom";

const trendingProducts = [
  { img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", brand: "Roadster", name: "Men Printed T-Shirt", price: 799, mrp: 1299 },
  { img: "https://images.unsplash.com/photo-1618932260643-ee4a2f623032?w=500&q=80", brand: "Anouk", name: "Women Kurti", price: 999, mrp: 1999 },
  { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", brand: "Nike", name: "Running Shoes", price: 2999, mrp: 4999 },
  { img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", brand: "Wildcraft", name: "Backpack", price: 1599, mrp: 2499 },
  { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", brand: "Fossil", name: "Smart Watch", price: 8999, mrp: 14999 },
  { img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", brand: "Ray-Ban", name: "Sunglasses", price: 4999, mrp: 7999 },
  { img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", brand: "Levis", name: "Men Jeans", price: 2199, mrp: 3999 },
  { img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500&q=80", brand: "Baggit", name: "Women Handbag", price: 1799, mrp: 2999 },
  { img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=80", brand: "H&M", name: "Women Dress", price: 2499, mrp: 3999 },
  { img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80", brand: "Adidas", name: "Sports Jacket", price: 3499, mrp: 5999 },
];

const stripTiles = [
  { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80", label: "Flat 50% Off", to: "/products" },
  { img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&q=80", label: "Men's Deals", to: "/men" },
  { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80", label: "Women’s Picks", to: "/women" },
  { img: "https://images.unsplash.com/photo-1519238263530-99bea67b0bb1?w=500&q=80", label: "Kids Fest", to: "/kids" },
  { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80", label: "Home Refresh", to: "/home-living" },
  { img: "https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?w=500&q=80", label: "Beauty Offers", to: "/beauty" },
];

const bigGridSections = [
  {
    title: "DEALS OF THE DAY",
    subtitle: "Top offers from your favourite brands",
    tiles: [
      { img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&q=80", label: "Sportswear", to: "/men" },
      { img: "https://images.unsplash.com/photo-1515347619362-7ddafdf72535?w=500&q=80", label: "Dresses", to: "/women" },
      { img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80", label: "Shoes", to: "/products" },
      { img: "https://images.unsplash.com/photo-1524592094714-a5764260ME20?w=500&q=80", label: "Watches", to: "/accessories" },
      { img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", label: "Sunglasses", to: "/accessories" },
      { img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80", label: "Bags", to: "/accessories" },
    ],
  },
  {
    title: "CATEGORIES TO BAG",
    subtitle: "Shop by trend",
    tiles: [
      { img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&q=80", label: "Casual Wear", to: "/men" },
      { img: "https://images.unsplash.com/photo-1583391733958-d25e61c193e9?w=500&q=80", label: "Ethnic", to: "/women" },
      { img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80", label: "Footwear", to: "/products" },
      { img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80", label: "Beauty", to: "/beauty" },
      { img: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=500&q=80", label: "Home & Living", to: "/home-living" },
      { img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80", label: "Kids", to: "/kids" },
    ],
  },
];

const trendingSearches = [
  "T-Shirts", "Sneakers", "Kurtas", "Dresses", "Jeans",
  "Perfumes", "Watches", "Handbags", "Sports Shoes", "Sarees", "Shirts", "Jackets"
];

const HomeSection = ({ title, subtitle, rightLink, children }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 uppercase tracking-wide">{title}</h2>
          {subtitle && <p className="text-gray-500 mt-2 text-lg">{subtitle}</p>}
        </div>
        <div>
          {children}
        </div>
        {rightLink && (
          <div className="mt-8 text-center">
            <Link to={rightLink.to} className="inline-block border border-pink-500 text-pink-500 font-semibold px-8 py-3 rounded-sm hover:bg-pink-50 transition-colors uppercase tracking-wider">
              {rightLink.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pb-12">
        {/* Banner */}
        <div className="w-full">
          <Banner />
        </div>

        {/* Promo strip */}
        <HomeSection title="TOP OFFERS" subtitle="Limited-time deals you shouldn’t miss">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stripTiles.map((t) => (
              <Link key={t.label} to={t.to} className="group block text-center">
                <div className="aspect-square overflow-hidden rounded-full border border-gray-200 mb-3 shadow-sm group-hover:shadow-md transition-all">
                  <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <span className="font-semibold text-gray-800 text-sm group-hover:text-pink-600 transition-colors">{t.label}</span>
              </Link>
            ))}
          </div>
        </HomeSection>

        {/* Categories Component */}
        <div className="bg-white">
          <Categories />
        </div>

        {/* Big image grids */}
        {bigGridSections.map((sec) => (
          <HomeSection key={sec.title} title={sec.title} subtitle={sec.subtitle}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sec.tiles.map((t) => (
                <Link key={t.label} to={t.to} className="group block relative overflow-hidden aspect-[3/4]">
                  <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">{t.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </HomeSection>
        ))}

        {/* Trending Products */}
        <HomeSection title="TRENDING PRODUCTS" subtitle="Popular picks right now" rightLink={{ label: "View all products", to: "/products" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trendingProducts.map((item, index) => (
              <Link key={`${item.brand}-${index}`} to="/products" className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 truncate">{item.brand}</h3>
                  <p className="text-gray-500 text-sm truncate mb-2">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">₹{item.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{item.mrp}</span>
                    <span className="text-xs font-bold text-orange-500">
                      ({Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF)
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </HomeSection>

        {/* Trending Searches */}
        <HomeSection title="TRENDING SEARCHES" subtitle="What people are looking for">
          <div className="flex flex-wrap gap-3">
            {trendingSearches.map((q) => (
              <Link key={q} to="/products" className="px-4 py-2 bg-gray-100 hover:bg-pink-50 hover:text-pink-600 border border-transparent hover:border-pink-200 rounded-full text-gray-700 text-sm font-medium transition-colors">
                {q}
              </Link>
            ))}
          </div>
        </HomeSection>

      </main>
      <Footer />
    </>
  );
};

export default Home;