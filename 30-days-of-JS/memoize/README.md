## Explanation

The purpose of this memoize function is to avoid redundant computations by storing and reusing results for previously seen sets of arguments. The caching mechanism helps to improve the overall performance by reducing redundant calculations.


```ts
function memoize(fn: Fn): Fn {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] === undefined) {
            const value = fn(...args);
            cache[key]=value;

            return value;
        }

        return cache[key];
    }
}
```