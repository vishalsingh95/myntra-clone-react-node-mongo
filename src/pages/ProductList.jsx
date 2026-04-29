import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import "./Styles.css";
import React from "react";


const ProductList = () => {
  const { category } = useParams();

  return (
    <>
      <Navbar/>
      <div className="product-list-content bg-gray-100 min-h-screen p-8">
        <div className="product-list-content-item bg-gray-100 min-h-screen">
          <div className="product-list-content-item-text bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold capitalize mb-6">
              {category} Collection
              <p className="text-gray-600">
                Explore the latest trends in {category}.
              </p>
            </h2>
            <p className="text-gray-600">
              Discover the latest {category} products.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
            <p className="text-gray-600">
              Browse our collection of {category} products.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
            <p className="text-gray-600">
              Browse our collection of {category} products.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
          </div>
          <div className="product-list-content-item-image bg-gray-100 min-h-screen">
            <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
            <p className="mt-2 text-sm font-medium">
              {category} T-Shirt
            </p>
            <p className="font-bold text-sm">₹999</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
        <div className="product-list-content-item-image bg-gray-100 min-h-screen">
          <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
          <p className="mt-2 text-sm font-medium">
            {category} T-Shirt
          </p>
          <p className="font-bold text-sm">₹999</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
        <div className="product-list-content-item-image bg-gray-100 min-h-screen">
          <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
          <p className="mt-2 text-sm font-medium">
            {category} T-Shirt
          </p>
          <p className="font-bold text-sm">₹999</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
        <div className="product-list-content-item-image bg-gray-100 min-h-screen">
          <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
          <p className="mt-2 text-sm font-medium">
            {category} T-Shirt
          </p>
          <p className="font-bold text-sm">₹999</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
        <div className="product-list-content-item-image bg-gray-100 min-h-screen">
          <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
          <p className="mt-2 text-sm font-medium">
            {category} T-Shirt
          </p>
          <p className="font-bold text-sm">₹999</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
        <div className="product-list-content-item-image bg-gray-100 min-h-screen">
          <img src={`/images/${category}.jpg`} alt={category} className="w-full h-72 object-cover rounded" />
          <p className="mt-2 text-sm font-medium">
            {category} T-Shirt
          </p>
          <p className="font-bold text-sm">₹999</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
