import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Men = () => {
  const allProducts = [
    {
      id: 1,
      brand: "Puma",
      name: "Men Graphic T-shirt",
      price: 799,
      mrp: 1499,
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
      rating: 4.3,
      reviews: 245
    },
    {
      id: 2,
      brand: "WROGN",
      name: "Men Slim Fit Casual Shirt",
      price: 1299,
      mrp: 2599,
      category: "Shirts",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3?w=500&q=80",
      rating: 4.1,
      reviews: 189
    },
    {
      id: 3,
      brand: "Highlander",
      name: "Men Tapered Fit Jeans",
      price: 999,
      mrp: 2199,
      category: "Jeans",
      image: "https://images.unsplash.com/photo-1542272604-780c8d52a5ce?w=500&q=80",
      rating: 4.0,
      reviews: 312
    },
    {
      id: 4,
      brand: "Roadster",
      name: "Men Solid Biker Jacket",
      price: 2499,
      mrp: 4999,
      category: "Jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
      rating: 4.6,
      reviews: 567
    },
    {
      id: 5,
      brand: "Nike",
      name: "Men Running Shoes",
      price: 3499,
      mrp: 5999,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      rating: 4.8,
      reviews: 890
    },
    {
      id: 6,
      brand: "HRX",
      name: "Men Activewear Shorts",
      price: 599,
      mrp: 1199,
      category: "Activewear",
      image: "https://images.unsplash.com/photo-1533681473216-9285702ddc02?w=500&q=80",
      rating: 4.2,
      reviews: 145
    },
    {
      id: 7,
      brand: "Tommy Hilfiger",
      name: "Men Striped Polo",
      price: 1899,
      mrp: 2999,
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",
      rating: 4.5,
      reviews: 234
    },
    {
      id: 8,
      brand: "Jack & Jones",
      name: "Men Chino Trousers",
      price: 1499,
      mrp: 2999,
      category: "Jeans",
      image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&q=80",
      rating: 4.4,
      reviews: 420
    },
    {
      id: 9,
      brand: "Woodland",
      name: "Men Leather Boots",
      price: 4599,
      mrp: 6999,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 10,
      brand: "Fastrack",
      name: "Men Chronograph Watch",
      price: 2199,
      mrp: 3599,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1524592094714-a5764260ME20?w=500&q=80",
      rating: 4.3,
      reviews: 89
    },
    {
      id: 11,
      brand: "Ray-Ban",
      name: "Aviator Sunglasses",
      price: 5499,
      mrp: 6599,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
      rating: 4.9,
      reviews: 450
    },
    {
      id: 12,
      brand: "U.S. Polo Assn.",
      name: "Men Casual Shirt",
      price: 1399,
      mrp: 2799,
      category: "Shirts",
      image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
      rating: 4.2,
      reviews: 310
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
          if (range === "Under 999") return p.price < 999;
          if (range === "999-1999") return p.price >= 999 && p.price <= 1999;
          if (range === "1999-3999") return p.price > 1999 && p.price <= 3999;
          if (range === "Above 3999") return p.price > 3999;
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
    { label: "T-Shirts", count: 2 },
    { label: "Shirts", count: 2 },
    { label: "Jeans", count: 2 },
    { label: "Jackets", count: 1 },
    { label: "Activewear", count: 1 },
    { label: "Shoes", count: 2 },
    { label: "Accessories", count: 2 },
  ];

  const priceOptions = [
    { label: "Under Rs. 999", value: "Under 999" },
    { label: "Rs. 999 to Rs. 1999", value: "999-1999" },
    { label: "Rs. 1999 to Rs. 3999", value: "1999-3999" },
    { label: "Above Rs. 3999", value: "Above 3999" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-6 pb-12">
        {/* Breadcrumbs & Title */}
        <div className="container mx-auto px-4 lg:px-8 mb-6">
          <div className="text-sm text-gray-500 mb-4">
            <span>Home</span> / <span className="font-semibold text-gray-900">Men Clothing</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Men's Fashion <span className="text-gray-500 text-lg font-normal ml-2">- {filteredProducts.length} items</span>
            </h1>

            {/* Sort Dropdown */}
            <div className="relative w-max">
              <select
                className="appearance-none border border-gray-300 rounded-sm px-4 py-2 pr-8 bg-white focus:outline-none focus:border-blue-500 cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Recommended</option>
                <option>Price : High to Low</option>
                <option>Price : Low to High</option>
                <option>Customer Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
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
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  CLEAR ALL
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-semibold mb-3 uppercase text-sm text-gray-700">Categories</h3>
                <div className="space-y-2">
                  {categoryOptions.map((cat) => (
                    <label key={cat.label} className="flex items-center cursor-pointer hover:text-blue-600 transition">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded-sm focus:ring-blue-500"
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
                    <label key={price.value} className="flex items-center cursor-pointer hover:text-blue-600 transition">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded-sm focus:ring-blue-500"
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
                  className="bg-blue-600 text-white px-6 py-2 rounded-sm font-semibold hover:bg-blue-700 transition-colors"
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
                          {product.rating} <FaStar className="text-green-600 w-3 h-3" />
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
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-sm flex items-center justify-center gap-2 transition-colors">
                          <FaShoppingCart size={14} /> ADD TO BAG
                        </button>
                      </div>

                      {/* Wishlist Button */}
                      <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors z-30">
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

export default Men;