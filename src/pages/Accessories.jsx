import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import API from '../api/axios';
import Banner from "../components/Banner/Banner"; // <-- you forgot this import

function Accessories() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await API.get("/products");
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await API.get("/cart");
            setCart(response.data);
        };
        fetchCart();
    }, []);

    const addToCart = async (product) => {
        const response = await API.post("/cart/add", product);
        setCart(response.data);
    };

    // ✅ RETURN MUST BE INSIDE FUNCTION
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar cart={cart} />

            <Banner />

            <div className="p-4 bg-gray-100 flex-grow">
                <h1 className="text-2xl font-bold mb-4">Accessories</h1>

                <div className="flex flex-wrap gap-6">
                    {products.map((product) => (
                        <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">₹{product.price}</p>

                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Accessories;