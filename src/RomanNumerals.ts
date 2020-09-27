import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = { 1: "I", 5: "V", 10: "X" };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (isUniqueRomanNumeral(arabicNumber)) {
    return romanNumerals[arabicNumber];
  } else if (arabicNumber.toString().length == 2) {
    return doubleDigitRomanNumeralConverter(arabicNumber);
  } else if (arabicNumber.toString().length == 1) {
    return getUnitRomanNumeral(arabicNumber);
  }
};

export const doubleDigitRomanNumeralConverter = (
  arabicNumber: number
): string => {
  const romanTenth = getTenthRomanNumeral(arabicNumber);
  const romanUnit = getUnitRomanNumeral(arabicNumber);
  return romanTenth.concat(romanUnit);
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

export const isUniqueRomanNumeral = (arabicNumber: number): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber);
};

export const isOneValueBeforeUniqueRomanNumeral = (
  arabicNumber: number
): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber + 1);
};
