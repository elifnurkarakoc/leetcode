type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: (...args: JSONValue[]) => JSONValue): OnceFn {
  let isCall = false;

  return function (...args) {
    if (!isCall) {
      isCall = true;
      return fn(...args);
    }
    return undefined;
  };
}

export default once;
