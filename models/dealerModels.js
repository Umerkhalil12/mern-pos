const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  dealerName: { type: String, required: true },
  contactName: { type:  Number, required: true },
  shopName: { type: String, required: true },
  address: { type: String, required: true },
  products: { type: String }
});

const Dealer = mongoose.model('Dealer', dealerSchema);
module.exports = Dealer;

