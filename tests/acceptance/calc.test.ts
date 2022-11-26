import { evaluate as craigsEvaluate } from "../../src/craigs";
import { evaluate as mattsEvaluate } from "../../src/matts";

describe.each([[craigsEvaluate], [mattsEvaluate]])("evaluate", (evaluate) => {
  it.each([
    ["TRUE", true],
    ["FALSE", false],
    ["NOT TRUE", false],
    ["TRUE AND FALSE", false],
    ["TRUE AND TRUE", true],
    ["TRUE OR FALSE", true],
    ["FALSE OR FALSE", false],
    ["FALSE OR FALSE OR FALSE AND FALSE", false],
    ["FALSE AND FALSE OR FALSE OR TRUE", true],
    ["TRUE OR FALSE AND NOT FALSE", true],
    ["(TRUE OR TRUE OR TRUE) AND FALSE", false],
    ["NOT (TRUE AND TRUE)", false],
    ["NOT (TRUE AND (TRUE))", false],
  ])("%s should be %s", (expression: string, expected: boolean) => {
    expect(evaluate(expression)).toBe(expected);
  });

  // it("should simplify a NOT", () => {
  //   const expression = "NOT NOT FALSE";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(false);
  // });
  //
  // it("should simplify AND", () => {
  //   const expression = "TRUE AND NOT NOT NOT TRUE AND TRUE";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(false);
  // });
  //
  // it("should simplify brackets", () => {
  //   const expression = "(TRUE)";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(true);
  // });
  //
  // it("should simplify brackets", () => {
  //   const expression = "(FALSE)";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(false);
  // });
  //
  // it("should evaluate the expression", () => {
  //   const expression = "(TRUE OR TRUE OR TRUE) AND FALSE";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(false);
  // });
  //
  // it("should evaluate the expression", () => {
  //   const expression = "FALSE || (NOT NOT (NOT (TRUE AND TRUE)))";
  //
  //   const evaluation = evaluate(expression);
  //
  //   expect(evaluation).toBe(false);
  // });
});

// Three parts to every test, first step is arrange, second step is act, third step is assert/expect.
// All in the it part of a 'it'
