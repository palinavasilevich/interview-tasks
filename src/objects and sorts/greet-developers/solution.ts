interface Developer {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function greetDevelopers(
  list: Developer[],
): (Developer & { greeting: string })[] {
  return list.map((developer) => {
    const greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    return { ...developer, greeting };
  });
}

const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(greetDevelopers(list1));
