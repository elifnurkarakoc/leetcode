## Explanation

The findGCD function is a simple recursive function to find the greatest common divisor of two numbers.

```typescript
function findGCD(a: number, b: number) {
  return b === 0 ? a : findGCD(b, a % b);
}
```


The gcdOfStrings function aims to find the largest common divisor (GCD) of two strings (str1 and str2). It uses the GCD of the lengths of the strings to extract a potential common divisor substring and checks if both strings are divisible by this substring. If so, it returns the substring as the largest common divisor; otherwise, it returns an empty string.

```typescript
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

```