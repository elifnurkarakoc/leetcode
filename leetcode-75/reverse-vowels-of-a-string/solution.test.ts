import { expect } from 'chai';
import reverseVowels from './solution';

describe('reverseVowels', () => {
  it('reverseVowels()', () => {
    const s = 'hello';

    const result = reverseVowels(s);

    expect(result).to.eq('holle');
  });
});
