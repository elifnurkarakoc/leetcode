## Explanation

The timeLimit function wraps another function and imposes a time limit on its execution. If the wrapped function takes longer than the specified time limit (t), the Promise returned by timeLimit will be rejected with the message 'Time Limit Exceeded'. Otherwise, it resolves or rejects based on the execution of the wrapped function.

```typescript
function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t);
      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
}
```
