import { Stats } from "./stats";

export const minimumValue = (numberArray: number[]): number => {
  return Math.min(...numberArray);
};

export const maximumValue = (numberArray: number[]): number => {
  return Math.max(...numberArray);
};

export const arrLength = (numberArray: number[]): number => {
  return numberArray.length;
};

export const arrAverage = (numberArray: number[]): number => {
  const sumOfAllNumbers = numberArray.reduce((a, b) => a + b);
  return Number((sumOfAllNumbers / numberArray.length).toFixed(6));
};

export const calculateStats = (
  numberArray: number[],
  minimumValue: (n: number[]) => number,
  maximumValue: (n: number[]) => number,
  arrLength: (n: number[]) => number,
  arrAverage: (n: number[]) => number
): Stats => {
  const minValue = minimumValue(numberArray);
  const maxValue = maximumValue(numberArray);
  const numberOfElements = arrLength(numberArray);
  const average = arrAverage(numberArray);
  return {
    minimumValue: minValue,
    maximumValue: maxValue,
    numberOfElements: numberOfElements,
    average: average,
  };
};
