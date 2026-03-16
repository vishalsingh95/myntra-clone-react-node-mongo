import "./Categories.css";

/* Product Card Component */
const ProductCard = ({ product, badge }) => {
  return (
    <div className="relative text-left bg-white p-3 rounded-lg shadow hover:shadow-lg transition">

      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      {badge && (
        <span
          className={`absolute top-2 right-2 text-xs text-white px-2 py-1 rounded ${badge.color}`}
        >
          {badge.text}
        </span>
      )}

      <h3 className="text-sm font-bold mt-2">{product.brand}</h3>
      <p className="text-gray-600 text-sm">{product.name}</p>

      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold text-sm">₹{product.price}</span>
        <span className="text-gray-500 line-through text-xs">
          ₹{product.mrp}
        </span>
      </div>

    </div>
  );
};

const Categories = () => {

  const categories = [
    { name: "Men", img: "/images/men.jpg" },
    { name: "Women", img: "/images/women.jpg" },
    { name: "Kids", img: "/images/kids.jpg" },
    { name: "Footwear", img: "/images/footwear.jpg" },
    { name: "Beauty", img: "/images/beauty.jpg" },
    { name: "Home", img: "/images/home.jpg" },
  ];

  const trendingProducts = [
    {
      img: "/images/kids/kids1.jpg",
      brand: "Nike",
      name: "Kids Sneakers",
      price: 1999,
      mrp: 2999,
    },
    {
      img: "/images/kids/kids2.jpg",
      brand: "Adidas",
      name: "Sports Shoes",
      price: 1499,
      mrp: 2499,
    },
    {
      img: "/images/kids/kids3.jpg",
      brand: "Puma",
      name: "Running Shoes",
      price: 1799,
      mrp: 2799,
    },
    {
      img: "/images/kids/kids4.jpg",
      brand: "Reebok",
      name: "Training Shoes",
      price: 1599,
      mrp: 2599,
    },
  ];

  const bestSellers = [
    {
      img: "/images/kids/kids5.jpg",
      brand: "Zara",
      name: "Denim Jacket",
      price: 1299,
      mrp: 1999,
    },
    {
      img: "/images/kids/kids6.jpg",
      brand: "H&M",
      name: "Casual Dress",
      price: 699,
      mrp: 1299,
    },
  ];

  const newArrivals = [
    {
      img: "/images/kids/kids7.jpg",
      brand: "Nike",
      name: "Running Shoes",
      price: 2499,
      mrp: 3999,
    },
  ];

  return (
    <section className="px-8 mt-12">

      {/* Category List */}
      <h2 className="text-xl font-bold mb-6">Shop By Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="text-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Trending */}
      <h2 className="text-2xl font-bold mb-6">Trending Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trendingProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Best Sellers */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Best Sellers</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* New Arrivals */}
      <h2 className="text-2xl font-bold mt-12 mb-6">New Arrivals</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            badge={{ text: "NEW", color: "bg-orange-500" }}
          />
        ))}
      </div>

    </section>
  );
};

export default Categories;