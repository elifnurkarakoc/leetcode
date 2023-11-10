import { expect } from 'chai';
import isEmpty from './solution';

describe('isEmpty', () => {
  it('isEmpty()', () => {
    const obj = { x: 5, y: 42 };
    const result = isEmpty(obj);

    expect(result).to.eq(false);
  });
});
