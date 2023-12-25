## Explanation

The increasingTriplet function uses two variables to keep track of the two smallest numbers encountered so far. If it finds a third number greater than both of these, it concludes that there is an increasing triplet in the array and returns true. Otherwise, it returns false after iterating through the entire array.

```ts
function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }

  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (const currentNumber of nums) {
    if (currentNumber <= firstNumber) {
      firstNumber = currentNumber;
    } else if (currentNumber <= secondNumber) {
      secondNumber = currentNumber;
    } else {
      return true;
    }
  }
  return false;
}
```
