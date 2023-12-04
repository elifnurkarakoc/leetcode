import { expect } from 'chai';
import canPlaceFlowers from './solution';

describe('canPlaceFlowers', () => {
  it('canPlaceFlowers()', () => {
    const nums = [1, 0, 0, 0, 1];
    const result = canPlaceFlowers(nums, 2);

    expect(result).to.eq(false);
  });
});
