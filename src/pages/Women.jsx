import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Women = () => {

  const products = [
    {
      id: 1,
      name: "Floral Dress",
      price: "$49.99",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$79.99",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: "$199.99",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Ankle Boots",
      price: "$89.99",
      image: "https://via.placeholder.com/300x400"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-pink-600 mb-2">
              Women's Collection
            </h1>
            <p className="text-gray-600">
              Explore the latest trends in women's fashion.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] object-cover rounded"
                />

                <h3 className="text-lg font-semibold mt-3">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  {product.price}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <button className="text-pink-600 hover:text-pink-800">
                    <FaHeart size={18} />
                  </button>

                  <button className="text-gray-600 hover:text-black">
                    <FaShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Women;