/*
Task 1 - Typing Strings and Numbers
Create a function that formats the price based on currency.
*/

export function formatPrice(price: number, currency: string): string {
  switch (currency) {
    case "USD":
      return `$${price}`;
    case "EUR":
      return `€${price}`;
    case "RUB":
      return `${price} ₽`;
    default:
      return `${price} ${currency}`;
  }
}
