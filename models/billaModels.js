const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    costumerName: {
      type: String,
      required: true,
    },
    costumerNumber: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
   
    paidAmount  : {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },
   cartItems: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
  },
  },
  { timestamp: true }
);

const bills = mongoose.model("bills", billSchema);

module.exports = bills;