import { expect } from 'chai';
import { groupBy } from './solution';

describe('groupBy', () => {
  it('groupBy()', () => {
    const array = [{ id: '1' }, { id: '1' }, { id: '2' }];
    const fn = function (item) {
      return item.id;
    };

    const result = groupBy.call(array, fn);

    const output = {
      '1': [{ id: '1' }, { id: '1' }],
      '2': [{ id: '2' }],
    };

    expect(result).to.eql(output);
  });
});
