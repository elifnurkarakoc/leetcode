import { expect } from 'chai';
import createCounter from './counter';

describe('createCounter', function () {
  it('increment()', function () {
    const value = createCounter(5);
    const result = value.increment();
    expect(result).to.eql(6);
  });

  it('reset()', function () {
    const value = createCounter(5);
    const result = value.reset();
    expect(result).to.eql(5);
  });

  it('decrement()', function () {
    const value = createCounter(5);
    const result = value.decrement();
    expect(result).to.eql(4);
  });
});
