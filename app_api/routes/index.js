var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbadmin:dbpassword@ds141351.mlab.com:41351/trades')
var Schema = mongoose.Schema;
var ctrlOthers = require('../controllers/others');
var ctrlUser = require('../controllers/user');
var ctrlTradie = require('../controllers/tradie');

var loginSchema = new mongoose.schema (
  {
    username:{type:String, required:true},
    password:{type:String, required:true}
  }
);

var login = mongoose.model('Login', loginSchema);

/* Login */
router.get('/', ctrlOthers.checkLogin); /*verify the user*/

/* User pages. */
router.post('/user/results', ctrlUser.resultsCreate); /*show the results*/
router.get('/user/search/new', ctrlUser.resultsByDistance); /*get the results of the search from the db*/
router.post('/user/signup/new', ctrlUser.userCreate); /*enter data from form to db as new user*/

/* Tradie pages. */
router.put('/tradie/:tradieid/profile/private', ctrlTradie.updateTradieProfile); /*update tradie info in the database*/
router.get('/tradie/:tradieid/profile/public', ctrlTradie.getPublicProfile); /*get tradie profile by id*/
router.post('/tradie/:tradieid/review/new', ctrlTradie.createReview); /*create a review for a tradie*/
router.post('/tradie/signup/new', ctrlTradie.tradieSignup); /*enter data from form to db as new tradie*/


module.exports = router;
