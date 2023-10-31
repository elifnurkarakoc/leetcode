/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// function plusone(n, i) { return n + i; }
// function constant() { return 42; }
// function plusI(n, i) { return n + i; }

const map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
};

export default map;
