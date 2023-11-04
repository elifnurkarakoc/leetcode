import { expect } from 'chai';
import once from './solution';

describe('once', () => {
  it('once()', () => {
    const fn = (a, b, c) => a + b + c;
    const onceFn = once(fn);

    const result = onceFn(1, 2, 3); // 6
    expect(result).to.eql(6);

    const result2 = onceFn(2, 3, 6);
    expect(result2).to.eql(undefined);
  });
});
