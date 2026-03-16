import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import { Link } from "react-router-dom";

const trendingProducts = [
  {
    img: "/images/trending/trending1.jpg",
    brand: "Roadster",
    name: "Men Printed T-Shirt",
    price: 799,
    mrp: 1299,
  },
  {
    img: "/images/trending/trending2.jpg",
    brand: "Anouk",
    name: "Women Kurti",
    price: 999,
    mrp: 1999,
  },
  {
    img: "/images/trending/trending3.jpg",
    brand: "Nike",
    name: "Running Shoes",
    price: 2999,
    mrp: 4999,
  },
  {
    img: "/images/trending/trending4.jpg",
    brand: "Wildcraft",
    name: "Backpack",
    price: 1599,
    mrp: 2499,
  },
  {
    img: "/images/trending/trending5.jpg",
    brand: "Fossil",
    name: "Smart Watch",
    price: 8999,
    mrp: 14999,
  },
  {
    img: "/images/trending/trending6.jpg",
    brand: "Ray-Ban",
    name: "Sunglasses",
    price: 4999,
    mrp: 7999,
  },
  {
    img: "/images/trending/trending7.jpg",
    brand: "Levis",
    name: "Men Jeans",
    price: 2199,
    mrp: 3999,
  },
  {
    img: "/images/trending/trending8.jpg",
    brand: "Baggit",
    name: "Women Handbag",
    price: 1799,
    mrp: 2999,
  },
  {
    img: "/images/trending/trending9.jpg",
    brand: "H&M",
    name: "Women Dress",
    price: 2499,
    mrp: 3999,
  },
  {
    img: "/images/trending/trending10.jpg",
    brand: "Adidas",
    name: "Sports Jacket",
    price: 3499,
    mrp: 5999,
  },
];

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Categories */}
      <Categories />

      {/* Trending Products */}
      <section className="px-8 mt-12 trending-products">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Trending Products</h2>

          <Link
            to="/trending"
            className="text-sm text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {trendingProducts.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover rounded shadow "
              />

              <div className="mt-2 px-1">
                <p className="text-sm text-gray-600">{item.brand}</p>

                <p className="font-medium text-sm">{item.name}</p>

                <p className="font-bold text-sm">
                  ₹{item.price}

                  <span className="line-through text-gray-400 ml-1">
                    ₹{item.mrp}
                  </span>

                  <span className="text-pink-600 ml-1 font-medium text-xs">
                    ({Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF)
                  </span>
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;