const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  const { cartId, shippingAddress, paymentMethod } = req.body;

  const cart = await Cart.findById(cartId);
  if (!cart) return res.status(400).json({ msg: "Cart not found" });

  const order = await Order.create({
    userId: cart.user,
    products: cart.items,
    totalAmount: cart.totalAmount,
    shippingAddress,
    paymentMethod
  });
  await cart.remove();
  res.json(order);

};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("userId", "id name", "products.product", "id name", "products.product", "id name");
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("userId", "id name", "products.product", "id name", "products.product", "id name");
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.json(order);
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body);
  if (!order) return res.status(404).json({ msg: "Order not found" });

  res.json({ msg: "Order updated successfully" });
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json({ msg: "Order not found" });

  res.json({ msg: "Order deleted successfully" });
};
