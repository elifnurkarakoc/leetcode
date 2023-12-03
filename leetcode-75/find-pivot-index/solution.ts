function pivotIndex(nums: number[]): number {
  let leftValuesSum = 0;
  const total = nums.reduce((a, b) => a + b);

  for (let i = 0; i < nums.length; i++) {
    const tmp = total - leftValuesSum - nums[i];
    if (leftValuesSum === tmp) {
      return i;
    }
    leftValuesSum += nums[i];
  }

  return -1;
}

export default pivotIndex;
