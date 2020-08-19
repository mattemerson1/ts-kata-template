import TransactionHistory from "../../src/TransactionHistory";
import { Clock } from "../../src/Clock";

describe("TransactionHistory", () => {
  it("should store and retrieve a transaction", () => {
    // Arrange
    const mockGetDateAsString = jest.fn().mockReturnValue("10/01/2012");
    const clock: Clock = { getDateAsString: mockGetDateAsString };

    const transactionHistory = new TransactionHistory(clock);
    const expectedTransactions = [{ date: "10/01/2012", amount: 1000 }];

    // Act
    transactionHistory.addDeposit(1000);
    const allTransactions = transactionHistory.getAllTransactions();

    // Assert
    expect(allTransactions).toEqual(expectedTransactions);
  });
});
