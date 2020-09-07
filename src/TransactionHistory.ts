import { Transaction } from "./Transaction";
import { Balance } from "./Balance";
import { Clock } from "./Clock";

export default class TransactionHistory {
  private transactions: Transaction[] = [];
  private transactionAmounts: Balance[] = [];

  constructor(private clock: Clock) {}

  addDepositTransaction(amount: number): void {
    this.transactions.push({
      amount,
      date: this.clock.getDateAsString(),
    });
    this.updateBalance(amount);
  }
  addWithdrawTransaction(amount: number): void {
    this.transactions.push({
      amount: -amount,
      date: this.clock.getDateAsString(),
    });
    this.updateBalance(-amount);
  }
  updateBalance(amount: number): void {
    this.transactionAmounts.push({ amount });
  }

  getAllTransactions(): Transaction[] {
    return this.transactions;
  }

  getTransactionAmounts(): Balance[] {
    return this.transactionAmounts;
  }
}
