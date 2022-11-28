const NOT = "NOT";
const AND = "AND";
const TRUE = "TRUE";
const FALSE = "FALSE";
const OPEN = "(";
const CLOSE = ")";

const toWord = (boolean: boolean): string => (boolean ? TRUE : FALSE);
const toBoolean = (word: string): boolean => word === TRUE;

const simplifyLastBracket = (expression: string[]): string[] => {
  const lastIndexOfOpen = expression.lastIndexOf(OPEN);
  const nextIndexOfClose = expression.indexOf(CLOSE, lastIndexOfOpen);

  return [
    ...expression.slice(0, lastIndexOfOpen),
    simplify(expression.slice(lastIndexOfOpen + 1, nextIndexOfClose)),
    ...expression.slice(nextIndexOfClose + 1),
  ];
};

const simplifyLastNot = (expression: string[]): string[] => {
  const lastIndexOfNot = expression.lastIndexOf(NOT);

  return [
    ...expression.slice(0, lastIndexOfNot),
    toWord(!toBoolean(expression[lastIndexOfNot + 1])),
    ...expression.slice(lastIndexOfNot + 2),
  ];
};

const simplifyFirstAnd = (expression: string[]): string[] => {
  const indexOfAnd = expression.indexOf(AND);

  return [
    ...expression.slice(0, indexOfAnd - 1),
    toWord(toBoolean(expression[indexOfAnd - 1]) && toBoolean(expression[indexOfAnd + 1])),
    ...expression.slice(indexOfAnd + 2),
  ];
};

const simplify = (expression: string[]): string => {
  let simplified = expression;

  while (simplified.includes(OPEN)) simplified = simplifyLastBracket(simplified);
  while (simplified.includes(NOT)) simplified = simplifyLastNot(simplified);
  while (simplified.includes(AND)) simplified = simplifyFirstAnd(simplified);

  return toWord(simplified.some(toBoolean));
};

export const evaluate = (expression: string): boolean => {
  const formatted = expression.replace(/\(/g, "( ").replace(/\)/g, " )").split(" ");

  return toBoolean(simplify(formatted));
};
