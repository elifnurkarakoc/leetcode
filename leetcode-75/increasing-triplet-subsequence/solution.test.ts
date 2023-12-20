import { expect } from 'chai';
import increasingTriplet from './solution';

describe('increasingTriplet', () => {
  it('increasingTriplet() result should be true', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = increasingTriplet(nums);

    expect(result).to.eq(true);
  });

  it('increasingTriplet() result should be false', () => {
    const nums = [5, 4, 3, 2, 1];
    const result = increasingTriplet(nums);

    expect(result).to.eq(true);
  });
});
