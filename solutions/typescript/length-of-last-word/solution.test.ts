import { expect } from 'chai';
import { lengthOfLastWord } from './solution';

describe('lengthOfLastWord', () => {
  it('lengthOfLastWord()', () => {
    const x = '   fly me   to   the moon  ';
    const result = lengthOfLastWord(x);

    expect(result).to.eq(4);
  });
});
