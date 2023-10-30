/**
 * 
 * Question: 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 */

/**
 * 
 * Solution: 
 *
 * In this solution, each item in the array checks the rule. 
 * If the sum of two different items in the array is equal to target. The return of the function is equals their indices. 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


export default twoSum;