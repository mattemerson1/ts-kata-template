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
    ["FALSE || (NOT NOT (NOT (TRUE AND TRUE)))", false],
    ["(TRUE OR TRUE OR TRUE) AND FALSE", false],
    ["TRUE AND NOT NOT NOT TRUE AND TRUE", false],
  ])("%s should be %s", (expression: string, expected: boolean) => {
    expect(evaluate(expression)).toBe(expected);
  });
});
