import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = { 1: "I", 5: "V" };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (isEqualToASingleRomanNumeral(arabicNumber)) {
    return romanNumerals[arabicNumber];
  } else if (arabicNumber < 4) {
    return "I".repeat(arabicNumber);
  } else if (arabicNumber == 4) {
    return "IV";
  }
};

export const isEqualToASingleRomanNumeral = (arabicNumber: number): boolean => {
  return romanNumerals.hasOwnProperty(arabicNumber);
};
