import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M", 5000: "V^" };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (isSingularRomanNumeral(arabicNumber)) {
    return romanNumerals[arabicNumber];
  } else if (arabicNumber.toString().length == 4) {
    return quadDigitRomanNumeralConverter(arabicNumber)
  } else if (arabicNumber.toString().length == 3) {
    return tripleDigitRomanNumeralConverter(arabicNumber);
  } else if (arabicNumber.toString().length == 2) {
    return doubleDigitRomanNumeralConverter(arabicNumber);
  } else if (arabicNumber.toString().length == 1) {
    return getUnitRomanNumeral(arabicNumber);
  }
};

export const quadDigitRomanNumeralConverter = (
  arabicNumber: number
): string => {
  const arabicThousandth = parseInt(arabicNumber.toString()[0] + "000");
  const arabicHundredth = parseInt(arabicNumber.toString()[1] + "00");
  const arabicTenth = parseInt(arabicNumber.toString()[2] + "0");
  const arabicUnit = parseInt(arabicNumber.toString()[3]);
  const romanThousandth = getThousandthRomanNumeral(arabicThousandth);
  const romanHundredth = getHundredthRomanNumeral(arabicHundredth);
  const romanTenth = getTenthRomanNumeral(arabicTenth);
  const romanUnit = getUnitRomanNumeral(arabicUnit);
  return romanThousandth.concat(romanHundredth).concat(romanTenth).concat(romanUnit);
};

export const tripleDigitRomanNumeralConverter = (
  arabicNumber: number
): string => {
  const arabicHundredth = parseInt(arabicNumber.toString()[0] + "00");
  const arabicTenth = parseInt(arabicNumber.toString()[1] + "0");
  const arabicUnit = parseInt(arabicNumber.toString()[2]);
  const romanHundredth = getHundredthRomanNumeral(arabicHundredth);
  const romanTenth = getTenthRomanNumeral(arabicTenth);
  const romanUnit = getUnitRomanNumeral(arabicUnit);
  return romanHundredth.concat(romanTenth).concat(romanUnit);
};

export const doubleDigitRomanNumeralConverter = (
  arabicNumber: number
): string => {
  const romanTenth = getTenthRomanNumeral(arabicNumber);
  const romanUnit = getUnitRomanNumeral(arabicNumber);
  return romanTenth.concat(romanUnit);
};

export const getThousandthRomanNumeral = (arabicThousandth: number): string => {
  const thousandth = Math.floor(arabicThousandth / 1000);
  if (thousandth == 9) {
    return "I^X^";
  } else if (thousandth >= 5) {
    return "V^" + "M".repeat(thousandth - 5);
  } else if (thousandth == 4) {
    return "I^V^";
  } else {
    return "M".repeat(thousandth);
  }
};

export const getHundredthRomanNumeral = (arabicHundreth: number): string => {
  const hundredth = Math.floor(arabicHundreth / 100);
  if (hundredth == 9) {
    return "CM";
  } else if (hundredth >= 5) {
    return "D" + "C".repeat(hundredth - 5);
  } else if (hundredth == 4) {
    return "CD";
  } else {
    return "C".repeat(hundredth);
  }
};

export const getTenthRomanNumeral = (arabicNumber: number): string => {
  const tenths = Math.floor(arabicNumber / 10);
  if (tenths == 9) {
    return "XC";
  } else if (tenths >= 5) {
    return "L" + "X".repeat(tenths - 5);
  } else if (tenths == 4) {
    return "XL";
  } else {
    return "X".repeat(tenths);
  }
};

export const getUnitRomanNumeral = (arabicNumber: number): string => {
  const arabicNumberString = arabicNumber.toString();
  const arabicUnit = Number(arabicNumberString[arabicNumberString.length - 1]);
  if (arabicUnit == 9) {
    return "IX";
  } else if (arabicUnit >= 5) {
    return "V" + "I".repeat(arabicUnit - 5);
  } else if (arabicUnit == 4) {
    return "IV";
  } else {
    return "I".repeat(arabicUnit);
  }
};

export const isSingularRomanNumeral = (arabicNumber: number): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber);
};

export const isOneValueBeforeUniqueRomanNumeral = (
  arabicNumber: number
): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber + 1);
};
