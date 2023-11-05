import { expect } from 'chai';
import addTwoPromises from './solution';

describe('addTwoPromises', async () => {
  it('addTwoPromises()', async () => {
    const result = await addTwoPromises(
      new Promise(resolve => setTimeout(() => resolve(2), 20)),
      new Promise(resolve => setTimeout(() => resolve(5), 60)),
    ).then(res => res);

    expect(result).to.eql(7);
  });
});
