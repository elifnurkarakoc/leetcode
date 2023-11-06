import { expect } from 'chai';
import sleep from './solution';

describe('sleep', () => {
  it('sleep()',async () => {
    const t = Date.now();
    const result= await sleep(100).then(() => Date.now() - t) 
    expect(result).to.not.eql(100);
  });
});