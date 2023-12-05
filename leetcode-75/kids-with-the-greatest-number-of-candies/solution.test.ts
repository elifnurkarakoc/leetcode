import { expect } from 'chai';
import kidsWithCandies from './solution';

describe('kidsWithCandies', () => {
  it('kidsWithCandies()', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).to.eql([
      true,
      true,
      true,
      false,
      true,
    ]);
  });
});
