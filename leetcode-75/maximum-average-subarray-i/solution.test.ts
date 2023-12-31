import { expect } from 'chai';

import findMaxAverage from './solution';

describe('findMaxAverage', () => {
  it('findMaxAverage()', () => {
    const nums = [4, 0, 4, 3, 3];
    const k = 5;

    expect(findMaxAverage(nums, k)).to.eq(2.8);
  });
});
