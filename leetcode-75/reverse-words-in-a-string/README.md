## Explanation

The `reverseWords` function takes a string as input and returns a new string with the order of words reversed while preserving the spaces between them.

```ts
function reverseWords(s: string): string {
  const array = s
    .trim()
    .split(' ')
    .filter(item => !!item);
  array.reverse();

  return array.join(' ');
}
```

The `reverseWords` function operates in several steps:

- Trimming: The input string s is trimmed to remove any leading or trailing white spaces.

- Splitting: The trimmed string is then split into an array of words using spaces as separators.

- Filtering: Any empty words resulting from consecutive spaces or leading/trailing spaces are filtered out from the array.

- Reversing: The order of the remaining words in the array is reversed.

- Joining: Finally, the reversed array of words is joined back into a string using spaces as separators.
