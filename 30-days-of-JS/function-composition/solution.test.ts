import { expect } from 'chai';
import compose from './solution';

describe('function composition', () => {
  it('compose()', () => {
    const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    const value = 1;

    const func = compose(functions);
    const result = func(value)
    expect(result).to.eql(1000);
  });
});