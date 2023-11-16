import { expect } from 'chai';
import TimeLimitedCache from './solution';

describe('TimeLimitedCache', () => {
  it('TimeLimitedCache', () => {
    const timeLimitedCache = new TimeLimitedCache();
    const setResult = timeLimitedCache.set(1, 42, 1000); // false
    const getResult = timeLimitedCache.get(1); // 42
    const countResult = timeLimitedCache.count(); // 1

    expect(setResult).to.eq(false);
    expect(getResult).to.eq(42);
    expect(countResult).to.eq(1);
  });
});
