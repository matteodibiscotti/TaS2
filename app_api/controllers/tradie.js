module.exports sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.Json(content);
};

module.exports.updateTradieProfile = function (req, res) {

  if (err) {
     sendJsonResponse(res, 404, err);
     res.redirect('/');
   } else {
  sendJsonResponse(res, 200, trades.tradesman);

  console.log("tradie's public profile obtained");
  res.redirect('/');
  }
})

};
module.exports.getPublicProfile = function (req, res) {


  if (err) {
     sendJsonResponse(res, 404, err);
     res.redirect('/');
   } else {
  sendJsonResponse(res, 200, trades.tradesman);

  console.log("tradie's public profile obtained");
  res.redirect('/');
  }
})

};
module.exports.createReview = function (req, res) {
  trades.create({
    businessName: req.body.businessName,
    rating: req.body.rating,
    review: req.body.review,
  },
      if (err) {
         sendJsonResponse(res, 404, err);
         res.redirect('/');
       } else {
      sendJsonResponse(res, 200, trades.username);

      console.log('saved new review to database');
      res.redirect('/');
      }
    })

};
module.exports.tradieSignup = function (req, res) {
  trades.create({
    businessName: req.body.businessName,
    businessNumber: req.body.businessNumber,
    unitNumber: req.body.unitNumber,
    streetNumber: req.body.streetNumber,
    postcode: req.body.postcode,
    email: req.body.email,
    pwd: req.body.pwd,
    services: req.body.services,
    distance: req.body.distance,
  }, function(err, res) {

      if (err) {
         sendJsonResponse(res, 404, err);
         res.redirect('/');
       } else {
      sendJsonResponse(res, 200, trades.username);

      console.log('saved new tradie to database');
      res.redirect('/');
      }
  })
};
