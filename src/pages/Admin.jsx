import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function Admin() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100">

        <div className="p-4 bg-gray-100 flex-grow">

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <p className="text-gray-600 mb-4">Add, edit, or delete products from the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Manage Products
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
            <p className="text-gray-600 mb-4">View and manage customer orders.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Manage Orders
            </button>
          </div>

          {/* Add new product */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
            <p className="text-gray-600 mb-4">Add a new product to the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add New Product
            </button>
          </div>

          {/* Edit product */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Edit Product</h2>
            <p className="text-gray-600 mb-4">Edit an existing product in the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Edit Product
            </button>
          </div>

          {/* Delete product */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Delete Product</h2>
            <p className="text-gray-600 mb-4">Delete an existing product from the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Delete Product
            </button>
          </div>

          {/* Add new category */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Add New Category</h2>
            <p className="text-gray-600 mb-4">Add a new category to the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add New Category
            </button>
          </div>

          {/* Edit category */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Edit Category</h2>
            <p className="text-gray-600 mb-4">Edit an existing category in the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Edit Category
            </button>
          </div>

          {/* Delete category */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Delete Category</h2>
            <p className="text-gray-600 mb-4">Delete an existing category from the store.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Delete Category
            </button>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Admin