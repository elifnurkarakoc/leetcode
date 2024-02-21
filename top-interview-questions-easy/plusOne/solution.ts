function plusOne(digits) {
  let value = '';
  for (const digit of digits) {
    value += digit.toString();
  }

  const result = BigInt(value) + 1n;

  return Array.from(String(result), Number);
}

export default plusOne;
