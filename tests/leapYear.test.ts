import { leapYear } from "../src/leapYear";

describe("When I check if 1996 is a leap year", () => {
  it("should return 'true'", () => {
    expect(leapYear()).toBe(true);
  });
});
