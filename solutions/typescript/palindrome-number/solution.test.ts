import { expect } from 'chai';
import { isPalindrome } from './solution';

describe('isPalindrome', () => {
  it('isPalindrome()', () => {
    const x = 121;
    const result = isPalindrome(x);

    expect(result).to.eq(true);
  });
});
