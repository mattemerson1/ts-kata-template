const NOT = "NOT";
const AND = "AND";
const OR = "OR";
const TRUE = "TRUE";
const FALSE = "FALSE";
const OPEN = "(";
const CLOSE = ")";

const toWord = (boolean: boolean): string => (boolean ? TRUE : FALSE);
const toBoolean = (word: string): boolean => word === TRUE;

const simplifyLastBracket = (expression: string[]): string[] => {
  const indexOfLastOpen = expression.lastIndexOf(OPEN);
  const indexOfNextClose = expression.indexOf(CLOSE, indexOfLastOpen);

  return [
    ...expression.slice(0, indexOfLastOpen),
    simplify(expression.slice(indexOfLastOpen + 1, indexOfNextClose)),
    ...expression.slice(indexOfNextClose + 1),
  ];
};

const simplifyFirstNot = (expression: string[]): string[] => {
  const indexOfNot = expression.indexOf(NOT);

  if (expression[indexOfNot + 1] === NOT)
    return [...expression.slice(0, indexOfNot), ...expression.slice(indexOfNot + 2)];

  return [
    ...expression.slice(0, indexOfNot),
    toWord(!toBoolean(expression[indexOfNot + 1])),
    ...expression.slice(indexOfNot + 2),
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

const simplifyFirstOr = (expression: string[]): string[] => {
  const indexOfOr = expression.indexOf(OR);

  return [
    ...expression.slice(0, indexOfOr - 1),
    toWord(toBoolean(expression[indexOfOr - 1]) || toBoolean(expression[indexOfOr + 1])),
    ...expression.slice(indexOfOr + 2),
  ];
};

const simplify = (expression: string[]): string => {
  let simplified = expression;

  while (simplified.includes(OPEN)) simplified = simplifyLastBracket(simplified);
  while (simplified.includes(NOT)) simplified = simplifyFirstNot(simplified);
  while (simplified.includes(AND)) simplified = simplifyFirstAnd(simplified);
  while (simplified.includes(OR)) simplified = simplifyFirstOr(simplified);

  return simplified[0];
};

export const evaluate = (expression: string): boolean => {
  const formatted = expression.replace(/\(/g, "( ").replace(/\)/g, " )").split(" ");

  return toBoolean(simplify(formatted));
};
