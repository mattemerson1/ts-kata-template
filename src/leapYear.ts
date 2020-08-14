const leapYear = (inputYear: number): boolean => {
  return isTypicalLeapYear(inputYear) || isAtypicalLeapYear(inputYear);
};

const isTypicalLeapYear = (inputYear: number): boolean => {
  return inputYear % 4 === 0 && inputYear % 100 !== 0;
};

const isAtypicalLeapYear = (inputYear: number): boolean => {
  return inputYear % 4 === 0 && inputYear % 100 === 0 && inputYear % 400 === 0;
};

export default leapYear;
