import { expect } from 'chai';
import twoSum from './twoSum';

describe('twoSum', function () {
  it('twoSum', function () {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).deep.eq([0, 1]);
  });

  it('twoSum', function () {
    const result = twoSum([3, 2, 4], 6);
    expect(result).deep.eq([1, 2]);
  });

  it('twoSum', function () {
    const result = twoSum([3, 3], 6);
    expect(result).deep.eq([0, 1]);
  });
});
