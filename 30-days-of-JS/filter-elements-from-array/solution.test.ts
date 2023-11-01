import { expect } from 'chai';
import filter from './solution';

describe('filter elements from array', function () {
  it('plusOne()', function () {
    const arr = [-2,-1,0,1,2];
    function plusOne(n) {
      return n + 1;
    }

    const result = filter(arr, plusOne);
    expect(result).to.eql([-2,0,1,2]);
  });

  it('greaterThan10()', function () {
    const arr = [0,10,20,30];
    function greaterThan10(n) {
      return n > 10;
    }

    const result = filter(arr, greaterThan10);
    expect(result).to.eql([20,30]);
  });

  it('firstIndex()', function () {
    const arr = [1,2,3];
    function firstIndex(n, i) {
      return i === 0;
    }

    const result = filter(arr, firstIndex);
    expect(result).to.eql([1]);
  });
});
