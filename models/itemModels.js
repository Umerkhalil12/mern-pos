const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
     
    },
    stock: {
      type: Number,
      required: true,
     
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Ensure timestamps for createdAt and updatedAt
  }
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
