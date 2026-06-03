export function uniq(arr: { id: number; name: string }[]) {
  const uniqueIds = new Set<number>();

  return arr.filter((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    return false;
  });
}
