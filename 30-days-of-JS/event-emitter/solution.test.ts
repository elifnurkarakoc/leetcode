import { expect } from 'chai';
import { EventEmitter } from './solution'; // Adjust the path as needed

describe('EventEmitter', () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should subscribe to an event and emit it', () => {
    let result = 0;

    const subscription = emitter.subscribe('add', (a: number, b: number) => {
      result = a + b;
    });

    emitter.emit('add', 2, 3);

    expect(result).to.equal(5);

    subscription.unsubscribe();
    emitter.emit('add', 4);

    expect(result).to.equal(5);
  });

  it('should handle multiple subscribers for an event', () => {
    let result1 = 0;

    const sub1 = emitter.subscribe('multiply', (a: number, b: number) => {
      result1 = a * b;
    });

    emitter.emit('multiply', 3, 4);

    expect(result1).to.equal(12);

    sub1.unsubscribe();
    emitter.emit('multiply', 5, 6);

    expect(result1).to.equal(12);
  });
});
