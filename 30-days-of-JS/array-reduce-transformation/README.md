## Explanation


The reduce function takes an array, a function, and an initial value. It iterates over the elements of the array, applying the function to the accumulated result and the current element. The final result is the accumulated value after processing all elements in the array. This is a common higher-order function pattern used in functional programming.

```ts
function reduce(nums: number[], fn: Fn, init: number): number {
  let sum = init;

  if (nums?.length > 0) {
    for (let i = 0; i < nums?.length; i++) {
      sum = fn(sum, nums[i]);
    }
  }
  return sum;
}
```