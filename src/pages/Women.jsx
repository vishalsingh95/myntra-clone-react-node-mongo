import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import "./Styles/SectionPage.css";


const Women = () => {
  const allProducts = [
    {
      id: 1,
      brand: "Anouk",
      name: "Floral Print Kurta",
      price: 999,
      mrp: 1999,
      category: "Kurtas & Suits",
      image: "https://images.unsplash.com/photo-1618932260643-ee4a2f623032?w=500&q=80",
      rating: 4.2,
      reviews: 145
    },
    {
      id: 2,
      brand: "Mango",
      name: "Denim Trucker Jacket",
      price: 2499,
      mrp: 4999,
      category: "Jackets",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&q=80",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 3,
      brand: "H&M",
      name: "A-Line Midi Dress",
      price: 1499,
      mrp: 2999,
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=80",
      rating: 4.8,
      reviews: 312
    },
    {
      id: 4,
      brand: "Baggit",
      name: "Structured Leather Handbag",
      price: 1799,
      mrp: 3599,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500&q=80",
      rating: 4.1,
      reviews: 56
    },
    {
      id: 5,
      brand: "Clarks",
      name: "Leather Ankle Boots",
      price: 3499,
      mrp: 6999,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80",
      rating: 4.6,
      reviews: 230
    },
    {
      id: 6,
      brand: "Levis",
      name: "High-Rise Skinny Jeans",
      price: 1899,
      mrp: 3199,
      category: "Jeans",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
      rating: 4.3,
      reviews: 112
    },
    {
      id: 7,
      brand: "Vero Moda",
      name: "Solid Formal Shirt",
      price: 1299,
      mrp: 2499,
      category: "Tops",
      image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=500&q=80",
      rating: 4.0,
      reviews: 85
    },
    {
      id: 8,
      brand: "Biba",
      name: "Cotton Printed Salwar Suit",
      price: 2199,
      mrp: 4599,
      category: "Kurtas & Suits",
      image: "https://images.unsplash.com/photo-1583391733958-d25e61c193e9?w=500&q=80",
      rating: 4.7,
      reviews: 420
    },
    {
      id: 9,
      brand: "Puma",
      name: "Women Running Shoes",
      price: 2999,
      mrp: 5999,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      rating: 4.9,
      reviews: 550
    },
    {
      id: 10,
      brand: "DressBerry",
      name: "Analog Watch",
      price: 899,
      mrp: 1999,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1508656937553-6238f420eaf9?w=500&q=80",
      rating: 4.4,
      reviews: 67
    },
    {
      id: 11,
      brand: "MAC",
      name: "Ruby Woo Lipstick",
      price: 1900,
      mrp: 1900,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
      rating: 4.9,
      reviews: 1200
    },
    {
      id: 12,
      brand: "Forever 21",
      name: "Crop Top",
      price: 599,
      mrp: 1199,
      category: "Tops",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
      rating: 4.1,
      reviews: 210
    }
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortOption, setSortOption] = useState("Recommended");

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handlePriceChange = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSortOption("Recommended");
  };

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === "499-999") return p.price >= 499 && p.price <= 999;
          if (range === "999-1999") return p.price > 999 && p.price <= 1999;
          if (range === "1999-3999") return p.price > 1999 && p.price <= 3999;
          return false;
        });
      });
    }

    switch (sortOption) {
      case "Price : High to Low":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "Price : Low to High":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "Customer Rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrices, sortOption]);

  const categoryOptions = [
    { label: "Kurtas & Suits", count: 2 },
    { label: "Dresses", count: 1 },
    { label: "Tops", count: 2 },
    { label: "Jeans", count: 1 },
    { label: "Jackets", count: 1 },
    { label: "Shoes", count: 2 },
    { label: "Accessories", count: 2 },
    { label: "Beauty", count: 1 },
  ];

  const priceOptions = [
    { label: "Rs. 499 to Rs. 999", value: "499-999" },
    { label: "Rs. 999 to Rs. 1999", value: "999-1999" },
    { label: "Rs. 1999 to Rs. 3999", value: "1999-3999" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-6 pb-12">
        {/* Breadcrumbs & Title */}
        <div className="container mx-auto px-4 lg:px-8 mb-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/">Home</Link> / <span className="font-semibold text-gray-900">Women Clothing</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Women's Fashion <span className="text-gray-500 text-lg font-normal ml-2">- {filteredProducts.length} items</span>
            </h1>
            
            {/* Sort Dropdown */}
            <div className="relative w-max">
              <select 
                className="appearance-none border border-gray-300 rounded-sm px-4 py-2 pr-8 bg-white focus:outline-none focus:border-pink-500 cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Recommended</option>
                <option>Price : High to Low</option>
                <option>Price : Low to High</option>
                <option>Customer Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-6">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-sm p-5 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg uppercase tracking-wide">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-pink-500 text-sm font-semibold hover:underline"
                >
                  CLEAR ALL
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-semibold mb-3 uppercase text-sm text-gray-700">Categories</h3>
                <div className="space-y-2">
                  {categoryOptions.map((cat) => (
                    <label key={cat.label} className="flex items-center cursor-pointer hover:text-pink-600 transition">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-pink-500 border-gray-300 rounded-sm focus:ring-pink-500"
                        checked={selectedCategories.includes(cat.label)}
                        onChange={() => handleCategoryChange(cat.label)}
                      />
                      <span className="ml-2 text-gray-700 text-sm">{cat.label}</span>
                      <span className="ml-auto text-gray-400 text-xs">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-semibold mb-3 uppercase text-sm text-gray-700">Price</h3>
                <div className="space-y-2">
                  {priceOptions.map((price) => (
                    <label key={price.value} className="flex items-center cursor-pointer hover:text-pink-600 transition">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-pink-500 border-gray-300 rounded-sm focus:ring-pink-500" 
                        checked={selectedPrices.includes(price.value)}
                        onChange={() => handlePriceChange(price.value)}
                      />
                      <span className="ml-2 text-gray-700 text-sm">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-200 rounded-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">No items found!</h2>
                <p className="text-gray-500 mb-6">Try changing or clearing some filters to see results.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-pink-500 text-white px-6 py-2 rounded-sm font-semibold hover:bg-pink-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
                  
                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-md border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Rating Badge */}
                        <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center gap-1 text-xs font-bold text-gray-800">
                          {product.rating} <FaStar className="text-teal-500 w-3 h-3" />
                          <span className="text-gray-500 font-normal border-l border-gray-300 pl-1 ml-1">{product.reviews}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col flex-grow bg-white relative z-20">
                        <h3 className="text-base font-bold text-gray-900 truncate">
                          {product.brand}
                        </h3>
                        <p className="text-sm text-gray-500 truncate mb-2">
                          {product.name}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-auto pb-4 group-hover:pb-12 transition-all duration-300">
                          <span className="text-sm font-bold text-gray-900">Rs. {product.price}</span>
                          {discount > 0 && (
                            <>
                              <span className="text-xs text-gray-500 line-through">Rs. {product.mrp}</span>
                              <span className="text-xs font-bold text-orange-500">({discount}% OFF)</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Hover Actions */}
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center z-30">
                        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-sm flex items-center justify-center gap-2 transition-colors">
                          <FaShoppingCart size={14} /> ADD TO BAG
                        </button>
                      </div>
                      
                      {/* Wishlist Button */}
                      <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-white transition-colors z-30">
                        <FaHeart size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Women;