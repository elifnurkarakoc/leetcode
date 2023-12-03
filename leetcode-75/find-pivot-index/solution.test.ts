import { expect } from 'chai';
import pivotIndex from './solution';

describe('pivotIndex', () => {
  it('pivotIndex()', () => {
    const nums = [1,7,3,6,5,6]
    const result = pivotIndex(nums);

    expect(result).to.eq(3);
  });
});
