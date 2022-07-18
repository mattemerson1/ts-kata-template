import {
  romanNumeralConverter,
  isSingularRomanNumeral,
  getTenthRomanNumeral,
  getUnitRomanNumeral,
  doubleDigitRomanNumeralConverter,
  tripleDigitRomanNumeralConverter,
  quadDigitRomanNumeralConverter,
  isOneValueBeforeUniqueRomanNumeral,
} from "../../src/RomanNumerals";

describe("", () => {
  //   it.each([
  //     [1, "I"],
  //     [2, "II"],
  //     [3, "III"],
  //     [4, "IV"],
  //     [5, "V"],
  //     [6, "VI"],
  //     [7, "VII"],
  //     [8, "VIII"],
  //     [9, "IX"],
  //     [10, "X"],
  //     [11, "XI"],
  //     [36, "XXXVI"],
  //   ])(
  //     `convert arabic numeral $a into roman numeral $expected`,
  //     (a, expected) => {
  //       // Arrange
  //       // Act
  //       // Assert
  //       expect(romanNumeralConverter(a)).toBe(expected);
  //     }
  //   );
  it.each([
    [1, true],
    [5, true],
    [4, false],
  ])(
    "Is the arabic numeral equivelent to a unique roman numeral symbol",
    (a, expected) => {
      // Arrange
      // Act
      // Assert
      expect(isSingularRomanNumeral(a)).toBe(expected);
    }
  );
  it.each([
    [15, "X"],
    [36, "XXX"],
    [45, "XL"],
    [52, "L"],
    [73, "LXX"],
    [94, "XC"],
  ])("returns the roman numeral for the tenth of a number", (a, expected) => {
    // Arrange
    // Act
    // Assert
    expect(getTenthRomanNumeral(a)).toBe(expected);
  });
  it.each([
    [45, "V"],
    [14, "IV"],
    [39, "IX"],
    [62, "II"],
    [77, "VII"],
  ])("returns the roman numeral for the unit of a number", (a, expected) => {
    expect(getUnitRomanNumeral(a)).toBe(expected);
  });
  it.each([
    [24, "XXIV"],
    [97, "XCVII"],
    [55, "LV"],
    [44, "XLIV"],
  ])("returns the roman numeral for a double digit number", (a, expected) => {
    expect(doubleDigitRomanNumeralConverter(a)).toBe(expected);
  });
  it.each([
    [4, true],
    [9, true],
    [11, false],
    [2, false],
  ])("returns true if the roman numeral is ", (a, expected) => {
    expect(isOneValueBeforeUniqueRomanNumeral(a)).toBe(expected);
  });
  it.each([
    [4, "IV"],
    [9, "IX"],
    [11, "XI"],
    [99, "XCIX"],
    [49, "XLIX"],
    [36, "XXXVI"],
    [55, "LV"],
    [62, "LXII"],
  ])("returns the roman numeral for a broad selection of numbers", (a, expected) => {
    expect(romanNumeralConverter(a)).toBe(expected);
  });
  it.each([
    [100, "C"],
    [500, "D"],
    [235, "CCXXXV"],
    [761, "DCCLXI"],
    [999, "CMXCIX"],
    [433, "CDXXXIII"],
    [846, "DCCCXLVI"],
  ])("returns the roman numeral for a triple digit number", (a, expected) => {
    expect(tripleDigitRomanNumeralConverter(a)).toBe(expected);
  });
  it.each([
    [1000, "M"],
    [5000, "V^"],
    [4678, "I^V^DCLXXVIII"],
    [9888, "I^X^DCCCLXXXVIII"],
    [6198, "V^MCXCVIII"],
    [2113, "MMCXIII"],
    [1999, "MCMXCIX"],
    [2008, "MMVIII"],
  ])("returns the roman numeral for a quad digit number", (a, expected) => {
    expect(quadDigitRomanNumeralConverter(a)).toBe(expected);
  });
});
