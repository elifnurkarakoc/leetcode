import { expect } from 'chai';
import Calculator from './solution';

describe('Calculator', () => {
  it('Calculator()', () => {
    const result = new Calculator(2).multiply(5).power(2).getResult(); // (2 * 5) ^ 2 = 100

    expect(100).to.eq(result);
  });
});
