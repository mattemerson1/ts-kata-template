import Account from "../../src/Account";
import TransactionHistory from "../../src/TransactionHistory";

describe("Account", () => {
  it("should store a deposit in a transactionHistory", () => {
    // Arrange
    const mockAddDeposit = jest.fn();
    const mockTransactionHistory = { addDeposit: mockAddDeposit };
    const account = new Account(
      (mockTransactionHistory as unknown) as TransactionHistory
    );

    // Act
    account.deposit(1000);

    // Assert
    expect(mockAddDeposit).toHaveBeenCalledWith(1000);
  });
});
