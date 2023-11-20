export const isPalindrome = (x: number): boolean => {
  return parseInt(x.toString().split('').reverse().join('')) === x;
};
