const assert = require('assert');
const specialNumber = require('../index.js');

describe("Basic tests",_=>{
    assert.equal(specialNumber(2),"Special!!");
    assert.equal(specialNumber(3),"Special!!");
    assert.equal(specialNumber(6),"NOT!!");
    assert.equal(specialNumber(9),"NOT!!");
    assert.equal(specialNumber(11),"Special!!");
    assert.equal(specialNumber(55),"Special!!");
    assert.equal(specialNumber(26),"NOT!!");
    assert.equal(specialNumber(92),"NOT!!");
    assert.equal(specialNumber(25432),"Special!!");
    assert.equal(specialNumber(2783),"NOT!!");
  });