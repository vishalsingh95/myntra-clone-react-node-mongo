import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";



const Navbar = () => {
  let menuItems = [
    { label: "Men", path: "/men" },
    { label: "Women", path: "/women" },
    { label: "Kids", path: "/kids" },
    { label: "Home & Living", path: "/home-living" },
    { label: "Beauty", path: "/beauty" },
    { label: "Studio", path: "/studio" }
  ];

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

const closeMobileMenu = () => {  setIsMobileMenuOpen(false);
};

let [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Close the mobile menu when switching to desktop view
    if (!mobile) {
      setIsMobileMenuOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

let [searchQuery, setSearchQuery] = useState("");

const allSearchItems = [
  "Men's T-Shirt",
  "Women's Dress",
  "Kids' Sneakers",
  "Home Decor",
  "Beauty Products",
  "Studio Accessories",
  "Sports Shoes",
  "Laptop Bags",
  "Watches",
  "Sunglasses",
];

let [searchResults, setSearchResults] = useState([]);

const updateSearchResults = (query) => {
  const trimmed = query.trim();
  if (!trimmed) {
    setSearchResults([]);
    return;
  }

  const results = allSearchItems.filter((item) =>
    item.toLowerCase().includes(trimmed.toLowerCase())
  );
  setSearchResults(results);
};

const handleSearchChange = (e) => {
  const value = e.target.value;
  setSearchQuery(value);
  updateSearchResults(value);
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  updateSearchResults(searchQuery);
  console.log("Search submitted:", searchQuery);
};

const handleResultClick = (result) => {
  setSearchQuery(result);
  setSearchResults([]);
};


  return (
    <div className="navbar-container bg-white shadow-md fixed top-0 left-0 right-0 z-50 ">
    <nav className="navbar flex items-center justify-between p-4 bg-white shadow-md navbar-content container mx-auto ">
      <div className="logo font-bold text-xl text-gray-900 logo-container ">
        <div className="logo-image-container w-24 h-auto ">
          <img src="https://constant.myntassets.com/web/assets/img/logo/myntra-logo.png" alt="Myntra Logo" className="h-8 w-auto " />
        </div>
        
      </div>

      <div className="menu-container relative ">
        {isMobile ? (
          <>
            <div className="mobile-menu-icon " onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <div className={`mobile-menu absolute top-full left-0 w-full bg-white shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'} `}>
              <ul className="mobile-menu-items list-none m-0 p-4 text-sm font-medium text-gray-700 ">
                {menuItems.map((item, index) => (
                  <li key={index} className="mobile-menu-item py-2 hover:text-gray-900 " onClick={closeMobileMenu}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <ul className="menu flex gap-6 list-none m-0 p-0 text-sm font-medium text-gray-700 menu-items ">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item hover:text-gray-900 ">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    <div className="search-container relative ">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-bar-container relative ">
          <div className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ">
            <i className="fas fa-search"></i>
          </div>
          <input 
            type="text" 
            placeholder="Search for products, brands and more ..." 
            className="search-input border rounded px-4 py-2 w-64 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 search-bar "
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="sr-only">Search</button>
        </div>
      </form>

      <div className={`search-results absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded ${searchResults.length > 0 ? 'block' : 'hidden'} search-results-container `}>
        <ul className="search-results-list list-none m-0 p-2 text-sm text-gray-700 ">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="search-result-item py-1 hover:bg-gray-100 cursor-pointer "
              onClick={() => handleResultClick(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
      <div className="icons flex gap-6 text-gray-700 icons-container ">
        <Link to="/profile" className="icon hover:text-gray-900 ">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/wishlist" className="icon hover:text-gray-900 ">
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="/cart" className="icon hover:text-gray-900 ">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <div className="mobile-menu-icon md:hidden " onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`mobile-menu absolute top-full left-0 w-full bg-white shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden `}>
          <ul className="mobile-menu-items list-none m-0 p-4 text-sm font-medium text-gray-700 ">
            {menuItems.map((item, index) => (
              <li key={index} className="mobile-menu-item py-2 hover:text-gray-900 " onClick={closeMobileMenu}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMobile && (
        <div className="mobile-search-container absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded ">
          <form className="mobile-search-form" onSubmit={handleSearchSubmit}>
            <div className="mobile-search-bar-container relative p-4 ">
              <input 
                type="text" 
                placeholder="Search for products, brands and more ..." 
                className="mobile-search-input border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
          <div className={`search-results absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded ${searchResults.length > 0 ? 'block' : 'hidden'} search-results-container `}>
            <ul className="search-results-list list-none m-0 p-2 text-sm text-gray-700 ">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="search-result-item py-1 hover:bg-gray-100 cursor-pointer "
                  onClick={() => handleResultClick(result)}
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
