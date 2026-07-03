function getRating(
  meet: Record<string, number>,
  boss: string,
): "Get Out Now!" | "Nice Work Champ!" {
  const people = Object.keys(meet);
  const score = people.reduce(
    (total, person) => total + meet[person] + (person === boss ? meet[person] : 0),
    0,
  );

  return score / people.length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}

console.log(
  getRating(
    {
      katie: 5,
      laura: 3,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura",
  ),
);
// sum = 5 + 3 × 2 + 2 + 3 + 2 + 0 = 18
// average = 18 / 6 <= 5 => 'Get Out Now!'
