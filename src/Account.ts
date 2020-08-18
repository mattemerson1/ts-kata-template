import AccountService from "./AccountService";

export default class Account implements AccountService {
  deposit(amount: number): void {
    throw new Error("Method not implemented.");
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  printStatement(): void {
    throw new Error("Method not implemented.");
  }
}
