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

export default reverseVowels;
