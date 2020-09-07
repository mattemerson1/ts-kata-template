import TransactionHistory from "../../src/TransactionHistory";
import { Clock } from "../../src/Clock";
import { Transaction } from "../../src/Transaction";
import { Balance } from "../../src/Balance";

describe("TransactionHistory", () => {
  it("should store and retrieve a deposit transaction", () => {
    // Arrange
    const mockGetDateAsString = jest.fn().mockReturnValue("10/01/2012");
    const clock: Clock = { getDateAsString: mockGetDateAsString };

    const transactionHistory: TransactionHistory = new TransactionHistory(
      clock
    );
    const expectedTransactions: Transaction[] = [
      { date: "10/01/2012", amount: 1000 },
    ];

    // Act
    transactionHistory.addDepositTransaction(1000);
    const allTransactions: Transaction[] = transactionHistory.getAllTransactions();

    // Assert
    expect(allTransactions).toEqual(expectedTransactions);
  });
  it("should store and retrieve a withdraw transaction", () => {
    // Arrange
    const mockGetDateAsString = jest.fn().mockReturnValue("14/01/2012");
    const clock: Clock = { getDateAsString: mockGetDateAsString };
    const transactionHistory: TransactionHistory = new TransactionHistory(
      clock
    );
    const expectedTransactions: Transaction[] = [
      { amount: -500, date: "14/01/2012" },
    ];
    // Act
    transactionHistory.addWithdrawTransaction(500);
    const allTransactions: Transaction[] = transactionHistory.getAllTransactions();
    // Assert
    expect(allTransactions).toEqual(expectedTransactions);
  });
  it("should store and retrieve a balance", () => {
    // Arrange
    const mockGetDateAsString = jest.fn().mockReturnValue("14/01/2012");
    const clock: Clock = { getDateAsString: mockGetDateAsString };
    const transactionHistory: TransactionHistory = new TransactionHistory(
      clock
    );
    const expectedTransactionAmounts: Balance[] = [{ amount: -500 }];
    // Act
    transactionHistory.addWithdrawTransaction(500);
    const allTransactionAmounts: Balance[] = transactionHistory.getTransactionAmounts();
    // Assert
    expect(allTransactionAmounts).toEqual(expectedTransactionAmounts);
  });
});
