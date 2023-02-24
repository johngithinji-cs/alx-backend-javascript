const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.2, 3.8), 5);
    assert.strictEqual(calculateNumber(1.5, 3.5), 5);
    assert.strictEqual(calculateNumber(1.9, 3.1), 5);
    assert.strictEqual(calculateNumber(2.49, 2.51), 5);
    assert.strictEqual(calculateNumber(2.49, 2.5), 5);
    assert.strictEqual(calculateNumber(2.5, 2.51), 5);
    assert.strictEqual(calculateNumber(2.49999, 2.50001), 5);
  });
});
