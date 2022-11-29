export const booleanCalculator = (input: string): boolean => {
  let evaluatedStatement = [];
  const formattedInput = formatInput(input);
  const inputArray: string[] = formattedInput.split(" ");
  evaluatedStatement = evaluator(inputArray);
  return (evaluatedStatement[0] == "TRUE");
};

const formatInput = (input: string): string => {
  const formattedInput = input.replaceAll("(", "( ").replaceAll(")", " )");
  return formattedInput;
};

const evaluator = (statementArray: string[]): string[] => {
  while (statementArray.includes("(")) {
    evaluateParentheses(statementArray);
  }
  while (statementArray.includes("NOT")) {
    evaluateNot(statementArray);
  }
  while (statementArray.includes("AND")) {
    evaluateAnd(statementArray);
  }
  while (statementArray.includes("OR")) {
    evaluateOr(statementArray);
  }
  if (statementArray.length > 1) {
    evaluator(statementArray);
  }
  return statementArray;
};

const evaluateParentheses = (statementArray: string[]): string[] => {
  const firstParentheses = statementArray.indexOf("(");
  const secondParentheses = statementArray.lastIndexOf(")");
  const innerStatement = evaluator(
    statementArray.slice(firstParentheses + 1, secondParentheses)
  );
  statementArray.splice(
    firstParentheses,
    secondParentheses - firstParentheses + 1,
    innerStatement[0]
  );
  return statementArray;
};

const evaluateNot = (statementArray: string[]): string[] => {
  const firstNotindex = statementArray.indexOf("NOT");
  if (statementArray[firstNotindex + 1] == "NOT") {
    statementArray.splice(firstNotindex, 2);
  } else {
    statementArray[firstNotindex + 1] === "TRUE" ? statementArray[firstNotindex] = "FALSE" : statementArray[firstNotindex] = "TRUE"
    statementArray.splice(firstNotindex + 1, 1);
  }
  return statementArray;
};

const evaluateAnd = (statementArray: string[]): string[] => {
  const firstAndIndex = statementArray.indexOf("AND");
  if (
    statementArray[firstAndIndex + 1] == "TRUE" &&
    statementArray[firstAndIndex - 1] == "TRUE"
  ) {
    statementArray.splice(firstAndIndex - 1, 3, "TRUE");
  } else {
    statementArray.splice(firstAndIndex - 1, 3, "FALSE");
  }
  return statementArray;
};

const evaluateOr = (statementArray: string[]): string[] => {
  const firstOrIndex = statementArray.indexOf("OR");
  if (
    statementArray[firstOrIndex + 1] == "FALSE" && 
    statementArray[firstOrIndex - 1] == "FALSE"
  ) {
    statementArray.splice(firstOrIndex - 1, 3, "FALSE");
  } else {
    statementArray.splice(firstOrIndex - 1, 3, "TRUE");
  }
  return statementArray;
};