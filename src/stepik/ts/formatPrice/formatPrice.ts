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
