import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../pages/Styles/Cart.css";


const Cart = () => {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      toast.error('Please log in to proceed to checkout');
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity;
  });

  let totalItems = 0;
  cartItems.forEach(item => {
    totalItems += item.quantity;
  });

  const handleRemove = (id) => {
    // Implement remove from cart functionality here
    toast.info('Item removed from cart');
  };

  const handleQuantityChange = (id, quantity) => {
    // Implement quantity change functionality here
    toast.info('Cart updated');
  }

  const handleContinueShopping = () => {
    navigate('/');
  }



  return (
    <div className="col-md-6 offset-md-3 mt-5 bg-gray-100 p-4 rounded shadow min-h-screen flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 rounded shadow w-full max-w-2xl ">
    <div className="cart p-4 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

      <div className="cart-item flex items-center gap-4 mb-4">
        <img src={cartItems[0]?.image} alt="Product" className="w-24 h-24 object-cover rounded" />
        <div>
          <h3 className="text-lg font-medium">{cartItems[0]?.name}</h3>
          <p className="text-sm text-gray-600">₹{cartItems[0]?.price.toFixed(2)}</p>
          <p className="text-lg font-bold">Quantity: {cartItems[0]?.quantity}</p>

        </div>
        <button className="ml-auto bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleRemove(cartItems[0]?.id)}>
          Remove
        </button>
      </div>
      
    </div>
    <div className="total mt-4 p-4 bg-white shadow-md w-full flex items-center justify-between">
      <h3 className="text-lg font-medium">Total: ₹{totalPrice.toFixed(2)}</h3>
      <button onClick={handleCheckout} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>  
    </div>

    <div className="total mt-4 p-4 bg-white shadow-md w-full flex items-center justify-between ">
      <h3 className="text-lg font-medium mt-4 ">Total Items: {totalItems}</h3>
    </div>
    </div>

      <div className="flex flex-col items-center justify-center mt-4 gap-4 w-full max-w-md ">
        <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded ">
          <Link to="/"   className="text-blue-500 hover:underline mt-4 ">Continue Shopping</Link>
        </div>

          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/orders" className="text-blue-500 hover:underline mt-4">View Orders</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/wishlist" className="text-blue-500 hover:underline mt-4">View Wishlist</Link>
          </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 gap-4 w-full max-w-md ">
        <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded ">
          <Link to="/profile" className="text-blue-500 hover:underline mt-4">View Profile</Link>
        </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/settings" className="text-blue-500 hover:underline mt-4">Account Settings</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/support" className="text-blue-500 hover:underline mt-4">Customer Support</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/feedback" className="text-blue-500 hover:underline mt-4">Give Feedback</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded"> 
            <Link to="/faq" className="text-blue-500 hover:underline mt-4">FAQ</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/logout" className="text-blue-500 hover:underline mt-4">Logout</Link>
          </div>
          <div className="mt-4 text-center w-full bg-white p-4 shadow-md rounded">
            <Link to="/home" className="text-blue-500 hover:underline mt-4">Back to Home</Link>
          </div>

      </div>

    </div>
  );
}

export default Cart;
