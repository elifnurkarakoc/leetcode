type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  // return JSON.stringify(obj).length<=2;
  for (const value in obj) return false;
  return true;
}

export default isEmpty;
