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
  it("convert arabic numeral 5 into the roman numeral V", () => {
    // Arrange
    // Act
    // Assert
    expect(romanNumeralConverter(5)).toBe("V");
  });
  it.each([
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
  ])(
    `convert arabic numeral $a into the roman numeral $expected`,
    (a, expected) => {
      // Arrange
      // Act
      // Assert
      expect(romanNumeralConverter(a)).toBe(expected);
    }
  );
});
