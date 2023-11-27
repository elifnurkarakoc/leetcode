## Explanation

This cancellable function is to schedule repeated invocations of a given function with specified arguments at a specified time interval, and it provides a way to cancel this scheduling by returning a cancellation function.

```ts
function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  const intervalTimer = setInterval(() => fn(...args), t);

  return () => clearInterval(intervalTimer);
}
```