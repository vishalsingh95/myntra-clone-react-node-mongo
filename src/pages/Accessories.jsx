import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import API from '../api/axios';

function Accessories({

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await API.get("/products");
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

const [cart, setCart] = useState([]);

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



}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar cart={cart} />
            <div className="flex flex-col min-h-screen bg-gray-100">
                <div className="p-4 bg-gray-100 flex-grow">
                    <h1 className="text-2xl font-bold mb-4">Accessories</h1>
                    <p className="text-gray-600 mb-2 ">Explore our collection of accessories to complement your style.</p>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4 ">
                            <h2 className="text-xl font-semibold mb-2">Our Accessories Include:</h2>
                        </div>
                        <div className="mb-4 ">
                            <p className="text-gray-600 mb-2 ">From trendy bags to elegant jewelry, we have everything you need to complete your look.</p>
                        </div>
                        <div className="mb-4 " >
                            <ul className="list-disc list-inside text-gray-600 mb-4 ">
                                <li className="mb-2">Bags: Stylish and functional bags for every occasion.</li>
                                <li className="mb-2">Jewelry: Elegant pieces to enhance your look.</li>
                                <li className="mb-2">Watches: Timeless designs to keep you on schedule.</li>
                                <li className="mb-2">Sunglasses: Trendy eyewear to protect your eyes.</li>
                                <li className="mb-2">Belts: Classic and modern belts to complete your outfit.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
                                <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-2">${product.price}</p>
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
        </div>
    )
}

export default Accessories