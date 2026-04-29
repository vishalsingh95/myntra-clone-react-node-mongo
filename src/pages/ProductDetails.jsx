import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import "./Styles.css";

const products = [
  { id: "1", name: "Men Cotton T-Shirt", price: 999, img: "https://via.placeholder.com/400x550" },
  { id: "2", name: "Women Kurti", price: 1499, img: "https://via.placeholder.com/400x550" },
  { id: "3", name: "Running Shoes", price: 2999, img: "https://via.placeholder.com/400x550" },
  { id: "4", name: "Backpack", price: 1599, img: "https://via.placeholder.com/400x550" },
  { id: "5", name: "Smart Watch", price: 8999, img: "https://via.placeholder.com/400x550" },
  { id: "6", name: "Sunglasses", price: 4999, img: "https://via.placeholder.com/400x550" },
  { id: "7", name: "Men Jeans", price: 2199, img: "https://via.placeholder.com/400x550" },
  { id: "8", name: "Women Handbag", price: 1799, img: "https://via.placeholder.com/400x550" },
  { id: "9", name: "Women Dress", price: 2499, img: "https://via.placeholder.com/400x550" },
  { id: "10", name: "Sports Jacket", price: 3499, img: "https://via.placeholder.com/400x550" },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) || products[0];
  const category = product?.name?.split(" ")[0] || "fashion";

  return (
    <>
    <main className="product-details-page bg-gray-100 min-h-screen">

      <div className="product-details-page-content bg-gray-100 min-h-screen">
        <div className="product-details-page-content-item bg-gray-100 min-h-screen">
          <div className="product-details-page-content-item-image bg-gray-100 min-h-screen">
            <img src={product.img} alt={product.name} className="w-full h-72 object-cover rounded" />
          </div>
          <div className="product-details-page-content-item-text bg-gray-100 min-h-screen">
            <p className="mt-2 text-sm font-medium text-gray-600">
              {product.name}
            </p>
            <p className="font-bold text-sm text-gray-600">₹{product.price}</p>
          </div>
          <div className="product-details-page-content-item-button bg-gray-100 min-h-screen">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    
      <Navbar />
      <ProductDetails product={product} />
      
      <div className="product-details-content-item-image bg-gray-100 min-h-screen">
        <img src={product.img} alt={product.name} className="w-full h-72 object-cover rounded" />
        <p className="mt-2 text-sm font-medium text-gray-600">
          {product.name}
        </p>
        <p className="font-bold text-sm text-gray-600">₹{product.price}</p>
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
        <p className="text-gray-600">
          Browse our collection of {category} products.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Shop Now
        </button>
      </div>
      <Footer />
      </main>
    </>
  );
};

export default ProductDetailsPage;
