import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card p-4 bg-white shadow-md rounded relative flex flex-col items-start gap-2 ">
      <div className="wishlist absolute top-2 right-2 cursor-pointer hover:text-red-500 transition-colors duration-300 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 18.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 5.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <div>
        {product.badge && (
          <div className={`badge text-xs px-1 rounded ${product.badge.color}`}>
            {product.badge.text}
          </div>

        )}
      </div>
      <div className="text-left relative w-full ">
        <h3 className="text-sm font-bold mt-2">{product.brand}</h3>
        <p className="text-gray-600 text-sm">{product.name}</p>

      </div>
      <img src={product.image} alt={product.name} />
      <h4 className="font-medium ">{product.name}</h4>
      <p className="price ">₹{product.price}</p>
      <p className="mrp ">₹{product.mrp}</p>
      <p className="discount">({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF)</p>
    </div>
    

  );
};

export default ProductCard;
