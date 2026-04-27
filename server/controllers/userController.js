const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.getMe = async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
};

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true, runValidators: true }).select("-password");
    res.json(user);
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
};

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user.id });
    res.json(cart);
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
};

exports.getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate("userId", "id name", "products.product", "id name", "products.product", "id name");
    res.json(order);
};

exports.updateStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(order);
};

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ msg: "Product not found" });

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ msg: "Cart not found" });

    const cartItem = cart.items.find(item => item.productId.toString() === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity, price: product.price });
    }

    cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    await cart.save();
    res.json(cart);
};

exports.removeFromCart = async (req, res) => {
    const productId = req.params.id;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ msg: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    await cart.save();
    res.json(cart);
};

exports.updateCartItem = async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ msg: "Cart not found" });

    const cartItem = cart.items.find(item => item.productId.toString() === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
    }

    cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    await cart.save();
    res.json(cart);
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id).select("-password");
    res.json(user);
};

