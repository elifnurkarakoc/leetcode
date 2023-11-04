import { expect } from 'chai';
import memoize from './solution';

describe('memoize', () => {
  it('memoize(sum)', () => {
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);
    const result = memoizedSum(2, 2);
    expect(result).to.eql(4)
  });

  it('memoize(factorial)', () => {
    const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
    const memoFactorial = memoize(factorial);
    const result = memoFactorial(2);
    expect(result).to.eql(2)

    const result2 = memoFactorial(3);
    expect(result2).to.eql(6)

    const result3 = memoFactorial(2);
    expect(result3).to.eql(2)
  });
});
