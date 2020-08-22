const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  type: { type: String },
  quantitey: { type: Number },
  date: { type: String },
  price: { type: Number },
  ID_Phone: { type: Number },
  sell: { type: Boolean },
  imageUrl: {
    type: String,
    default:
      'https://t4.ftcdn.net/jpg/03/12/86/53/240_F_312865329_ssJgRMK1Yt6uldB0T4W9KryeTKHVXsWG.jpg',
  },
});
var Item = mongoose.model('Item', Schema);
module.exports = Item;
