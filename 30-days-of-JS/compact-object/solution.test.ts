import { expect } from 'chai';
import compactObject from './solution';

describe('compactObject', () => {
  it('compactObject()', () => {
    expect(
      compactObject({
        a: 1,
        b: 2,
        c: null,
        d: undefined,
        e: false,
        f: 0,
        g: '',
        h: [],
      }),
    ).to.deep.equal({ a: 1, b: 2, h: [] });
  });

  const obj = { a: null, b: [false, 1] };
  expect(compactObject(obj)).to.deep.equal({ b: [1] });
});
