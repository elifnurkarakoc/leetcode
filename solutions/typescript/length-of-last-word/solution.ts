export function lengthOfLastWord(s: string): number {
  const tmpArray = s.trim().split(' ');

  return tmpArray[tmpArray.length - 1].length;
}
