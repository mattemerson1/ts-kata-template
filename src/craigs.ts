const NOT = "NOT";
const AND = "AND";
const OR = "OR";
const TRUE = "TRUE";
const FALSE = "FALSE";
const OPEN = "(";
const CLOSE = ")";

const mapBooleanToWord = (boolean: boolean): string => (boolean ? TRUE : FALSE);

const simplifyLastBracket = (expression: string[]): string[] => {
  const indexOfLastOpen = expression.lastIndexOf(OPEN);
  const indexOfNextClose = expression.indexOf(CLOSE, indexOfLastOpen);

  const simplified = simplify(expression.slice(indexOfLastOpen + 1, indexOfNextClose));

  return [
    ...expression.slice(0, indexOfLastOpen),
    simplified,
    ...expression.slice(indexOfNextClose + 1),
  ];
};

const simplifyFirstNot = (expression: string[]): string[] => {
  const indexOfFirstNot = expression.indexOf(NOT);

  if (expression[indexOfFirstNot + 1] === NOT) {
    return [...expression.slice(0, indexOfFirstNot), ...expression.slice(indexOfFirstNot + 2)];
  }

  return [
    ...expression.slice(0, indexOfFirstNot),
    mapBooleanToWord(expression[indexOfFirstNot + 1] === FALSE),
    ...expression.slice(indexOfFirstNot + 2),
  ];
};

const simplifyFirstAnd = (expression: string[]): string[] => {
  const indexOfFirstAnd = expression.indexOf(AND);

  return [
    ...expression.slice(0, indexOfFirstAnd - 1),
    mapBooleanToWord(
      evaluate(expression[indexOfFirstAnd - 1]) && evaluate(expression[indexOfFirstAnd + 1])
    ),
    ...expression.slice(indexOfFirstAnd + 2),
  ];
};

const simplifyFirstOr = (expression: string[]): string[] => {
  const indexOfFirstOr = expression.indexOf(OR);

  return [
    ...expression.slice(0, indexOfFirstOr - 1),
    mapBooleanToWord(
      evaluate(expression[indexOfFirstOr - 1]) || evaluate(expression[indexOfFirstOr + 1])
    ),
    ...expression.slice(indexOfFirstOr + 2),
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

  return simplify(formatted) === TRUE;
};
