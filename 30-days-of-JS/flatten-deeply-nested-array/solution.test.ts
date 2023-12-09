import { expect } from 'chai';
import flat from './solution';

describe('flat', () => {
  it('flat()', () => {
    const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const result1 = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
    const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(flat(array, 1)).to.deep.equal(result1);
    expect(flat(array, 2)).to.deep.equal(result2);
  });
});
