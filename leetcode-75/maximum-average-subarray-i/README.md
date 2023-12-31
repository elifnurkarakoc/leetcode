## Explanation

The `findMaxAverage` function finds the maximum average of a subarray of length `k` within the given array nums. The function uses a sliding window approach to efficiently calculate the sum of consecutive subarrays.

```ts
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
```
