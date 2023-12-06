## Explanation

The purpose of the RecentCounter class is to keep track of the number of ping requests within the last 3 seconds. The ping method is called with the timestamp of each new ping, and it efficiently maintains a record of recent pings within the specified time window.

```typescript
class RecentCounter {
  pings;
  constructor() {
    this.pings = [];
  }

  ping(t: number): number {
    this.pings.push(t);

    while (this.pings[0] < t - 3000) {
      this.pings.shift();
    }

    return this.pings.length
  }
}

export default RecentCounter;
```
