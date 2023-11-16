
## Explanation

If the length of the input array is zero, the method returns -1. If it isn't zero, the method returns the last element of the array using the [this.length - 1] index.


```js
Array.prototype.last = function () {
  if (this.length === 0) {
      return -1;
  }
  return this[this.length - 1];
};

```