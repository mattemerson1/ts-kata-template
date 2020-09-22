export const romanNumeralConverter = (arabicNumber: number): string | void => {
  if (arabicNumber < 4) {
    return "I".repeat(arabicNumber);
  }
};
