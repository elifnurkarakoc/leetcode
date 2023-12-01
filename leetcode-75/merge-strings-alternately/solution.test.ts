import { expect } from 'chai';
import { mergeAlternately } from './solution';

describe('mergeAlternately', () => {
  it('mergeAlternately()', () => {
    expect(mergeAlternately('abcd', 'efg')).to.eq('aebfcgd');
  });

  it('mergeAlternately()', () => {
    expect(mergeAlternately('ab', 'efg')).to.eq('aebfg');
  });
});
