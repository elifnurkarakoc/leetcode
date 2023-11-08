import { expect } from 'chai';
import cancellable from './solution';

describe('cancellable', () => {
  it('cancellable()', () => {
    const result = [];

    const fn = x => x * 5;
    const args = [2];
    const t = 20;
    const cancelT = 50;

    const start = performance.now();

    const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({ time: diff, returned: fn([...argsArr]) });
    };

    const cancel = cancellable(log, [2], 20);

    setTimeout(cancel, cancelT);

    const timer = setTimeout(() => {
      console.log(...result); // [{"time":20,"returned":10}]
    }, 65);

    return () => {
      expect(result).to.eql([{ time: 20, returned: 10 }]);
      clearTimeout(timer);
    };
  });
});
