import React from 'react'

function Accessories() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="p-4 bg-gray-100 min-h-screen">
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
    </div>
    </div>
  )
}

export default Accessories