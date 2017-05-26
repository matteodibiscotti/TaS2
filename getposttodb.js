var userData = mongoose.model('userData', userSchema);

router.post('/loginpage', function(req, res, next) {
  var item = {
    username: req.body.username,
    email: req.body.email,
    unitNumber: req.body.unitNumber,
    streetNumber: req.body.streetNumber,
    streetName: req.body.streetName,
    postcode: req.body.postcode
    //coords: {type: [Number], index: '2dsphere'}, //longitude, then latitude ??? - this is if we are using google maps

    //pwd: {type: String, required: true}, //do we need this here if we're using passport?
  };

  var data = new userData(item);
  data.save();

  res.redirect('/somewhere');

});
