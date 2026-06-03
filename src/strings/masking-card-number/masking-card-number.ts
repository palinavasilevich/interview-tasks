export function maskingCardNumber(cardNumber: string): string {
  return cardNumber.slice(-4).padStart(cardNumber.length, "#");
}
