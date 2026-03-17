import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "cart:v1";

function loadCartItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartItems(cartItems) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  } catch {
    // ignore storage failures (private mode / quota)
  }
}

const initialState = {
  cartItems: loadCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const incoming = action.payload;
      const incomingId = incoming?.id ?? incoming?._id;
      if (!incomingId) return;

      const qtyToAdd = Number(incoming.quantity ?? 1);
      const existing = state.cartItems.find(
        (i) => (i.id ?? i._id) === incomingId
      );

      if (existing) {
        existing.quantity = Number(existing.quantity ?? 1) + (qtyToAdd > 0 ? qtyToAdd : 1);
      } else {
        state.cartItems.push({
          ...incoming,
          id: incoming.id ?? incoming._id ?? incomingId,
          quantity: qtyToAdd > 0 ? qtyToAdd : 1,
        });
      }

      saveCartItems(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => (i.id ?? i._id) !== id);
      saveCartItems(state.cartItems);
    },
    setCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload || {};
      const nextQty = Number(quantity);
      if (!id || !Number.isFinite(nextQty)) return;

      const item = state.cartItems.find((i) => (i.id ?? i._id) === id);
      if (!item) return;

      if (nextQty <= 0) {
        state.cartItems = state.cartItems.filter((i) => (i.id ?? i._id) !== id);
      } else {
        item.quantity = Math.min(10, Math.max(1, Math.floor(nextQty)));
      }

      saveCartItems(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveCartItems(state.cartItems);
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems;

export const { addToCart, removeFromCart, setCartItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;