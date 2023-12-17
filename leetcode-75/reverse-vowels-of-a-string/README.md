## Explanation

The reverseVowels method identifies the vowels in the input string, reverses their order, and then replaces the original vowels with the reversed ones, creating a new string with reversed vowels.

```ts
function reverseVowels(s: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  const vowelsIndexes: number[] = [];
  const vowelsChars: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      vowelsIndexes.push(i);
      vowelsChars.push(s[i]);
    }
  }

  vowelsChars.reverse();

  const newValue: string[] = s.split('');
  for (let i = 0; i < vowelsIndexes.length; i++) {
    newValue[vowelsIndexes[i]] = vowelsChars[i];
  }

  return newValue.join('');
}
```
