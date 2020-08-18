const mongoose = require('mongoose');

const schema = mongoose.Schema({
  phoneNumber: { type: Number },
  type: { type: String },
  quantitey: { type: Number },
  date: { type: Object },
  price: { type: Number },
});

var OpItem = mongoose.model('Orders', schema);

module.exports = OpItem;
