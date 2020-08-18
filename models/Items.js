const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  type: { type: String },
  quantitey: { type: Number },
  date: { type: String },
  price: { type: Number },
  ID_Phone: { type: Number },
  sell: { type: Boolean },
});
var Item = mongoose.model('Item', Schema);
module.exports = Item;
