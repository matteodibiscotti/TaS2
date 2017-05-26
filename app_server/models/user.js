var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  unitNumber: {type: String},
  streetNumber: {type: String},
  streetName: {type: String, required: true},
  postcode: {type: Number, required: true},
  email: {type: String, required: true},
  //coords: {type: [Number], index: '2dsphere'}, //longitude, then latitude
});
module.exports = mongoose.model('user', userSchema, 'user');
