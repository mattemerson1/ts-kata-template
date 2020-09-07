import isLeapYear from "../src/leapYear";

describe("When I check if 1996 is a leap year", () => {
  it("should return 'true'", () => {
    expect(isLeapYear(1996)).toBe(true);
  });
});

describe("When I check if 2001 is a leap year", () => {
  it("should return 'false'", () => {
    expect(isLeapYear(2001)).toBe(false);
  });
});

describe("When I check if 2000 is a leap year", () => {
  it("should return 'true'", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
});

describe("When I check if 1900 is a leap year", () => {
  it("should return 'false'", () => {
    expect(isLeapYear(1900)).toBe(false);
  });
});
