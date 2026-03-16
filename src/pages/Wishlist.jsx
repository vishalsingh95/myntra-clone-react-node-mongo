import React from 'react'

function Wishlist() {
    const wishlistItems = []; // This will hold the items in the wishlist

    // For now, we will just display a message if the wishlist is empty
    if (wishlistItems.length === 0) {
       
    }
  return (
    <div className="p-4 text-center text-2xl font-bold text-gray-700">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-500">Your wishlist is empty</p>

        </div>
        <div className="mt-6 ">
            <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
                Start Shopping
            </button>

        </div>        
    </div>
  )
}

export default Wishlist