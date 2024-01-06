function maxArea(height: number[]): number {
  let maxWaterArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const heightValue = Math.min(height[left], height[right]);
    const widthValue = right - left;
    const currentArea = heightValue * widthValue;

    maxWaterArea = Math.max(maxWaterArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWaterArea;
}

export default maxArea;
