const NOT = "NOT";
const AND = "AND";
const OR = "OR";
const TRUE = "TRUE";
const FALSE = "FALSE";
const OPEN = "(";
const CLOSE = ")";

const findCorrespondingClose = (
  expression: string[],
  start: number
): number => {
  let depth = 1;
  let index = start + 1;

  while (depth > 0) {
    if (expression[index] === OPEN) {
      depth++;
    } else if (expression[index] === CLOSE) {
      depth--;
    }

    index++;
  }

  return index - 1;
};

const simplifyFirstBracket = (expression: string[]): string[] => {
  const indexOfFirstOpen = expression.indexOf(OPEN);

  const indexOfCorrespondingClose = findCorrespondingClose(
    expression,
    indexOfFirstOpen
  );

  const evaluated = simplify(
    expression.slice(indexOfFirstOpen + 1, indexOfCorrespondingClose)
  );

  return [
    ...expression.slice(0, indexOfFirstOpen),
    evaluated[0],
    ...expression.slice(indexOfCorrespondingClose + 1),
  ];
};

const simplifyFirstNot = (expression: string[]): string[] => {
  const indexOfFirstNot = expression.indexOf(NOT);

  let toNegate = false;

  let i = indexOfFirstNot;

  while (expression[i] === NOT) {
    toNegate = !toNegate;
    i++;
  }

  const nextWord = expression[i] === TRUE;

  const evaluated = toNegate ? !nextWord : nextWord;

  return [
    ...expression.slice(0, indexOfFirstNot),
    evaluated ? TRUE : FALSE,
    ...expression.slice(i + 1),
  ];
};

const simplifyFirstAnd = (expression: string[]): string[] => {
  const indexOfFirstAnd = expression.indexOf(AND);

  const isTrue =
    expression[indexOfFirstAnd - 1] === TRUE &&
    expression[indexOfFirstAnd + 1] === TRUE;

  return [
    ...expression.slice(0, indexOfFirstAnd - 1),
    isTrue ? TRUE : FALSE,
    ...expression.slice(indexOfFirstAnd + 2),
  ];
};

const simplifyFirstOr = (expression: string[]): string[] => {
  const indexOfFirstAnd = expression.indexOf(OR);

  const isTrue =
    expression[indexOfFirstAnd - 1] === TRUE ||
    expression[indexOfFirstAnd + 1] === TRUE;

  return [
    ...expression.slice(0, indexOfFirstAnd - 1),
    isTrue ? TRUE : FALSE,
    ...expression.slice(indexOfFirstAnd + 2),
  ];
};

const simplify = (expression: string[]): string[] => {
  if (expression.includes(OPEN))
    return simplify(simplifyFirstBracket(expression));

  if (expression.includes(NOT)) return simplify(simplifyFirstNot(expression));

  if (expression.includes(AND)) return simplify(simplifyFirstAnd(expression));

  if (expression.includes(OR)) return simplify(simplifyFirstOr(expression));

  return expression;
};

export const evaluate = (expression: string): boolean => {
  const formatted = expression
    .replace(/\(/g, "( ")
    .replace(/\)/g, " )")
    .split(" ");

  return simplify(formatted)[0] === TRUE;
};
