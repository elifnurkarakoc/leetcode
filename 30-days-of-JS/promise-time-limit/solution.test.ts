import { expect } from 'chai';
import timeLimit from './solution';

describe('timeLimit', async () => {
  it('timeLimit()', () => {
    const inputs = [5];
    const t = 150;
    const fn = async n => {
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    };

    const limited = timeLimit(fn, t);

    limited(inputs).then(res => {
      expect(res).eql('{ resolved: 25, time: 100 }');
    });
  });
});
