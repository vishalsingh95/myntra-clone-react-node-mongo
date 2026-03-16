import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import "./Styles/Kids.css";

const products = [
  {
    img: "/images/kids/kids1.jpg",
    brand: "H&M",
    name: "Boys' Printed T-Shirt",
    price: 499,
    mrp: 899,
  },
  {
    img: "/images/kids/kids2.jpg",
    brand: "GAP",
    name: "Girls' Floral Dress",
    price: 599,
    mrp: 999,
  },
  {
    img: "/images/kids/kids3.jpg",
    brand: "Adidas",
    name: "Kids' Sneakers",
    price: 1999,
    mrp: 2999,
  },
  {
    img: "/images/kids/kids4.jpg",
    brand: "Puma",
    name: "Kids' Sports Shoes",
    price: 1499,
    mrp: 2499,
  },
  {
    img: "/images/kids/kids5.jpg",
    brand: "Zara",
    name: "Boys' Denim Jacket",
    price: 1299,
    mrp: 1999,
  },
  {
    img: "/images/kids/kids6.jpg",
    brand: "Mango",
    name: "Girls' Casual Dress",
    price: 699,
    mrp: 1299,
  },
  {
    img: "/images/kids/kids7.jpg",
    brand: "Nike",
    name: "Kids' Running Shoes",
    price: 2499,
    mrp: 3999,
  },
  {
    img: "/images/kids/kids8.jpg",
    brand: "Reebok",
    name: "Kids' Training Shoes",
    price: 1799,
    mrp: 2799,
  },
];

const Kids = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      

      {/* Categories */}
      <Categories category="kids" />

      {/* Trending Products */}
      <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-10 trending-products ">

        <h2 className="text-2xl font-bold mb-6 trending-heading">
          Kids' Trending Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 trending-grid">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden trending-product-card"
            >

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold text-gray-800">
                  {product.brand}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  {product.name}
                </p>

                <div className="flex items-center gap-2">

                  <span className="font-bold text-lg">
                    ₹{product.price}
                  </span>

                  <span className="text-gray-500 line-through text-sm">
                    ₹{product.mrp}
                  </span>

                  <span className="text-pink-500 text-sm font-semibold ">
                    {Math.round(
                      ((product.mrp - product.price) / product.mrp) * 100
                    )}
                    % OFF
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Kids;