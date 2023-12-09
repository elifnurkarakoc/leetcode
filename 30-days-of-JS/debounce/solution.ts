type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

export default debounce;

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
