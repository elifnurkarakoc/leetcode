function largestAltitude(gain: number[]): number {
  let current = 0;
  let largest = 0;

  for (let i = 0; i < gain.length; i++) {
    current += gain[i];
    largest = Math.max(largest, current);
  }

  return largest;
}

export default largestAltitude;
