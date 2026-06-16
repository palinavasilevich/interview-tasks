export function getNameInitials(name: string): string {
  const [firstName, lastName] = name.split(" ");

  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
}

export function getNameInitialsV2(name: string): string {
  return name
    .split(" ")
    .map((el) => `${el.slice(0, 1).toUpperCase()}.`)
    .join("");
}
