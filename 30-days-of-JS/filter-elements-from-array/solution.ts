/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


// function greaterThan10(n) { return n > 10; }
// function firstIndex(n, i) { return i === 0; }
// function plusOne(n) { return n + 1 }

type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[]  {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

export default filter;
