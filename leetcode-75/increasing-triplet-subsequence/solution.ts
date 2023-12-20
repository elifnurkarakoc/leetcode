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

export default increasingTriplet;
