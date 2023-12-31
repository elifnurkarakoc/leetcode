function findMaxAverage(nums: number[], k: number): number {
  let totalSum = 0;

  for (let i = 0; i < k; i++) {
    totalSum += nums[i];
  }

  let maxAverage = totalSum / k;

  for (let i = k; i < nums.length; i++) {
    totalSum += nums[i] - nums[i - k];
    maxAverage = Math.max(maxAverage, totalSum / k);
  }

  return maxAverage;
}

export default findMaxAverage;
