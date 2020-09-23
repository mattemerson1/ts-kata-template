import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = { 1: "I", 5: "V" };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (isUniqueRomanNumeral(arabicNumber)) {
    return romanNumerals[arabicNumber];
  } else if (arabicNumber < 4) {
    return "I".repeat(arabicNumber);
  } else if (arabicNumber == 4) {
    return "IV";
  } else if (arabicNumber > 5) {
    return "V" + "I".repeat(arabicNumber - 5);
  }
};

export const isUniqueRomanNumeral = (arabicNumber: number): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber);
};
