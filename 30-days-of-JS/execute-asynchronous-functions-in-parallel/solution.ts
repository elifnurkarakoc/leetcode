type Fn<T> = () => Promise<T>;

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

export default promiseAll;
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
