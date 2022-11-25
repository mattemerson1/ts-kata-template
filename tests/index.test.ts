import { findPrimeFactorials } from "../src/primeFactorials"

describe("return correct prime factor for single digit prime number", () => {
  it.each([
    [2, [2]],
    [3, [3]],
    [5, [5]],
    [7, [7]],
  ])(`should take a number and return an array of its prime factorials`, (a, expected) => {

    expect(findPrimeFactorials(a)).toStrictEqual(expected);
  });
});

describe("return correct prime factor for single digit number", () => {
  it.each([
    [4, [2, 2]],
    [6, [2, 3]],
    [8, [2, 2, 2]],
    [9, [3, 3]]
  ])(`should take a number and return an array of its prime factorials`, (a, expected) => {

    expect(findPrimeFactorials(a)).toStrictEqual(expected);
  });
});

describe("return correct prime factor for double digit prime numbers", () => {
  it.each([
    [11, [11]],
    [19, [19]],
    [23, [23]],
    [61, [61]],
    [67, [67]],
    [79, [79]]
  ])(`should take a number and return an array of its prime factorials`, (a, expected) => {

    expect(findPrimeFactorials(a)).toStrictEqual(expected);
  });
});

describe("return correct prime factor for double digit numbers", () => {
  it.each([
    [10, [2, 5]],
    [42, [2, 3, 7]],
    [70, [2, 5, 7]],
    [74, [2, 37]],
    [92, [2, 2, 23]],
  ])(`should take a number and return an array of its prime factorials`, (a, expected) => {

    expect(findPrimeFactorials(a)).toStrictEqual(expected);
  });
});
