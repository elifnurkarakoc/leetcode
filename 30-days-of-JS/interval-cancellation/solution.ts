type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  const intervalTimer = setInterval(() => fn(...args), t);

  return () => clearInterval(intervalTimer);
}

export default cancellable;
