import "./Banner.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import API from "../../api/axios";

const Banner = () => {




  useEffect(() => {
    console.log("Banner")
    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("Banner token", token)
    }
  }, [
    localStorage.getItem("token")
  ]);




  return (
    <section className="banner">



      <div className="text-center text-white p-4 rounded-lg">



        <img
          src="/images/banner.png"
          alt="Promotional Banner"
          className="banner-image w-full h-auto object-cover absolute top-0 left-0"
        />

      </div>

      {/* Background Image */}
      <img
        src="/images/banner.png"
        alt="Promotional Banner"
        className="banner-image w-full h-auto object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="banner-overlay flex items-center justify-center h-full w-full absolute top-0 left-0">
        <div className="text-center text-white p-4 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Summer Sale is Here!</h1>
          <p className="text-lg">Up to 50% off on top fashion brands</p>

          <div className="mt-6 flex gap-4 justify-center ">
            <Link to="/men" className="text-white px-6 py-2.5 rounded-full">
              Shop Men
            </Link>
            <Link to="/women" className="text-black px-6 py-2.5 rounded-full">
              Shop Women
            </Link>
            <Link to="/home-living" className="text-black px-6 py-2.5 rounded-full">
              Shop Home
            </Link>
            <Link to="/kids" className="text-black px-6 py-2.5 rounded-full">
              Shop Kids
            </Link>
            <Link to="/beauty" className="text-black px-6 py-2.5 rounded-full">
              Shop Beauty
            </Link>
            <Link to="/studio" className="text-black px-6 py-2.5 rounded-full">
              Shop Studio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
