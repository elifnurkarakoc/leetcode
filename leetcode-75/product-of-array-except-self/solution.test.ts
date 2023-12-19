import { expect } from 'chai';
import productExceptSelf from './solution';

describe('productExceptSelf', () => {
  it('productExceptSelf', () => {
    const nums = [1, 2, 3, 4];
    const result = productExceptSelf(nums);

    expect(result).to.deep.eq([24, 12, 8, 6]);
  });
});
