## Explanation

The moveZeroes function takes an array of numbers (nums) and performs the following steps:

Separates the non-zero elements into numsWithoutZero.
Separates the zero elements into numsOnlyZero.
Clears the original array (nums) in place.
Pushes the non-zero elements followed by the zero elements back into the original array.

```ts
function moveZeroes(nums: number[]): void {
  const numsWithoutZero = nums.filter(value => value !== 0);
  const numsOnlyZero = nums.filter(value => value === 0);
  nums.length = 0;
  nums.push(...numsWithoutZero, ...numsOnlyZero);
}
```
