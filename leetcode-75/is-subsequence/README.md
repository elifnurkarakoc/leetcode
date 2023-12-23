## Explanation

The `isSubsequence` function uses two pointers, one for each string (s and t). It iterates through each character in s and for each character, it searches for a matching character in t starting from the current position in t. If a match is found, it moves on to the next character in s. If a match is not found before reaching the end of t, the function returns false. If it successfully iterates through all characters in s, it means that s is a subsequence of t, and the function returns true.

```ts
function isSubsequence(s: string, t: string): boolean {
  let tIndex = 0;

  for (const char of s) {
    while (tIndex < t.length && t.charAt(tIndex) !== char) {
      tIndex++;
    }

    if (tIndex === t.length) {
      return false;
    }
    tIndex++;
  }

  return true;
}
```
