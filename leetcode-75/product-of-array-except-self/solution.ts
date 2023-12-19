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

export default productExceptSelf;
