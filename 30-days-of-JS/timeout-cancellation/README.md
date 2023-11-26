## Explanation

The cancellable function allows you to set up a delayed execution of a function, and if you decide you don't want that function to execute anymore, you can call the returned function to cancel the scheduled delay. It's a way to control asynchronous operations with the ability to cancel them before they happen.

```ts
function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => clearTimeout(timeoutId);
}
```