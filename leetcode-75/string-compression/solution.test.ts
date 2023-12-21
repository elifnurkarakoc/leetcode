import { expect } from 'chai';
import compress from './solution';

describe('compress', () => {
  it('compress()', () => {
    const inputs = [
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ];

    const result = compress(inputs);

    expect(result).to.deep.eq(['a', 'b', '1', '2']);
  });
});
