import { Transaction } from "./Transaction";
import { Clock } from "./Clock";

export default class TransactionHistory {
  private transactions: Transaction[] = [];

  constructor(private clock: Clock) {}

  addDepositTransaction(amount: number): void {
    this.transactions.push({
      amount,
      date: this.clock.getDateAsString(),
    });
  }
  addWithdrawTransaction(amount: number): void {
    this.transactions.push({
      amount: -amount,
      date: this.clock.getDateAsString(),
    });
  }

  getAllTransactions(): Transaction[] {
    return this.transactions;
  }
}
