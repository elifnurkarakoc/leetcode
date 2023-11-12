import { expect } from 'chai';
import { last } from './solution';

describe('last', () => {
  it('last()', () => {
    const arr = [1,null,2];
    const result = last.call(arr);

    expect(result).to.eql(2)
  });
});
