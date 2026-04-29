import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Studio = () => {
  const allProducts = [
    {
      id: 1,
      brand: "Maniac",
      name: "Men Typography T-shirt",
      price: 599,
      mrp: 1299,
      category: "Streetwear",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80",
      rating: 4.5,
      reviews: 145
    },
    {
      id: 2,
      brand: "The Souled Store",
      name: "Unisex Oversized Hoodie",
      price: 1499,
      mrp: 2999,
      category: "Streetwear",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
      rating: 4.8,
      reviews: 890
    },
    {
      id: 3,
      brand: "H&M Studio",
      name: "Women Asymmetric Dress",
      price: 3499,
      mrp: 5999,
      category: "Designer Edit",
      image: "https://images.unsplash.com/photo-1515347619362-7ddafdf72535?w=500&q=80",
      rating: 4.6,
      reviews: 312
    },
    {
      id: 4,
      brand: "Urbanic",
      name: "Women Wide Leg Jeans",
      price: 1299,
      mrp: 2599,
      category: "Streetwear",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
      rating: 4.3,
      reviews: 56
    },
    {
      id: 5,
      brand: "Nike",
      name: "Air Force 1 Sneakers",
      price: 7499,
      mrp: 7499,
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      rating: 4.9,
      reviews: 1230
    },
    {
      id: 6,
      brand: "Adidas Originals",
      name: "Superstar Shoes",
      price: 5999,
      mrp: 8999,
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80",
      rating: 4.7,
      reviews: 890
    },
    {
      id: 7,
      brand: "FabIndia",
      name: "Men Handwoven Kurta",
      price: 2199,
      mrp: 3499,
      category: "Indie Picks",
      image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&q=80",
      rating: 4.4,
      reviews: 120
    },
    {
      id: 8,
      brand: "W for Woman",
      name: "Women Printed Fusion Dress",
      price: 1899,
      mrp: 3599,
      category: "Indie Picks",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
      rating: 4.5,
      reviews: 450
    },
    {
      id: 9,
      brand: "Zara",
      name: "Textured Knit Cardigan",
      price: 2999,
      mrp: 4599,
      category: "Designer Edit",
      image: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?w=500&q=80",
      rating: 4.2,
      reviews: 189
    },
    {
      id: 10,
      brand: "Fossil",
      name: "Gen 6 Smartwatch",
      price: 14999,
      mrp: 23999,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      rating: 4.6,
      reviews: 670
    },
    {
      id: 11,
      brand: "Daniel Wellington",
      name: "Classic Petite Watch",
      price: 8999,
      mrp: 12999,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1508656937553-6238f420eaf9?w=500&q=80",
      rating: 4.8,
      reviews: 890
    },
    {
      id: 12,
      brand: "Vans",
      name: "Old Skool Sneakers",
      price: 3499,
      mrp: 4999,
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
      rating: 4.7,
      reviews: 560
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
          if (range === "Under 1499") return p.price < 1499;
          if (range === "1499-3999") return p.price >= 1499 && p.price <= 3999;
          if (range === "3999-7999") return p.price > 3999 && p.price <= 7999;
          if (range === "Above 7999") return p.price > 7999;
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
    { label: "Streetwear", count: 3 },
    { label: "Designer Edit", count: 2 },
    { label: "Sneakers", count: 3 },
    { label: "Indie Picks", count: 2 },
    { label: "Accessories", count: 2 },
  ];

  const priceOptions = [
    { label: "Under Rs. 1499", value: "Under 1499" },
    { label: "Rs. 1499 to Rs. 3999", value: "1499-3999" },
    { label: "Rs. 3999 to Rs. 7999", value: "3999-7999" },
    { label: "Above Rs. 7999", value: "Above 7999" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-6 pb-12">
        {/* Breadcrumbs & Title */}
        <div className="container mx-auto px-4 lg:px-8 mb-6">
          <div className="text-sm text-gray-400 mb-4">
            <span>Home</span> / <span className="font-semibold text-white">Studio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white">
              Studio Collections <span className="text-gray-400 text-lg font-normal ml-2">- {filteredProducts.length} items</span>
            </h1>

            {/* Sort Dropdown */}
            <div className="relative w-max">
              <select
                className="appearance-none border border-gray-700 rounded-sm px-4 py-2 pr-8 bg-gray-900 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Recommended</option>
                <option>Price : High to Low</option>
                <option>Price : Low to High</option>
                <option>Customer Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-6">

          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-gray-900 border border-gray-800 rounded-sm p-5 sticky top-24 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg uppercase tracking-wide text-white">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-purple-400 text-sm font-semibold hover:underline"
                >
                  CLEAR ALL
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-6 border-b border-gray-800 pb-4">
                <h3 className="font-semibold mb-3 uppercase text-sm text-gray-400">Collections</h3>
                <div className="space-y-2">
                  {categoryOptions.map((cat) => (
                    <label key={cat.label} className="flex items-center cursor-pointer hover:text-purple-400 transition">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-purple-500 bg-gray-800 border-gray-700 rounded-sm focus:ring-purple-500"
                        checked={selectedCategories.includes(cat.label)}
                        onChange={() => handleCategoryChange(cat.label)}
                      />
                      <span className="ml-2 text-gray-300 text-sm">{cat.label}</span>
                      <span className="ml-auto text-gray-500 text-xs">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6 border-b border-gray-800 pb-4">
                <h3 className="font-semibold mb-3 uppercase text-sm text-gray-400">Price</h3>
                <div className="space-y-2">
                  {priceOptions.map((price) => (
                    <label key={price.value} className="flex items-center cursor-pointer hover:text-purple-400 transition">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-purple-500 bg-gray-800 border-gray-700 rounded-sm focus:ring-purple-500"
                        checked={selectedPrices.includes(price.value)}
                        onChange={() => handlePriceChange(price.value)}
                      />
                      <span className="ml-2 text-gray-300 text-sm">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-gray-900 border border-gray-800 rounded-sm shadow-2xl">
                <h2 className="text-2xl font-semibold text-gray-200 mb-2">No items found!</h2>
                <p className="text-gray-400 mb-6">Try changing or clearing some filters to see results.</p>
                <button
                  onClick={clearFilters}
                  className="bg-purple-600 text-white px-6 py-2 rounded-sm font-semibold hover:bg-purple-700 transition-colors"
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
                      className="group bg-gray-900 rounded-md border border-gray-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden relative flex flex-col"
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
                        <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center gap-1 text-xs font-bold text-gray-200">
                          {product.rating} <FaStar className="text-yellow-500 w-3 h-3" />
                          <span className="text-gray-400 font-normal border-l border-gray-600 pl-1 ml-1">{product.reviews}</span>
                        </div>

                        {/* Studio Badge */}
                        <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 rounded-sm flex items-center text-xs font-bold text-white uppercase tracking-wider">
                          Studio
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col flex-grow bg-gray-900 relative z-20">
                        <h3 className="text-base font-bold text-white truncate">
                          {product.brand}
                        </h3>
                        <p className="text-sm text-gray-400 truncate mb-2">
                          {product.name}
                        </p>

                        <div className="flex items-center gap-2 mt-auto pb-4 group-hover:pb-12 transition-all duration-300">
                          <span className="text-sm font-bold text-white">Rs. {product.price}</span>
                          {discount > 0 && (
                            <>
                              <span className="text-xs text-gray-500 line-through">Rs. {product.mrp}</span>
                              <span className="text-xs font-bold text-purple-400">({discount}% OFF)</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Hover Actions */}
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-900 border-t border-gray-800 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center z-30">
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-sm flex items-center justify-center gap-2 transition-colors">
                          <FaShoppingCart size={14} /> ADD TO BAG
                        </button>
                      </div>

                      {/* Wishlist Button */}
                      <button className="absolute top-2 right-2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-purple-500 hover:bg-black transition-colors z-30">
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

export default Studio;
