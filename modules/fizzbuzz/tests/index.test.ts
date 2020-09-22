import fizzbuzz from "../src";

describe("fizzbuzz", () => {
  it.each`
    input | expected
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${3}  | ${"fizz"}
    ${6}  | ${"fizz"}
    ${5}  | ${"buzz"}
    ${10} | ${"buzz"}
    ${15} | ${"fizzbuzz"}
    ${30} | ${"fizzbuzz"}
  `("should fizzbuzz $input into '$expected'", ({ input, expected }) => {
    expect(fizzbuzz(input)).toBe(expected);
  });
});
