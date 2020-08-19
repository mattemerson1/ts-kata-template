import { Transaction } from "./Transaction";
import { Clock } from "./Clock";

export default class TransactionHistory {
  private transactions: Transaction[] = [];

  constructor(private clock: Clock) {}

  addDeposit(amount: number): void {
    this.transactions.push({
      amount,
      date: this.clock.getDateAsString(),
    });
  }
  getAllTransactions(): Transaction[] {
    return this.transactions;
  }
}
