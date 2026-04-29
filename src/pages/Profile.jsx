import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "./Styles.css";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
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
      <div className="profile-page-content">
        <div className="profile-page-content-item">
          <div className="profile-page-content-item-text"></div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 min-h-screen profile-page bg-gray-100 min-h-screen">

        <div className="bg-white p-6 rounded-lg shadow-md profile-info">
          <div className="profile-page-content-item-text">
            <h2 className="text-xl font-semibold mb-2 profile-heading">Update Profile</h2>
            <p className="text-gray-600 mb-2">Edit your profile information at any time.</p>
          </div>
          <div className="profile-page-content-item-text">
            <h2 className="text-xl font-semibold mb-2 profile-heading">Change Password</h2>
            <p className="text-gray-600 mb-2 ">Update your password to keep your account secure.</p>
          </div>
          <div className="profile-page-content-item-text">
            <h2 className="text-xl font-semibold mb-2 profile-heading">My Orders</h2>
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
        </div>
        <h1 className="text-2xl font-bold mb-4 ">My Profile</h1>
        <p className="text-gray-600 mb-2">Name: {user.name}</p>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 profile-actions">
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2 profile-heading">Update Profile</h2>
          <p className="text-gray-600 mb-2">Edit your profile information at any time.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2 profile-heading">Change Password</h2>
          <p className="text-gray-600 mb-2 ">Update your password to keep your account secure.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2 profile-heading">My Orders</h2>
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
      </div>

      <Footer />
    </>
  )
}

export default Profile