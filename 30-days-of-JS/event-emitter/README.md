## Explanation

This EventEmitter class allows you to subscribe to events (subscribe), emit events (emit), and unsubscribe from events (unsubscribe). It's a basic implementation that provides a mechanism for decoupling components in an application by allowing them to communicate through events.

```ts
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

  emit(eventName: string, args: unknown[] = []): unknown[] | undefined {
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
```

EventEmitter Class:

- private events: Record<string, Callback[]> = {};: An object property (events) to store a mapping of event names to arrays of callback functions. It uses TypeScript's Record type to specify that the keys are strings, and the values are arrays of Callback functions.

- subscribe(eventName: string, callback: Callback): Subscription: A method for subscribing to an event. It takes an eventName and a callback function, adds the callback to the array of callbacks associated with the event, and returns a Subscription object with an unsubscribe method.

- unsubscribe method: When called, it removes the subscribed callback from the array of callbacks associated with the event.
emit(eventName: string, args: any[] = []): any[] | undefined: A method for emitting (triggering) an event. It takes an eventName and an optional array of args representing the arguments to be passed to the callback functions. It returns an array of results obtained by invoking each callback with the provided arguments.

- If there are no callbacks for the specified event, it returns an empty array.
- If there are callbacks, it invokes each callback with the provided arguments and collects the results in an array.
