import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      {/* Background Image */}
      <img
        src="/images/banner.png"
        alt="Promotional Banner"
        className="banner-image w-full h-auto object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="banner-overlay flex items-center justify-center h-full w-full absolute top-0 left-0">
        <div className=" banner-content text-center text-white p-4 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Summer Sale is Here!</h1>
          <p className="text-lg">Up to 50% off on top fashion brands</p>

          <div className="banner-buttons mt-6 flex gap-4 justify-center ">
            <Link to="/men" className="primary-btn">
              Shop Men
            </Link>
            <Link to="/women" className="secondary-btn">
              Shop Women
            </Link>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Banner;
