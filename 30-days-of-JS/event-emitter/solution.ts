export type Callback = (...args: unknown[]) => unknown;
export type Subscription = {
  unsubscribe: () => void;
};

export class EventEmitter {
  private events: Record<string, Callback[]> = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    const unsubscribe = () => {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb !== callback,
      );
    };

    return { unsubscribe };
  }

  emit(eventName: string, ...args: unknown[]): unknown[] | undefined {
    const result = [];
    const callbacks = this.events[eventName] || [];

    if (!callbacks) {
      return [];
    }

    callbacks.map(callback => {
      result.push(callback(...args));
    });

    return result;
  }
}
