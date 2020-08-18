const mongoose = require('mongoose');
var schema = mongoose.Schema({
  name: { type: String, unique: true },
  role: { type: String },
  phoneNumber: { type: Number, unique: true },
  password: { type: String },
});
var Users = mongoose.model('Users', schema);
module.exports = Users;
