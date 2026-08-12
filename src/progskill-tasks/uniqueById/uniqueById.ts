type Item = { id: number; name: string };

export function uniqueById(arr: Item[]) {
  const itemsMap: Map<number, number> = new Map();

  for (const { id } of arr) {
    itemsMap.set(id, (itemsMap.get(id) || 0) + 1);
  }

  return arr.filter((item) => itemsMap.get(item.id) === 1);
}
