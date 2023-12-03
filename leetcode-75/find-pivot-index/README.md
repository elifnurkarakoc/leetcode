## Explanation

The pivotIndex function iterates through the array, maintaining the sum of elements to the left of the current index and checking whether the pivot condition is met at each step. If a pivot is found, the index is returned; otherwise, -1 is returned.

```typescript
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
```