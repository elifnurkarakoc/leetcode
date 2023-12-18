## Explanation

This function, `once`, takes a function `fn` as an argument and returns a new function that can only be called once; subsequent calls will return `undefined`, effectively ensuring that the original function fn is executed only once.

```ts
function once(fn: (...args: JSONValue[]) => JSONValue): OnceFn {
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
