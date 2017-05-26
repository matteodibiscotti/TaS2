var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
  username: {type: String, required: true},
  //need to add type of job and location
  coords: {type: [Number], index: '2dsphere'}, //provisional
  rating: {type: Number, min: 0 , max: 5, required: true}
});
module.exports = mongoose.model('Search', searchSchema, 'search');
