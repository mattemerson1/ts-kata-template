import Printer from "../../src/Printer";
import { Transaction } from "../../src/Transaction";
import { Balance } from "../../src/Balance";

describe("Printer", () => {
  it("should print an empty statement", () => {
    // Arrange
    const transactionHeaders = "Date || Amount || Balance";
    const mockPrintLine = jest.fn();
    const printer = new Printer(mockPrintLine);
    const transactions: Transaction[] = [];
    // Act
    printer.printStatement(transactions);

    // Assert
    expect(mockPrintLine).toBeCalledWith(transactionHeaders);
  });
  it("should print a statement with a single transaction", () => {
    // Arrange
    const transactionHeaders = "Date || Amount || Balance";
    const mockPrintLine = jest.fn();
    const printer = new Printer(mockPrintLine);
    const transactions: Transaction[] = [{ amount: 500, date: "10/01/2012" }];
    // Act
    printer.printStatement(transactions);

    // Assert
    expect(mockPrintLine).toHaveBeenNthCalledWith(1, transactionHeaders);
    expect(mockPrintLine).toHaveBeenNthCalledWith(
      2,
      "10/01/2012 || 500 || 500"
    );
  });
  it("should print a statement with multiple transactions", () => {
    // Arrange
    const transactionHeaders = "Date || Amount || Balance";
    const mockPrintLine = jest.fn();
    const printer = new Printer(mockPrintLine);
    const transactions: Transaction[] = [
      { amount: 500, date: "10/01/2012" },
      { amount: -500, date: "11/05/2012" },
    ];
    // Act
    printer.printStatement(transactions);

    // Assert
    expect(mockPrintLine).toHaveBeenNthCalledWith(1, transactionHeaders);
    expect(mockPrintLine).toHaveBeenNthCalledWith(2, "11/05/2012 || -500 || 0");
    expect(mockPrintLine).toHaveBeenNthCalledWith(
      3,
      "10/01/2012 || 500 || 500"
    );
  });
});
