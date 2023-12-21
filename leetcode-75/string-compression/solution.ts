function compress(chars: string[]): number {
  const charsLength = chars.length;

  if (charsLength === 1) {
    return charsLength;
  }

  let index = 0;
  let count = 1;

  for (let i = 1; i <= charsLength; i++) {
    if (i === charsLength || chars[i] !== chars[i - 1]) {
      chars[index++] = chars[i - 1];

      if (count > 1) {
        for (const digit of count.toString()) {
          chars[index++] = digit;
        }
      }

      count = 1;
    } else {
      count++;
    }
  }

  return index;
}

export default compress;
