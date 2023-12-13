function moveZeroes(nums: number[]): void {
  const numsWithoutZero = nums.filter(value => value !== 0);
  const numsOnlyZero = nums.filter(value => value === 0);
  nums.length = 0;
  nums.push(...numsWithoutZero, ...numsOnlyZero);
}

export default moveZeroes;
