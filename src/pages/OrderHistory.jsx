import React from 'react'

function OrderHistory() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-md ">
            <div className="mb-4 ">
                <h1 className="text-2xl font-bold mb-4">Order History</h1>
                <p className="text-gray-600 mb-2">You have no orders yet.</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <div className="mb-4 ">
                <h2 className="text-xl font-semibold mb-2 ">How to Place an Order:</h2>
            </div>
            <div className="mb-4 ">
                <p className="text-gray-600 mb-2">1. Browse our collection and add items to your cart.</p>
                <p className="text-gray-600 mb-2">2. Proceed to checkout and enter your shipping information.</p>
                <p className="text-gray-600 mb-2">3. Choose your payment method and complete the purchase.</p>
                <p className="text-gray-600 mb-2">4. You will receive a confirmation email with your order details.</p>
                <p className="text-gray-600 mb-2">5. Track your order status in your profile.</p>
            </div>

        </div>
    </div>
  )
}

export default OrderHistory