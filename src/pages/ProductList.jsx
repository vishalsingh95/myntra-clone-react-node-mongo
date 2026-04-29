import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products/${category}`);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <Navbar />
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
            <p className="text-gray-600">
              Browse our collection of {category} products.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>

        <div className="bg-gray-50 min-h-screen p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading ? (
              <p className="text-gray-600">Loading products...</p>
            ) : error ? (
              <p className="text-red-600">Error loading products: {error.message}</p>
            ) : products && products.length > 0 ? (
              products.map(product => (
                <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                    <p className="text-gray-500">{product.brand}</p>
                    <p className="text-gray-800 font-bold">${product.price}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
