

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  function findGCD(a: number, b: number) {
    return b === 0 ? a : findGCD(b, a % b);
  }

  const gcdLength = findGCD(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}

export default gcdOfStrings;
