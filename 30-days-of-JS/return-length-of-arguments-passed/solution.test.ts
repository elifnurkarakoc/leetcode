import { expect } from 'chai';
import argumentsLength from './solution';

describe('argumentsLength', () => {
  it('argumentsLength()', () => {
    const result = argumentsLength(1, 2, 3);
    expect(result).to.eql(3);
  });
});
