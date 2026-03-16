import Navbar from "../Navbar/Navbar";

const ProductDetails = () => {

    const product = {
        name: "Men Cotton T-Shirt",
        price: 999,
        img: "https://via.placeholder.com/400x550",
    };
  return (
    <>
        <Navbar />
      <div className="bg-gray-200 h-40 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
      </div>

        <div className="p-4 bg-gray-100 min-h-screen ">
          <div className="details container mt-5 d-flex gap-5 align-items-start bg-white p-4 rounded-lg shadow-md">
          <img src={product.img} alt={product.name}  />
            <div className="info flex flex-col gap-3 ">
              <h2 className="mb-3">{product.name}</h2>
              <p className="font-bold text-lg">₹{product.price}</p>
            </div>
          </div>
          <div className="description mt-5 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Product Description</h3>
            <p>
              This is a high-quality cotton t-shirt designed for comfort and style. Made from 100% breathable cotton, it is perfect for everyday wear. The t-shirt features a classic fit and is available in various colors and sizes. Whether you're dressing up or down, this t-shirt is a versatile addition to your wardrobe.
            </p>
          </div>
          
        </div>
    </>
  );
};

export default ProductDetails;