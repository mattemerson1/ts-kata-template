import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = { 1: "I", 5: "V", 10: "X" };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (isUniqueRomanNumeral(arabicNumber)) {
    return romanNumerals[arabicNumber];
  } else if (arabicNumber.toString().length == 2) {
    return doubleDigitRomanNumeralConverter(arabicNumber);
  } else if (isOneValueBeforeUniqueRomanNumeral(arabicNumber)) {
    return "I" + romanNumerals[arabicNumber + 1];
  } else if (arabicNumber < 4) {
    return "I".repeat(arabicNumber);
  } else if (arabicNumber > 5) {
    return "V" + "I".repeat(arabicNumber - 5);
  }
};

export const doubleDigitRomanNumeralConverter = (
  arabicNumber: number
): string => {
  const romanTenth = getTenthRomanNumeral(arabicNumber);
  const romanUnit = getUnitRomanNumeral(arabicNumber);
  return romanTenth + romanUnit;
};

export const getTenthRomanNumeral = (arabicNumer: number): string => {
  return "X".repeat(Math.floor(arabicNumer / 10));
};

export const getUnitRomanNumeral = (arabicNumber: number): string | void => {
  const arabicNumberString = arabicNumber.toString();
  const arabicUnit = Number(arabicNumberString[arabicNumberString.length - 1]);
  if (arabicUnit < 4) {
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
