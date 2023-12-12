## Explanation

The ArrayWrapper class is a simple wrapper for an array of numbers. It allows you to calculate the sum of the numbers using the valueOf method and obtain a JSON-formatted string representation of the array using the toString method.

```ts
class ArrayWrapper {
  nums: number[] = [];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((acc, value) => acc + value, 0);
  }

  toString(): string {
    return JSON.stringify(this.nums);
  }
}
```
