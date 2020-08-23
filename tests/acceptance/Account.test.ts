import Account from "../../src/Account";
import TransactionHistory from "../../src/TransactionHistory";
import { Clock } from "../../src/Clock";
import Printer from "../../src/Printer";

describe("BankAccount", () => {
  it("should handle deposits, withdrawals and printing statements", () => {
    // Arrange Step
    const mockPrint = jest.fn();
    const mockGetDateAsString = jest
      .fn()
      .mockReturnValueOnce("10/01/2012")
      .mockReturnValueOnce("13/01/2012")
      .mockReturnValueOnce("14/01/2012");

    const clock: Clock = { getDateAsString: mockGetDateAsString };
    const transactionHistory = new TransactionHistory(clock);
    const printer = new Printer();

    const account = new Account(transactionHistory, printer);

    // Act Step
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    account.printStatement();

    // Assert Step
    expect(mockPrint).toHaveBeenNthCalledWith(1, "Date || Amount || Balance");
    expect(mockPrint).toHaveBeenNthCalledWith(2, "14/01/2012 || -500 || 2500");
    expect(mockPrint).toHaveBeenNthCalledWith(3, "13/01/2012 || 2000 || 3000");
    expect(mockPrint).toHaveBeenNthCalledWith(4, "10/01/2012 || 1000 || 1000");
  });
});

// Three parts to every test, first step is arrange, second step is act, third step is assert/expect.
// All in the it part of a 'it'
