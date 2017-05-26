var assert = require('assert');
var tradeinfo = require('../public/javascripts/DynamicForm.js');
var tradeList, serviceList;

describe('Trades and services test', function() {

  before(function() {
    tradeList = document.getElementById("trade");
    serviceList = document.getElementById("service");
    
  });

  after(function() {

  });

  beforeEach(function() {

  });

  //run tests
  it('test simple', function() {
    assert.equal(1+1, 2, 'ts test');
  });

  afterEach(function() {

  });

});
