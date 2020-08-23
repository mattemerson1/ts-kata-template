import AccountService from "./AccountService";
import TransactionHistory from "./TransactionHistory";

export default class Account implements AccountService {
  constructor(private transactionHistory: TransactionHistory) {}

  deposit(amount: number): void {
    this.transactionHistory.addDepositTransaction(amount);
  }
  withdraw(amount: number): void {
    this.transactionHistory.addWithdrawTransaction(amount);
  }
  printStatement(): void {
    throw new Error("Method not implemented.");
  }
}
