type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

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

export default compactObject;
