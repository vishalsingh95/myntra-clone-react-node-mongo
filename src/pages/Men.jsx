import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React from "react";



const Men = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8 ">
      <div className="container mx-auto px-4 py-8 bg-gray-100  rounded-lg shadow-md ">
        <div>
        <h1 className="text-3xl font-bold mb-4">Men's Fashion</h1>
        <p className="text-gray-700 mb-6">
          Discover the latest trends in men's fashion. From casual wear to formal attire, we have everything you need to elevate your style. Explore our collection of shirts, pants, jackets, and accessories designed to keep you looking sharp and feeling confident. Whether you're dressing for a casual day out or a special occasion, our
men's fashion collection has something for everyone. Shop now and upgrade your wardrobe with our stylish and comfortable pieces.
        </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mt-4 mb-2">Featured Products</h2>
        <p>Explore our handpicked selection of must-have items for men.</p>
      </div>
      <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="Men's Collection"
          className="w-full h-auto rounded-lg shadow-md "
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mt-4 mb-2 ">New Arrivals</h2>
        <p>Check out the latest additions to our men's collection.</p>

      </div>      
      <div className="container mx-auto px-4 py-8">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="Men's Collection"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mt-4 mb-2">Best Sellers</h2>
        <p>Discover our most popular items in men's fashion.</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Men's Collection</h1>
        <p>Explore the latest trends in men's fashion.</p>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Men;