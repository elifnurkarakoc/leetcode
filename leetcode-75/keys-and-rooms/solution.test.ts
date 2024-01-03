import { expect } from 'chai';
import canVisitAllRooms from './solution';

describe('canVisitAllRooms', () => {
  it('canVisitAllRooms() result is true', () => {
    const rooms = [[1], [2], [3], []];
    expect(canVisitAllRooms(rooms)).to.eq(true);
  });

  it('canVisitAllRooms() result is false', () => {
    const rooms = [[1, 3], [3, 0, 1], [2], [0]];
    expect(canVisitAllRooms(rooms)).to.eq(false);
  });
});
