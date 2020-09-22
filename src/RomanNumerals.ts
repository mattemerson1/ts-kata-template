export const romanNumeralConverter = (arabicNumber: number): string => {
  if (arabicNumber < 4) {
    return "I".repeat(arabicNumber);
  } else {
    return "IV";
  }
};
