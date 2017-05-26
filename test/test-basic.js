//preliminary javascript tests, to check that the testing framework works

var assert = require('assert');

var email1 = "testnotemail.com";
var email2 = "test@email.com";

describe('Basic-tests', function(){
  it('Test for non e-mail address', function() {
    assert.equal(email1.indexOf('@'), -1, '@ not found');
  });
  it('Test for e-mail address', function(){
    assert.equal(email2.indexOf('@'), 4, '@ found');
  });
  afterEach(function(){
    //nothing to clean up at the moment
  });
});
