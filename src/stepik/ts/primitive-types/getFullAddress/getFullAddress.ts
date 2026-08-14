/*
Task 9 — Objects with Nested Objects
Create a function that gets the user's full address
*/

export interface Address {
  city: string;
  street: string;
  house: number;
}

export interface UserWithAddress {
  name: string;
  address: Address;
}

export function getFullAddress(user: UserWithAddress): string {
  const address = user.address;
  return `City: ${address.city}, Street: ${address.street}, House: ${address.house}`;
}
