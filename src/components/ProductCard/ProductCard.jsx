import "./ProductCard.css"
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { addToWishlist } from "../../redux/features/wishlistSlice";
import { useState } from "react";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Item added to cart");
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    dispatch(addToWishlist(product));
    toast.success("Item added to wishlist");
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart");
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <div className="relative w-full max-w-xs border border-gray-200 rounded-lg p-4 bg-white shadow-md">

        {/* Wishlist Icon */}
        <div
          className="absolute top-2 right-2 cursor-pointer z-10"
          onMouseEnter={() => setIsHeartFilled(true)}
          onMouseLeave={() => setIsHeartFilled(false)}
          onClick={handleAddToWishlist}
        >
          <AiFillHeart
            className={`h-6 w-6 ${isHeartFilled ? "text-red-500" : "text-gray-400"}`}
          />
        </div>

        {/* Cart Icon */}
        <div
          className="absolute top-2 left-2 cursor-pointer"
          onClick={handleAddToCart}
        >
          <BiShoppingBag className="h-6 w-6 text-gray-400" />
        </div>

        {/* Product Link */}
        <Link to={`/product/${product._id}`}>
          {product.badge && (
            <div className={`badge text-xs px-1 rounded ${product.badge.color}`}>
              {product.badge.text}
            </div>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />

          <div className="text-left mt-2">
            <h3 className="text-sm font-bold">{product.brand}</h3>
            <p className="text-gray-600 text-sm">{product.name}</p>
          </div>

          <h4 className="font-medium">{product.name}</h4>
          <p className="price">₹{product.price}</p>
          <p className="mrp">₹{product.mrp}</p>
          <p className="discount">
            ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF)
          </p>
        </Link>

        <button
          onClick={handleBuyNow}
          className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;