import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "./Styles.css";

function OrderHistory() {
    return (
        <>


            <Navbar />

            <div className="order-history-page-content bg-gray-100 min-h-screen">
                <div className="order-history-page-content-item bg-gray-100 min-h-screen">
                    <div className="order-history-page-content-item-text bg-gray-100 min-h-screen">
                        <h2 className="text-2xl font-bold mb-4">Order History</h2>
                        <p className="text-gray-600 mb-2">You have no orders yet.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Shop Now
                        </button>
                        <p className="text-gray-600 mb-2">Browse our collection of products.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Shop Now
                        </button>
                        <div className="order-history-page-content-item-text bg-gray-100 min-h-screen">
                            <h2 className="text-2xl font-bold mb-4">Order History</h2>
                            <p className="text-gray-600 mb-2">You have no orders yet.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="order-history-page-content bg-gray-100 min-h-screen">
                    <div className="order-history-page-content-item bg-gray-100 min-h-screen">
                        <div className="order-history-page-content-item-text bg-gray-100 min-h-screen">
                            <h2 className="text-2xl font-bold mb-4">Order History</h2>
                            <p className="text-gray-600 mb-2">You have no orders yet.</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 min-h-screen ">
                    <div className="order-history-content bg-gray-100 min-h-screen">
                        <div className="order-history-content-item bg-gray-100 min-h-screen">
                            <div className="order-history-content-item-text bg-gray-100 min-h-screen">  <h2 className="text-2xl font-bold mb-4">Order History</h2>
                                <p className="text-gray-600 mb-2">You have no orders yet.</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Shop Now
                                </button>
                                <p className="text-gray-600 mb-2">Browse our collection of products.</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Shop Now
                                </button>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Order History</h2>
                            <p className="text-gray-600 mb-2">You have no orders yet.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </button>
                            <p className="text-gray-600 mb-2">Browse our collection of products.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="order-history-content-item bg-gray-100 min-h-screen">
                        <div className="order-history-content-item-text bg-gray-100 min-h-screen">
                            <h2 className="text-2xl font-bold mb-4">Order History</h2>
                            <p className="text-gray-600 mb-2">You have no orders yet.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="order-history-content-item bg-gray-100 min-h-screen">
                        <div className="order-history-content-item-text bg-gray-100 min-h-screen">
                            <h2 className="text-2xl font-bold mb-4">Order History</h2>
                            <p className="text-gray-600 mb-2">You have no orders yet.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md order-history-content-item-text bg-gray-100 min-h-screen">
                    <div className="mb-4 order-history-content-item-text bg-gray-100 min-h-screen">
                        <h1 className="text-2xl font-bold mb-4">Order History</h1>
                        <p className="text-gray-600 mb-2">You have no orders yet.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mt-4 order-history-content-item-text bg-gray-100 min-h-screen">
                    <div className="mb-4 order-history-content-item-text bg-gray-100 min-h-screen">
                        <h2 className="text-xl font-semibold mb-2 ">How to Place an Order:</h2>
                    </div>
                    <div className="mb-4 order-history-content-item-text bg-gray-100 min-h-screen">
                        <p className="text-gray-600 mb-2">1. Browse our collection and add items to your cart.</p>
                        <p className="text-gray-600 mb-2">2. Proceed to checkout and enter your shipping information.</p>
                        <p className="text-gray-600 mb-2">3. Choose your payment method and complete the purchase.</p>
                        <p className="text-gray-600 mb-2">4. You will receive a confirmation email with your order details.</p>
                        <p className="text-gray-600 mb-2">5. Track your order status in your profile.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default OrderHistory