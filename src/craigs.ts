const NOT = "NOT";
const AND = "AND";
const OR = "OR";
const TRUE = "TRUE";
const FALSE = "FALSE";

const findCorrespondingClose = (expression: string, start: number): number => {
  let depth = 1;
  let index = start + 1;

  while (depth > 0) {
    const char = expression.charAt(index);
    if (char === "(") {
      depth++;
    } else if (char === ")") {
      depth--;
    }

    index++;
  }

  return index - 1;
};

const simplifyFirstBracket = (expressionArray: string[]): string[] => {
  const expression = expressionArray.join(" ");
  if (!expression.includes("(")) return expression.split(" ");

  const indexOfFirstOpen = expression.indexOf("(");

  const indexOfCorrespondingClose = findCorrespondingClose(
    expression,
    indexOfFirstOpen
  );

  const evaluated = simplify(
    expression
      .substring(indexOfFirstOpen + 1, indexOfCorrespondingClose)
      .split(" ")
  );

  return (
    expression.slice(0, indexOfFirstOpen) +
    evaluated +
    expression.slice(indexOfCorrespondingClose + 1)
  ).split(" ");
};

const simplifyFirstNot = (expression: string[]): string[] => {
  if (!expression.includes(NOT)) return expression;

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
  if (!expression.includes(AND)) return expression;

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
  if (!expression.includes(OR)) return expression;

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
  if (expression.some((word) => word.startsWith("(")))
    return simplify(simplifyFirstBracket(expression));

  if (expression.includes(NOT)) return simplify(simplifyFirstNot(expression));

  if (expression.includes(AND)) return simplify(simplifyFirstAnd(expression));

  if (expression.includes(OR)) return simplify(simplifyFirstOr(expression));

  return expression;
};

export const evaluate = (expression: string): boolean =>
  simplify(expression.split(" "))[0] === TRUE;
