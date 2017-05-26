var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('get-data', function(req, res, next) {
  UserData.find()
    .then(function(doc) {
      res.render('index', {items: doc});

  })
})


module.exports = router;
