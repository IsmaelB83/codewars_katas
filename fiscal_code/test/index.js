const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("basicTests", () => {
  it('given { name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }', () => {
    assert.strictEqual(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01");
  });
  it('given { name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }', () => {
    assert.strictEqual(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "YUXHLN50T41");
  });
  it('given { name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }', () => {
    assert.strictEqual(fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }), "CPNLAX99A17");
  });
});
