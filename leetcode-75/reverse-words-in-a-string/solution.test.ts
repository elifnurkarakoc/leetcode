import { expect } from 'chai';
import reverseWords from './solution';

describe('reverseWords', () => {
  it('reverseWords()', () => {
    const result = reverseWords('hello world');
    expect(result).to.eq('world hello');
  });
});
