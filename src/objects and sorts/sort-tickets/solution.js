function sortTickets(tickets) {
  const toCitiesMap = new Map();
  const fromCitiesMap = new Map();
  let sortedTickets = [];

  for (const ticket of tickets) {
    toCitiesMap.set(ticket.to, ticket);
    fromCitiesMap.set(ticket.from, ticket);
  }

  let currentCity;

  for (const ticket of tickets) {
    if (!toCitiesMap.has(ticket.from)) {
      currentCity = ticket.to;
      sortedTickets.push(ticket);
      toCitiesMap.delete(ticket.to);
      break;
    }
  }

  while (toCitiesMap.size !== 0) {
    const currentTicket = fromCitiesMap.get(currentCity);
    sortedTickets.push(currentTicket);
    currentCity = currentTicket.to;
    toCitiesMap.delete(currentCity);
  }

  return sortedTickets;
}

function sortTicketsV2(tickets) {
  const fromMap = new Map(tickets.map((ticket) => [ticket.from, ticket]));
  const toCities = new Set(tickets.map((ticket) => ticket.to));

  const startTicket = tickets.find((ticket) => !toCities.has(ticket.from));

  const sortedTickets = [startTicket];
  let currentCity = startTicket.to;

  while (sortedTickets.length < tickets.length) {
    const nextTicket = fromMap.get(currentCity);

    sortedTickets.push(nextTicket);
    currentCity = nextTicket.to;
  }

  return sortedTickets;
}

const tickets = [
  { from: "Moscow", to: "SPb" },
  { from: "NY", to: "London" },
  { from: "London", to: "Moscow" },
];

console.log(sortTickets(tickets));
// [
//   { from: "NY", to: "London" },
//   { from: "London", to: "Moscow" },
//   { from: "Moscow", to: "SPb" },
// ];

console.log(sortTicketsV2(tickets));
// same result as sortTickets(tickets)
