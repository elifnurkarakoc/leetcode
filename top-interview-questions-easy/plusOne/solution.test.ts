import { expect } from 'chai';
import plusOne from './solution';

describe('plusOne', () => {
  it('plusOne()', () => {
    const digits = [1, 2, 3];
    const result = plusOne(digits);

    expect(result).to.deep.eq([1, 2, 4]);
  });
});
