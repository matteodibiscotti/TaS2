var MongoClient = require('mongodb').MongoClient, format =require('util').format;

var mongoose = require('mongoose');
var gracefulShutdown;
var dbURL = 'mongodb://dbadmin:dbpassword@ds141351.mlab.com:41351/trades';
MongoClient.connect(dbURL, function(err, db) {
  if(err) {
    throw err;
  } else{
    console.log("Connected to MongoDB");
  }
  db.close();
});
mongoose.connect(dbURL);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to' + dbURL);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

//For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

//for app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});
//For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});


//the schemas that are required will go here
require('./login');
require('./tradesman');
require('./user');
require('./search');
require('./addreview');
