const assert = require('assert');
const hydrate = require('../index.js');

describe("Kata", () => {
  it("Basic tests", () => {
    assert.strictEqual(hydrate("1 beer"), "1 glass of water");
    assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
    assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
  });
});