export const sortArrayInNumericalOrder = (numberArray: number[]): number[] => {
  return numberArray.sort((a: number, b: number) => a - b);
};

export const minimumValue = (numberArray: number[]): number => {
  numberArray.sort((a: number, b: number) => a - b);
  return numberArray[0];
};

export const maximumValue = (numberArray: number[]): number => {
  numberArray.sort((a: number, b: number) => a - b);
  return numberArray[numberArray.length - 1];
};
