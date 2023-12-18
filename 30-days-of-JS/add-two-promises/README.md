## Explanation

This asynchronous function, `addTwoPromises`, takes two promises (`promise1` and `promise2`), awaits their resolutions using `Promise.all`, and then returns a promise that resolves to the sum of their results.

```js
async function addTwoPromises(promise1: P, promise2: P): Promise<number> {
  const [result1, result2] = await Promise.all([promise1, promise2]);

  return result1 + result2;
}
```
