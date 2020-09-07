import AccountService from "./AccountService";
import TransactionHistory from "./TransactionHistory";
import Printer from "./Printer";
export default class Account implements AccountService {
  constructor(
    private transactionHistory: TransactionHistory,
    private printer: Printer
  ) {}

  deposit(amount: number): void {
    this.transactionHistory.addDepositTransaction(amount);
  }
  withdraw(amount: number): void {
    this.transactionHistory.addWithdrawTransaction(amount);
  }
  printStatement(): void {
    this.printer.printStatement(
      this.transactionHistory.getAllTransactions(),
      this.transactionHistory.getTransactionAmounts()
    );
  }
}
