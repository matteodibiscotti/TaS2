var mongoose = require('mongoose');

var addreviewSchema = new mongoose.Schema({
  businessName: {type: String, required: true},
  jobDescription: {type: String, required: true},
  rating: {type: Number, min: 0, max: 5, required: true},
  tradieReview: {type: String}

});
module.exports = mongoose.model('addreview', addreviewSchema, 'addreview');
