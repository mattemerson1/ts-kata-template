import { Transaction } from "./Transaction";
import { PrintLine } from "./PrintLine";

export default class Printer {
  constructor(private printLine: PrintLine) { }
  printStatement(transactions: Transaction[]): void {
    this.printLine("Date || Amount || Balance");
    if (transactions.length > 0) {
      this.printLine(
        `${transactions[transactions.length - 1].date} || 
        ${transactions[transactions.length - 1].amount} || 
        ${transactions[transactions.length - 1].amount}`
      );
    }
  }
}

// Need to make a Balance calculator