import { expect } from 'chai';
import isSubsequence from './solution';

describe('isSubsequence', () => {
  it('isSubsequence()', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).to.eq(true);
  });
});
