## Explanation

The promiseAll function takes an array of functions that return promises. It creates a new promise that will:

- Resolve with an array of results once all the promises are successfully resolved.
- Reject if any of the promises is rejected, using the same reason as the first rejection.


```ts
function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    let resolvedCount = 0;

    if (functions.length === 0) {
      resolve(results);
      return;
    }

    functions.forEach((func, index) => {
      func()
        .then(result => {
          results[index] = result;
          resolvedCount++;

          if (resolvedCount === functions.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
```