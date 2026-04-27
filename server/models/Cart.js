const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
