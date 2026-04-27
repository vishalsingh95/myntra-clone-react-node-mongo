const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
  stock: Number,
  ratings: Number,
  numReviews: Number,
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      name: String,
      rating: Number,
      comment: String,
      createdAt: Date
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
