import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="details container mt-5 d-flex gap-5 align-items-start bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} />
          <div className="info flex flex-col gap-3">
            <h2 className="mb-3">{product.name}</h2>
            <p className="font-bold text-lg">₹{product.price}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
