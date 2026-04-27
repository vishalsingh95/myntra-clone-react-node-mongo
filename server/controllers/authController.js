const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashed });

  await Cart.create({ user: newUser._id });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid password" });


  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
