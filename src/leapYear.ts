const isLeapYear = (inputYear: number): boolean => {
  return isTypicalLeapYear(inputYear) || isNonTypicalLeapYear(inputYear);
};

const isTypicalLeapYear = (inputYear: number): boolean => {
  return inputYear % 4 === 0 && inputYear % 100 !== 0;
};

const isNonTypicalLeapYear = (inputYear: number): boolean => {
  return inputYear % 400 === 0;
};

export default isLeapYear;
