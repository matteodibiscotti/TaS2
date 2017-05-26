var assert = require('assert');


describe('Basic-tests', function(){
  it('test 1 + 1 = 2', function() {
    assert.equal(1+1, 2, '1+1 should equal 2');
  });
  it('test 1 + 1 != 3', function(){
    assert.notEqual(1+1, 3, '1+1 is not equal to 3');
  });
  afterEach(function(){
    //nothing to clean up at the moment
  });
});
