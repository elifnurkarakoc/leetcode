import { expect } from 'chai';
import moveZeroes from './solution';

describe('moveZeroes', () => {
  it('should move all zeroes to the end of the array', () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).to.deep.equal([1, 3, 12, 0, 0]);
  });

  it('should not modify the original array', () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).to.not.deep.equal([0, 1, 3, 12, 0]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    moveZeroes(arr);
    expect(arr).to.deep.equal([]);
  });

  it('should handle an array with only zeroes', () => {
    const arr = [0, 0, 0];
    moveZeroes(arr);
    expect(arr).to.deep.equal([0, 0, 0]);
  });

  it('should handle an array with only non-zeroes', () => {
    const arr = [1, 2, 3];
    moveZeroes(arr);
    expect(arr).to.deep.equal([1, 2, 3]);
  });
});
