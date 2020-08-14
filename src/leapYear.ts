const isleapYear = (inputYear: number): boolean => {
  return isMultipleOf4(inputYear);
};

const isMultipleOf4 = (inputYear: number): boolean => {
  return inputYear % 4 === 0;
};

export default isleapYear;
