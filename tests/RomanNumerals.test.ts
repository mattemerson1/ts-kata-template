import {
  romanNumeralConverter,
  isUniqueRomanNumeral,
} from "../src/RomanNumerals";

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
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
  ])(
    `convert arabic numeral $a into the roman numeral $expected`,
    (a, expected) => {
      // Arrange
      // Act
      // Assert
      expect(romanNumeralConverter(a)).toBe(expected);
    }
  );
  it.each([
    [1, true],
    [5, true],
    [4, false],
  ])(
    "Is the arabic numeral equivelent to a unique roman numeral symbol",
    () => {
      // Arrange
      // Act
      // Assert
      expect(isUniqueRomanNumeral(5)).toBe(true);
    }
  );
});
