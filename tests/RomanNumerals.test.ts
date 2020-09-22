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
  it("convert arabic numeral 4 into the roman numeral IV", () => {
    // Arrange
    // Act
    // Assert
    expect(romanNumeralConverter(4)).toBe("IV");
  });
});
