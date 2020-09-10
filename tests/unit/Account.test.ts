import Account from "../../src/Account";
import TransactionHistory from "../../src/TransactionHistory";
import { Transaction } from "../../src/Transaction";
import Printer from "../../src/Printer";
import { Balance } from "../../src/Balance";

describe("Account", () => {
  it("should store a deposit in a transactionHistory", () => {
    // Arrange
    const mockAddDepositTransaction = jest.fn();
    const mockTransactionHistory = {
      addDepositTransaction: mockAddDepositTransaction,
    };
    const mockPrinter = {};

    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory,
      (mockPrinter as unknown) as Printer
    );

    // Act
    account.deposit(1000);

    // Assert
    expect(mockAddDepositTransaction).toHaveBeenCalledWith(1000);
  });

  it("should store a withdraw in a transactionHistory", () => {
    // Arrange
    const mockAddWithdrawTransaction = jest.fn();
    const mockTransactionHistory = {
      addWithdrawTransaction: mockAddWithdrawTransaction,
    };
    const mockPrinter = {};
    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory,
      mockPrinter as Printer
    );

    // Act
    account.withdraw(500);

    // Assert
    expect(mockAddWithdrawTransaction).toBeCalledWith(500);
  });

  it("Should handle printing a statement", () => {
    // Arrange
    const allTransactions: Transaction[] = [
      { amount: 100, date: "05/09/2020" },
    ];
    const allTransactionAmounts: Balance[] = [{ amount: 100 }];
    const mockPrintStatement = jest.fn();
    const mockGetAllTransactions = jest.fn().mockReturnValue(allTransactions);
    const mockGetTransactionAmounts = jest
      .fn()
      .mockReturnValue(allTransactionAmounts);

    const mockTransactionHistory = {
      getAllTransactions: mockGetAllTransactions,
      getTransactionAmounts: mockGetTransactionAmounts,
    };
    const mockPrinter = { printStatement: mockPrintStatement };

    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory,
      (mockPrinter as unknown) as Printer
    );

    // Act
    account.printStatement();

    // Assert
    expect(mockPrintStatement).toHaveBeenCalledWith(allTransactions);
  });
});
