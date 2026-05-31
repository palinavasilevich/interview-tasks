export function orderMapper(users, orders) {
  return orders.map((order) => {
    const user = users.find((user) => user.id === order.userId);
    return { ...order, user };
  });
}

export function orderMapperV2(users, orders) {
  const usersMap = new Map();

  for (const user of users) {
    usersMap.set(user.id, user);
  }

  return orders.map((order) => {
    const user = usersMap.get(order.userId);
    return { ...order, user };
  });
}

export function orderMapperV3(users, orders) {
  const usersMap = new Map(users.map((user) => [user.id, user]));

  return orders.map((order) => {
    return { ...order, user: usersMap.get(order.userId) };
  });
}
