import { romanNumeralConverter } from "../src/RomanNumerals";

describe("", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
  ])(
    `convert arabic numeral $a into roman numeral $expected`,
    (a, expected) => {
      // Arrange
      // Act
      // Assert
      expect(romanNumeralConverter(a)).toBe(expected);
    }
  );
});
