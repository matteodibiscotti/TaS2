var mongoose = require('mongoose');

module.exports sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.Json(content);
};



module.exports.resultsCreate = function (req, res) { };
module.exports.resultsByDistance = function (req, res) { };
module.exports.userCreate = function (req, res) {
  trades.create({
    username: req.body.username,
    email: req.body.email,
    confemail: req.body.confemail,
    pwd: req.body.pwd,
    confpwd: req.body.confpwd,
    unitNumber: req.body.unitNumber,
    streetNumber: req.body.streetNumber,
    streetName: req.body.streetName,
    postcode: req.body.postcode,
  }, function(err, res) {

      if (err) {
         sendJsonResponse(res, 404, err);
         res.redirect('/');
       } else {
      sendJsonResponse(res, 200, trades.username);

      console.log('saved new user to database');
      res.redirect('/');
      }

});

};
