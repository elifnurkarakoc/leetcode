/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
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
};

export default createCounter;
