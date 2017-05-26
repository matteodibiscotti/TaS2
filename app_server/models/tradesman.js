var mongoose = require('mongoose');

var tradesmanSchema = new mongoose.Schema({
  username: {type: String, required: true},
  abn: {type: Number, required: true},
  unitNumber: {type: String},
  streetNumber: {type: String},
  streetName: {type: String, required: true},
  postcode: {type: Number, required: true},
  //coords: {type: [Number], index: '2dsphere'}, //longitude, then latitude
  email: {type: String, required: true},

});
module.exports = mongoose.model('tradesman', tradesmanSchema, 'tradesman');
