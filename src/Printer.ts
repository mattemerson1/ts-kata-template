import { Transaction } from "./Transaction";
import { PrintLine } from "./PrintLine";
import { Balance } from "./Balance";

export default class Printer {
  private balance: Balance[] = [];
  constructor(private printLine: PrintLine) { }
  printStatement(
    transactions: Transaction[],
    transactionAmounts: Balance[]
  ): void {
    transactionAmounts.reduce(
      (accumulator, currentValue, index): Balance => {
        (this.balance[index] = {
          amount: accumulator.amount + currentValue.amount,
        }),
          0;
        return { amount: accumulator.amount + currentValue.amount };
      },
      { amount: 0 }
    );

    this.printLine("Date || Amount || Balance");

    for (let index = transactions.length - 1; index >= 0; index--) {
      this.printLine(
        `${transactions[index].date} || ${transactions[index].amount} || ${this.balance[index].amount}`
      );
    }
  }
}
