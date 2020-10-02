/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const canMeasureWater = (x, y, z) => {
  if (x + y < z) {
    return false;
  }
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z;
  }
  return z % gcd(x, y) === 0;
};
