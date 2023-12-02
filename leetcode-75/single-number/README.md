## Explanation

The singleNumber function calculates the frequency of each number in the array using a Map and then finds the number that appears only once by iterating through the Map entries.

```typescript
function singleNumber(nums: number[]): number {
  const temp = new Map();
  nums.forEach(i => {
    const freq = (temp.get(i) ?? 0) + 1;
    temp.set(i, freq);
  });

  for (const [key, val] of temp) {
    if (val === 1) return key;
  }
}

export default singleNumber;
```