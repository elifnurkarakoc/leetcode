## Explanation

The productExceptSelf method calculates the product of all elements in an input array nums except the element at the current index. It utilizes three arrays: `prefixProducts` and `suffixProducts` store the product of elements to the left and right of each element, respectively, and `result` holds the final result. The code iterates through nums twice, computing `prefix` and `suffix` products. It then combines these products in a third loop to determine the overall product for each element. This approach ensures an O(n) time complexity, meeting the requirement without using division operations.

```ts
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  let prefixProduct = 1;
  let suffixProduct = 1;

  const prefixProducts: number[] = new Array(n).fill(1);
  const suffixProducts: number[] = new Array(n).fill(1);
  const result: number[] = new Array(n);

  for (let i = 1; i < n; i++) {
    prefixProduct *= nums[i - 1];
    prefixProducts[i] = prefixProduct;
  }

  for (let i = n - 2; i >= 0; i--) {
    suffixProduct *= nums[i + 1];
    suffixProducts[i] = suffixProduct;
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefixProducts[i] * suffixProducts[i];
  }

  return result;
}
```
