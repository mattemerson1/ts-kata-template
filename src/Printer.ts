import { Transaction } from "./Transaction";
import { PrintLine } from "./PrintLine";

export default class Printer {
  constructor(private printLine: PrintLine) {}
  printStatement(transactions: Transaction[]): void {
    let runningTotal = 0;
    const runningAmounts = transactions.map((transaction) => {
      runningTotal += transaction.amount;
      return runningTotal;
    });
    this.printLine("Date || Amount || Balance");

    for (let index = transactions.length - 1; index >= 0; index--) {
      this.printLine(
        `${transactions[index].date} || ${transactions[index].amount} || ${runningAmounts[index]}`
      );
    }
  }
}
