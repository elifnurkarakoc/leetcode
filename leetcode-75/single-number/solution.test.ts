import { expect } from 'chai';
import singleNumber from './solution';

describe('singleNumber', () => {
  it('singleNumber()', () => {
    const nums = [2, 2, 1];
    const returnValue = singleNumber(nums);

    expect(returnValue).to.eq(1);
  });
});
