const assert = require('assert');
const balancedNum = require('../index.js');

describe('Check less than thousand', function()
{
    it('Check balanced number', function()
    {
        assert.equal(balancedNum(7), 'Balanced')
        assert.equal(balancedNum(959), 'Balanced')
        assert.equal(balancedNum(13), 'Balanced')
        assert.equal(balancedNum(432), 'Not Balanced')
        assert.equal(balancedNum(424), 'Balanced')
    })
    it('Check Larger number', function()
    {
        assert.equal(balancedNum(1024), 'Not Balanced')
        assert.equal(balancedNum(66545), 'Not Balanced')
        assert.equal(balancedNum(295591), 'Not Balanced')
        assert.equal(balancedNum(1230987), 'Not Balanced')
        assert.equal(balancedNum(56239814), 'Balanced')
    })
})