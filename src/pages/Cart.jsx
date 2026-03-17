import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  setCartItemQuantity,
} from "../redux/cartSlice";
import { toast } from "react-toastify";
import { formatCurrency } from "../utils/formatCurrency";
import "../pages/Styles/Cart.css";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
  }, []);

  const totals = useMemo(() => {
    const itemsCount = cartItems.reduce(
      (acc, i) => acc + Number(i.quantity ?? 1),
      0
    );

    // Myntra-like summary (approx) — if you store `mrp`, use it; else infer a display MRP.
    const total = cartItems.reduce((acc, i) => {
      const price = Number(i.price ?? 0);
      const qty = Number(i.quantity ?? 1);
      return acc + price * qty;
    }, 0);

    const totalMrp = cartItems.reduce((acc, i) => {
      const price = Number(i.price ?? 0);
      const qty = Number(i.quantity ?? 1);
      const mrp = Number(i.mrp ?? price * 1.4);
      return acc + mrp * qty;
    }, 0);

    const discount = Math.max(0, totalMrp - total);
    const platformFee = itemsCount > 0 ? 20 : 0;
    const shippingFee = total >= 799 || itemsCount === 0 ? 0 : 49;
    const payable = Math.max(0, total + platformFee + shippingFee);

    return {
      itemsCount,
      total,
      totalMrp,
      discount,
      platformFee,
      shippingFee,
      payable,
    };
  }, [cartItems]);

  const handleCheckout = () => {
    if (!cartItems.length) return;
    if (!isLoggedIn) {
      toast.error("Please log in to proceed to checkout");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.info("Removed from bag");
  };

  const handleQuantityChange = (id, nextQty) => {
    dispatch(setCartItemQuantity({ id, quantity: nextQty }));
    toast.success("Updated quantity");
  };

  if (!cartItems.length) {
    return (
      <div className="cart cart-page">
        <div className="cart-empty">
          <h2>Your bag is empty</h2>
          <p>Add items to your bag to see them here.</p>
          <Link className="cart-primary-link" to="/">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart cart-page">
      <div className="cart-shell">
        <div className="cart-left">
          <div className="cart-header">
            <h2>My Bag</h2>
            <span className="cart-subtitle">{totals.itemsCount} items</span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => {
              const id = item.id ?? item._id;
              const qty = Number(item.quantity ?? 1);
              const title = item.name ?? item.title ?? "Product";
              const image = item.image ?? item.img ?? item.thumbnail;
              const price = Number(item.price ?? 0);

              return (
                <div key={id} className="cart-row">
                  <div className="cart-row-image">
                    {image ? (
                      <img src={image} alt={title} />
                    ) : (
                      <div className="cart-image-fallback" />
                    )}
                  </div>

                  <div className="cart-row-main">
                    <div className="cart-row-title">{title}</div>
                    <div className="cart-row-meta">
                      <span className="cart-row-price">
                        {formatCurrency(price)}
                      </span>
                      <span className="cart-row-dot">•</span>
                      <span className="cart-row-qtylabel">Qty</span>
                      <select
                        className="cart-qty"
                        value={qty}
                        onChange={(e) =>
                          handleQuantityChange(id, Number(e.target.value))
                        }
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div className="cart-row-actions">
                      <button
                        type="button"
                        className="cart-linklike"
                        onClick={() => handleRemove(id)}
                      >
                        REMOVE
                      </button>
                      <Link className="cart-linklike" to="/wishlist">
                        MOVE TO WISHLIST
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="cart-right">
          <div className="price-card">
            <div className="price-title">PRICE DETAILS</div>
            <div className="price-row">
              <span>Total MRP</span>
              <span>{formatCurrency(totals.totalMrp)}</span>
            </div>
            <div className="price-row price-row-discount">
              <span>Discount on MRP</span>
              <span>-{formatCurrency(totals.discount)}</span>
            </div>
            <div className="price-row">
              <span>Platform Fee</span>
              <span>{formatCurrency(totals.platformFee)}</span>
            </div>
            <div className="price-row">
              <span>Shipping Fee</span>
              <span>
                {totals.shippingFee === 0
                  ? "FREE"
                  : formatCurrency(totals.shippingFee)}
              </span>
            </div>
            <div className="price-divider" />
            <div className="price-row price-total">
              <span>Total Amount</span>
              <span>{formatCurrency(totals.payable)}</span>
            </div>

            <button
              type="button"
              className="place-order"
              onClick={handleCheckout}
            >
              PLACE ORDER
            </button>

            <div className="cart-secondary-links">
              <Link to="/">Continue shopping</Link>
              <Link to="/orders">View orders</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
