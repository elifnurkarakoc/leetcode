function reverseWords(s: string): string {
  const array = s
    .trim()
    .split(' ')
    .filter(item => !!item);
  array.reverse();

  return array.join(' ');
}

export default reverseWords;
