import {  romanNumeralConverter } from "../../src/romanNumerals";

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
    [500, "D"],
    [11, "XI"],
    [99, "XCIX"],
    [49, "XLIX"],
    [36, "XXXVI"],
    [55, "LV"],
    [62, "LXII"],
    [235, "CCXXXV"],
    [761, "DCCLXI"],
    [999, "CMXCIX"],
    [433, "CDXXXIII"],
    [846, "DCCCXLVI"],
    // [4678, "I^V^DCLXXVIII"],
    // [9888, "I^X^DCCCLXXXVIII"],
    // [6198, "V^MCXCVIII"],
    [2113, "MMCXIII"],
    [1999, "MCMXCIX"],
    [2008, "MMVIII"],
  ])(
    `should convert arabic number $a into roman numerals `,
     (a, expected) => {
    // Arrange
    // Act
    // Assert
    expect(romanNumeralConverter(a)).toBe(expected);
  });
});
