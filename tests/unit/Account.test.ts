import Account from "../../src/Account";
import TransactionHistory from "../../src/TransactionHistory";

describe("Account", () => {
  it("should store a deposit in a transactionHistory", () => {
    // Arrange
    const mockAddDepositTransaction = jest.fn();
    const mockTransactionHistory = {
      addDepositTransaction: mockAddDepositTransaction,
    };
    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory
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
    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory
    );

    // Act
    account.withdraw(500);

    // Assert
    expect(mockAddWithdrawTransaction).toBeCalledWith(500);
  });
});
