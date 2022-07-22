import { romanNumeralConverter,romanNumeralGenerator,splitNumber } from "../../src/romanNumerals";

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
    [15, "XV"],
    [16, "XVI"],
    [19, "XIX"],
    [20, "XX"],
    [25, "XXV"],
    [29, "XXIX"],
    [99, "XCIX"],

  ])(
    `should convert arabic number $a into roman numeral $expected`, 
    (a, expected) => {
      // Arrange
      // Act
      // Assert
      expect(romanNumeralConverter(a)).toBe(expected);
    }
  );

  it.each([
    [100, [100]],
    [23, [20,3]],
    [123, [100,20,3]],
    [1234, [1000,200,30,4]],
    [9999, [9000,900,90,9]],
    [2008, [2000,8]],
    
  ])(
    `should split arabic number $a into partitions and return all partitions in a number array $expected`,
    (a, expected) => {
      //Arrange
      //Act
      //Assert
      expect(splitNumber(a)).toEqual(expected);
    }
  );

  it.each([
    [[100], "C"],
    [[20,3], "XXIII"],
    [[100, 20 , 3], "CXXIII"],
    [[1000, 200 , 30, 4], "MCCXXXIV"],
    [[2000, 8], "MMVIII"],
    [[1000, 900, 90, 9], "MCMXCIX"],
    [[800, 40, 6], "DCCCXLVI"],
    [[900, 90, 9], "CMXCIX"],
    [[900, 9], "CMIX"],
  ])(
    `should convert array containing arabic number partitions $a into roman numerals $expected`,
    (a, expected) => {
      //Arrange
      //Act
      //Assert
      expect(romanNumeralGenerator(a)).toBe(expected);
    }
  );
});