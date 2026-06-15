function bingo(ticket: Array<[string, number]>): number {
  return ticket.reduce((result, [str, num]) => {
    const isWin = [...str].some((char) => char.charCodeAt(0) === num);
    return result + (isWin ? 1 : 0);
  }, 0);
}

console.log(
  bingo([
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 89],
  ]),
); // 2
