import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Profile() {
  const user = {
    name: "John Doe",
    email: "[EMAIL_ADDRESS]",
    phone: "+1 234 567 890"
  };

  let orders = [
    {
      id: "ORD123456",
      date: "2024-05-01",
      total: 2999,
      status: "Delivered",
      items: [
        {
          name: "Men's Casual Shirt",
          quantity: 1,
          price: 1499
        },
        {
          name: "Women's Evening Dress",
          quantity: 1,
          price: 1999
        }
      ]
    }
  ];
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-600 mb-2">Name: {user.name}</p>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-2">Phone: {user.phone}</p>

        <h2 className="text-xl font-semibold mb-4 mt-6">My Orders</h2>
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded mb-4">
            <p className="text-gray-600 mb-1">Order ID: {order.id}</p>
            <p className="text-gray-600 mb-1">Date: {order.date}</p>
            <p className="text-gray-600 mb-1">Total: ₹{order.total}</p>
            <p className="text-gray-600 mb-1">Status: {order.status}</p>
            <div className="mt-2">
              <p className="text-gray-600 mb-1 font-semibold">Items:</p>
              {order.items.map((item, index) => (
                <p key={index} className="text-gray-600 mb-1">
                  {item.name} - Qty: {item.quantity} - Price: ₹{item.price}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Update Profile</h2>
          <p className="text-gray-600 mb-2">Edit your profile information at any time.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Update Profile
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <p className="text-gray-600 mb-2">Update your password to keep your account secure.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Change Password
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile