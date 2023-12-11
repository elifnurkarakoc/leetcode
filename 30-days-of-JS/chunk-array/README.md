## Explanation

The <b>chunk</b> function takes an array and a chunk size as input, then splits the array into chunks of the specified size and returns a two-dimensional array containing those chunks. The function checks if the input array is not empty before proceeding with the chunking logic.

```ts
function chunk(arr: number[], size: number): Obj[][] {
  const temp = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i = size + i) {
      temp.push(arr.slice(i, size + i));
    }
  }

  return temp;
}
```
