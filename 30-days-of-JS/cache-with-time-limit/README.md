## Explanation

```ts
class TimeLimitedCache {
  cache: Map<number, any>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const isExist: boolean = this.cache.has(key);
    if (isExist) {
      clearTimeout(this.cache.get(key).ref);
    }
    this.cache.set(key, {
      value,
      ref: setTimeout(() => {
        this.cache.delete(key);
      }, duration),
    });

    return isExist;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}
```

The class TimeLimitedCache has a property cache of type Map<number, any>, which will store key-value pairs.

The constructor initializes an empty Map when an instance of TimeLimitedCache is created.

The set method is used to add or update an entry in the cache. It takes a key, value, and duration as parameters. The duration parameter represents the time in milliseconds for which the entry will be stored in the cache.

If an entry with the given key already exists, its associated timeout is cleared using clearTimeout.
The new entry is then set in the Map with a reference to a setTimeout function that will delete the entry after the specified duration.
The method returns a boolean indicating whether an entry with the given key already existed before the update (true if it existed, false if it's a new entry).

The get method retrieves the value associated with a given key. If the key is found in the cache, it returns the associated value; otherwise, it returns -1.

The count method returns the number of entries in the cache.
