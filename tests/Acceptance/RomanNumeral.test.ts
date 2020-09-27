import { romanNumeralConverter } from "../../src/RomanNumerals";

describe("", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [36, "XXXVI"],
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
