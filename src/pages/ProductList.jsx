import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";

const ProductList = () => {
  const { category } = useParams();

  return (
    <>
      <Navbar/>

      
      <Categories />
      <div className="px-8 mt-8">
        <h2 className="text-2xl font-bold capitalize mb-6">
          {category} Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="cursor-pointer hover:shadow-lg transition"
            >
              <img
                src="/images/men.jpg"
                alt="product"
                className="w-full h-72 object-cover rounded"
              />
              <p className="mt-2 text-sm font-medium">
                {category} T-Shirt
              </p>
              <p className="font-bold text-sm">₹999</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductList;
