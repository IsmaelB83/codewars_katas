const assert = require('assert');
const strong = require('../index.js');

describe("Fixed Tests", () => {
    it("Testing for 1", () => {
        assert.equal(strong(1), "STRONG!!!!");
    });
    it("Testing for 2", () => {
        assert.equal(strong(2), "STRONG!!!!");
    });
    it("Testing for 145", () => {
        assert.equal(strong(145), "STRONG!!!!");
    });
    it("Testing for 7", () => {
        assert.equal(strong(7), "Not Strong !!");
    });
    it("Testing for 93", () => {
        assert.equal(strong(93), "Not Strong !!");
    });
    it("Testing for 185", () => {
        assert.equal(strong(185), "Not Strong !!");
    });
});