function countSmileys(arr: string[]): number {
  const eyes = new Set([":", ";"]);
  const nose = new Set(["-", "~"]);
  const mouth = new Set([")", "D"]);

  return arr.reduce((total, str) => {
    const [first, second, third] = str.split("");

    if (
      (str.length !== 2 && str.length !== 3) ||
      !eyes.has(first) ||
      (third && (!nose.has(second) || !mouth.has(third))) ||
      (!third && !mouth.has(second))
    )
      return total;

    return total + 1;
  }, 0);
}

console.log(countSmileys([":-)", ";D", ".(", ")))"])); // 2
