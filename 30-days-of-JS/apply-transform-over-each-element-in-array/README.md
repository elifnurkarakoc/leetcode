## Explanation

The map function takes an array and a function, applies the function to each element of the array along with its index, and returns a new array containing the transformed values. This is a common higher-order function pattern used in functional programming.

```ts
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
}
```
