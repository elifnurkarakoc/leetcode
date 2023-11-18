## Explanation


The filter function takes an array and a function, applies the function to each element of the array along with its index, and returns a new array containing only the elements that satisfy the condition specified by the provided function. This is another common higher-order function pattern used in functional programming.


```ts
function filter(arr: number[], fn: Fn): number[]  {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
}
```