import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const toggleDesktopMenu = () => setIsDesktopMenuOpen(!isDesktopMenuOpen);
  const closeDesktopMenu = () => setIsDesktopMenuOpen(false);

  let [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add a state to manage whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [showProfileModal, setShowProfileModal] = useState(false);

  const openProfileModal = () => {
    setShowProfileModal(true);
    closeMobileMenu();
    closeDesktopMenu();
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  // Use useEffect to check for the token when the component mounts or updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // !! converts the token to a boolean (true if token exists, false otherwise)
  }, []);

  // Define the logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Update the isLoggedIn state
    toast.success("Logged out successfully");
    navigate("/");
    window.location.reload();
  };

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



    <>

      <div className="sticky top-0 z-50">


        <nav className="navbar-container bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <nav className="navbar flex items-center justify-between p-4 bg-white shadow-md navbar-content container mx-auto">
            {/* LEFT SIDE */}
            <div className="logo-container flex items-center justify-center">
              <Link
                to="/"
                className="cursor-pointer"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src="/images/logo.png"
                  alt="Myntra Logo"
                  className="h-8 lg:h-12"
                />
              </Link>
            </div>

            {/* MIDDLE (DESKTOP MENU) */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <ul className="flex gap-6 text-sm font-medium text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-gray-900">
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE (Search + Icons) */}
            <div className="flex items-center gap-2 lg:gap-6">
              {/* Desktop Search */}
              <div className="hidden lg:block relative">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <i className="fas fa-search"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for products, brands and more..."
                      className="border rounded px-4 py-2 w-64 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="sr-only">Search</button>
                  </div>
                </form>

                {/* Dropdown Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded z-50">
                    <ul className="p-2 text-sm text-gray-700">
                      {searchResults.map((result, index) => (
                        <li
                          key={index}
                          className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSearchQuery(result);
                            setSearchResults([]);
                            if (window.innerWidth < 1024) {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Icons Container */}
              <div className="flex items-center gap-2 lg:gap-6 text-gray-700">
                {/* Profile */}
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="p-2 hover:text-gray-900"
                >
                  <i className="fas fa-user text-xl lg:text-base"></i>
                  <span className="hidden lg:inline-block lg:text-sm ml-1">
                    Profile
                  </span>
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="p-2 hover:text-gray-900"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fas fa-heart text-xl lg:text-base"></i>
                  <span className="hidden lg:inline-block lg:text-sm ml-1">
                    Wishlist
                  </span>
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="p-2 hover:text-gray-900"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fas fa-shopping-cart text-xl lg:text-base"></i>
                  <span className="hidden lg:inline-block lg:text-sm ml-1">
                    Bag
                  </span>
                </Link>

                {/* Mobile Menu Icon (Hidden on Desktop) */}
                <div
                  className="lg:hidden p-2 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes size={20} />
                  ) : (
                    <FaBars size={20} />
                  )}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          <div
            className={`lg:hidden fixed inset-y-0 left-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                >
                  <i className="fas fa-user text-lg"></i>
                  <span className="font-medium">Profile</span>
                </button>
              </div>
              <button onClick={closeMobileMenu} className="p-2">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Main Menu */}
            <ul className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="">
                  <Link
                    to={item.path}
                    onClick={() => {
                      closeMobileMenu();
                      window.scrollTo(0, 0);
                    }}
                    className="block p-2 rounded hover:bg-gray-100 font-medium text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Search Overlay */}
          {isMobile && (
            <div className="lg:hidden p-4 border-t bg-gray-50">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i className="fas fa-search"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for products, brands..."
                    className="border rounded px-4 py-2 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>

                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded z-50">
                    <ul className="p-2 text-sm text-gray-700">
                      {searchResults.map((result, index) => (
                        <li
                          key={index}
                          className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSearchQuery(result);
                            setSearchResults([]);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
