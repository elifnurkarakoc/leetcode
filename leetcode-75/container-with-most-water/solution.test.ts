import { expect } from 'chai';
import maxArea from './solution';

describe('maxArea', () => {
  it('maxArea()', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
    expect(result).to.eq(49);
  });
});
