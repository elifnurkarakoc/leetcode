type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  const tempArray = [];

  if (n === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      tempArray.push(arr[i]);
    } else {
      tempArray.push(...flat(arr[i] as Array<number>, n - 1));
    }
  }

  return tempArray;
};

export default flat;
