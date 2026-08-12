export type Transaction = {
  apply: (balance: number) => number;
};

export type Wallet = {
  transactions: Transaction[];
  balance: number;
};

export function applyTransactions({ transactions, balance }: Wallet): number {
  let newBalance: number = balance;

  for (const transaction of transactions) {
    try {
      const resultOfTransaction = transaction.apply(newBalance);
      if (!resultOfTransaction && resultOfTransaction < 0) return balance;

      newBalance = resultOfTransaction;
    } catch {
      return balance;
    }
  }

  return newBalance;
}

const wallet2: Wallet = {
  balance: 10,
  transactions: [
    {
      apply: (amount: number) => amount + 10,
    },
    {
      apply: () => {
        throw new Error("Error");
      },
    },
    {
      apply: (amount: number) => amount + 30,
    },
  ],
};

console.log(applyTransactions(wallet2));
