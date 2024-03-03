import { expect } from 'chai';
import largestAltitude from './solution';

describe('largestAltitude', () => {
  it('largestAltitude()', () => {
    const gain = [-5, 1, 5, 0, -7];
    const result = largestAltitude(gain);

    expect(result).to.eq(1);
  });
});
