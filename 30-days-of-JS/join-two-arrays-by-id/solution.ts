interface IObjectProperty {
  [key: string]: JSONValue;
}

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | IObjectProperty;

function join(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const result: unknown = {};

  for (const obj of arr1) {
    result[obj['id']] = obj;
  }

  for (const obj of arr2) {
    if (result[obj['id']]) {
      for (const key in obj as IObjectProperty) {
        result[obj['id']][key] = obj[key];
      }
    } else {
      result[obj['id']] = obj;
    }
  }

  return Object.values(result);
}

export default join;
