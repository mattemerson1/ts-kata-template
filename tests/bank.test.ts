import { bank } from "../src/bank";

describe("bank", () => {
  it("should bank '1 + 1'", () => {
    expect(bank(1, 1)).toBe(2);
  });
});
