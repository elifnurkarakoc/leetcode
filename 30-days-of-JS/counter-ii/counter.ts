/**
 * 
 * Question:
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */




/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

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

export default createCounter;
