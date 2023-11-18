declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const obj: Record<string, string[]> = {};
  for (const item of this) {
    const key = fn(item);
    obj[key] ||= [];
    obj[key].push(item);
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

export const groupBy = Array.prototype.groupBy;