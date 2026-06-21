type Attempt = {
  name: string;
  score: number;
  date: string;
};

// function parseDate(date: string): number {
//   const [day, month, year] = date.split(".");
//   return Date.parse(`${year}-${month}-${day}`);
// }

const toSortableDate = (date: string) => date.split(".").reverse().join("");

function bestResults(attempts: Attempt[]): Attempt[] {
  const attemptsMap = new Map<string, Attempt>();

  for (const attempt of attempts) {
    const key = attempt.name;

    if (!attemptsMap.has(key)) {
      attemptsMap.set(key, attempt);
    } else {
      const current = attemptsMap.get(key)!;

      if (attempt.score > current.score) {
        attemptsMap.set(key, attempt);
      } else if (attempt.score === current.score) {
        if (toSortableDate(attempt.date) < toSortableDate(current.date)) {
          attemptsMap.set(key, attempt);
        }
      }
    }
  }

  return [...attemptsMap.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function bestResultsV2(attempts: Attempt[]): Attempt[] {
  const best = attempts.reduce<Record<string, Attempt>>((acc, attempt) => {
    const current = acc[attempt.name];

    if (
      !current ||
      attempt.score > current.score ||
      (attempt.score === current.score &&
        toSortableDate(attempt.date) < toSortableDate(current.date))
    ) {
      acc[attempt.name] = attempt;
    }

    return acc;
  }, {});

  return Object.values(best).sort((a, b) => a.name.localeCompare(b.name));
}
