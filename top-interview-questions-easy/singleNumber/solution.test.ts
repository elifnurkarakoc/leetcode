import { expect } from 'chai';
import singleNumber from './solution';

describe('singleNumber', () => {
  it('singleNumber()', () => {
    const nums = [2, 2, 1];
    const result = singleNumber(nums);

    expect(result).to.eq(1);
  });
});
