function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxValue = Math.max(...candies);
  return candies.map(item => item + extraCandies >= maxValue);
}

export default kidsWithCandies;
