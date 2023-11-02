import { expect } from 'chai';
import reduce from './solution';

describe('reduce function', () => {
  it('sum()', () => {
    const nums = [1, 2, 3, 4];
    const init = 0;
    function sum(accum, curr) {
      return accum + curr;
    }

    const result = reduce(nums, sum, init);
    expect(result).to.eql(10);
  });
});
