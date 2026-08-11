type User = {
  id: number;
  name: string;
  age: number;
};

type Friends = [number, number];

export type UserResponse = {
  users: User[];
  friends: Friends[];
};

export function getUserFriends(
  userResponseJSON: string,
  userId: number,
): User[] {
  const { users, friends }: UserResponse = JSON.parse(userResponseJSON);
  const result: User[] = [];

  const addFriend = (currentUserId: number) => {
    const friend = users.find((user) => user.id === currentUserId);
    if (friend) result.push(friend);
  };

  for (const [user1Id, user2Id] of friends) {
    if (user1Id === userId) {
      addFriend(user2Id);
    }

    if (user2Id === userId) {
      addFriend(user1Id);
    }
  }

  return result;
}
