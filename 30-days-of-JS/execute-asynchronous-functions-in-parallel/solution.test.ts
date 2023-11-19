import { expect } from 'chai';
import promiseAll from './solution';

describe('promiseAll', () => {
  it('promiseAll', async () => {
    const functions = [
      () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    ];

    const result = await promiseAll([...functions]);

    expect(result).to.deep.eq([5]);
  });
});
