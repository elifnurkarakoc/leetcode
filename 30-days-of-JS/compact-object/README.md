## Explanation

The compactObject method takes an object (obj) as an argument and returns a new object with "falsy" values removed. The function recursively iterates through the properties of the input object, creating a new object with the same structure but without properties that have falsy values.

```ts
function compactObject(obj: Obj): Obj {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const array = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i]) {
        array.push(compactObject(obj[i] as Obj));
      }
    }

    return array;
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      result[key] = compactObject(value as Obj);
    }
  }
  return result;
}
```
