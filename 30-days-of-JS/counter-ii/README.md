## Explanation

We created three functions in this code: increment(), decrement(), and reset(). Each function has a specific job. The increment() function adds 1 to the current value and displays it. The decrement() function subtracts 1 from the current value and displays it. The reset() function sets the current value back to its original.


```js
function createCounter(init: number): ReturnObj {
  let count = init;
  function increment() {
    return ++count;
  }

  function reset() {
    return (count = init);
  }

  function decrement() {
    return --count;
  }

  return {
    increment,
    decrement,
    reset,
  };
}
```