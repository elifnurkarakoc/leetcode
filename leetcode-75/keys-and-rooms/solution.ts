function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>();

  function dfs(roomIndex: number) {
    if (visited.has(roomIndex)) {
      return;
    }

    visited.add(roomIndex);

    for (const nextRoom of rooms[roomIndex]) {
      dfs(nextRoom);
    }
  }

  dfs(0);
  return visited.size === rooms.length;
}

export default canVisitAllRooms;
