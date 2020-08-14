const fizzbuzz = (inputNumber: number): string => {
  if (isMultipleOf3(inputNumber) && isMultipleOf5(inputNumber)) {
    return "fizzbuzz";
  }
  if (isMultipleOf3(inputNumber)) {
    return "fizz";
  }
  if (isMultipleOf5(inputNumber)) {
    return "buzz";
  }
  return inputNumber.toString();
};

const isMultipleOf3 = (inputNumber: number): boolean => {
  return inputNumber % 3 === 0;
};

const isMultipleOf5 = (inputNumber: number): boolean => {
  return inputNumber % 5 === 0;
};

export default fizzbuzz;
