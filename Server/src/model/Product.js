const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    backdrop_image: { type: String, required: true },
    category: { type: Array, required: true },
    rating: {
      rate: { type: Number, required: true },
      review: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);