import { expect } from 'chai';
import map from './solution';

describe('createCounter', function () {
  it('plusone()', function () {
    const arr = [1, 2, 3];
    function plusone(n: number) {
      return n + 1;
    }
    const result = map(arr, plusone);
    expect(result).to.eql([2, 3, 4]);
  });

  it('plusI()', function () {
    const arr = [1, 2, 3];
    function plusI(n, i) {
      return n + i;
    }
    const result = map(arr, plusI);
    expect(result).to.eql([1, 3, 5]);
  });

  it('constant()', function () {
    const arr = [10, 20, 30];
    function constant(n, i) {
      return 42;
    }
    const result = map(arr, constant);
    expect(result).to.eql([42, 42, 42]);
  });
});
