var should = require('should');
var mongoose = require('mongoose');
var user = require("../app_api/models/user.js");
var db;

describe('Register user', function() {
  before(function(done) {
    db = mongoose.connect('mongodb://dbadmin:dbpassword@ds141351.mlab.com:41351/trades');
    done();
  });
  after(function(done) {
    mongoose.connection.close();
    done();
  });
  beforeEach(function(done) {
    var userTest = new user({
      username: 'INeedWork',
      email: 'test@test.com.au',
      password: 'password1',
      unitNumber: '1',
      streetNumber: '21',
      streetName: 'Smith St.',
      postcode: '6203'
    });
  });

  it('Return a user', function(done) {
    user.findOne({ username: 'INeedWork'}, function(err, account) {
      user.email.should.eql('test@test.com.au');
      console.log(userTest.username, "'s e-mail is ", userTest.email);
      done();
    });
  });

  afterEach(function(done) {
    user.remove({}, function() {
      done();
    });
  });
});
