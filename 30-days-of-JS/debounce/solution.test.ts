import { expect } from 'chai';
import debounce from './solution';

describe('debounce', () => {
  it('debounce()', () => {

let result;
    const start = Date.now();
    function log(...inputs) { 
      result=[Date.now() - start, inputs ];
      console.log(result)
    }
    const dlog = debounce(log, 50);
    setTimeout(() => dlog(1), 50);
    setTimeout(() => dlog(2), 75);
    expect(result).not.to.eq(null)
  });
});
