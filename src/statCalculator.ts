import { Stats } from "./stats";

export const sortArrayInNumericalOrder = (numberArray: number[]): number[] => {
  return numberArray.sort((a: number, b: number) => a - b);
};

export const minimum_value = (sortedArray: number[]): number => {
  return sortedArray[0];
};

export const maximum_value = (sortedArray: number[]): number => {
  return sortedArray[sortedArray.length - 1];
};

export const numberOfElements = (numberArray: number[]): number => {
  return numberArray.length;
};

export const arrAverage = (numberArray: number[]): number => {
  const sumOfAllNumbers = numberArray.reduce((a, b) => a + b);
  return Number((sumOfAllNumbers / numberArray.length).toFixed(6));
};

export const calculateStats = (numberArray: number[]): Stats => {
  const sortedArray = sortArrayInNumericalOrder(numberArray);
  const min_value = minimum_value(sortedArray);
  const max_value = maximum_value(sortedArray);
  const number_of_elements = numberOfElements(sortedArray);
  const average = arrAverage(sortedArray);
  return {
    minimum_value: min_value,
    maximum_value: max_value,
    number_of_elements: number_of_elements,
    average: average,
  };
};

