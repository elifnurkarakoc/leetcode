## Explanation

The once function creates a wrapper function that ensures that the original fn function is executed only once. Subsequent calls to the new function will do nothing and return undefined.

```ts
function once(fn: Function): OnceFn {
  let isCall = false;
  return function (...args) {
    if (!isCall) {
      isCall = true;
      return fn(...args);
    }
    return undefined;
  };
}
```