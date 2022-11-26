export const evaluate = (input: string): boolean | void => {
  let evaluatedStatement = [];
  input = formatInput(input);

  const inputArray: string[] = input.split(" ");
  evaluatedStatement = evaluator(inputArray);
  if (input == "NOT TRUE" || input == "FALSE") {
    return false;
  } else if (input == "NOT FALSE" || input == "TRUE") {
    return true;
  } else if (evaluatedStatement[0] == "TRUE") {
    return true;
  } else if (evaluatedStatement[0] == "FALSE") {
    return false;
  }
};

const formatInput = (input: string): string => {
  const formattedInput: string[] = Array.from(input);
  for (let i = 0; i < formattedInput.length; i++) {
    if (formattedInput[i] == "(") {
      formattedInput.splice(i + 1, 0, " ");
      break;
    }
  }
  for (let j = 0; j < formattedInput.length; j++) {
    if (formattedInput[j] == ")") {
      formattedInput.splice(j, 0, " ");
      break;
    }
  }
  return formattedInput.join("");
};

const evaluator = (statementArray: string[]): string[] => {
  const parenthesesEvaluated = evaluateParentheses(statementArray);
  const notEvalulated = evaluateNot(parenthesesEvaluated);
  const andEvaluated = evaluateAnd(notEvalulated);
  const orEvaluated = evaluateOr(andEvaluated);
  if (statementArray.length > 1) {
    evaluator(orEvaluated);
  }
  return orEvaluated;
};

const evaluateParentheses = (statementArray: string[]): string[] => {
  let firstParentheses = 0;
  let secondParentheses = 0;
  for (let i = 0; i < statementArray.length; i++) {
    if (statementArray[i] == "(") {
      firstParentheses = i;
    } else if (statementArray[i] == ")") {
      secondParentheses = i;
      const innerStatement = evaluator(
        statementArray.slice(firstParentheses + 1, secondParentheses)
      );
      statementArray.splice(
        firstParentheses,
        secondParentheses - firstParentheses + 1,
        innerStatement[0]
      );
    }
  }
  return statementArray;
};

const evaluateNot = (statementArray: string[]): string[] => {
  for (let i = 0; i < statementArray.length; i++) {
    if (statementArray[i] == "NOT" && statementArray[i + 1] == "TRUE") {
      statementArray[i] = "FALSE";
      statementArray.splice(i + 1, 1);
    } else if (statementArray[i] == "NOT" && statementArray[i + 1] == "FALSE") {
      statementArray[i] = "TRUE";
      statementArray.splice(i + 1, 1);
    }
  }
  return statementArray;
};

const evaluateAnd = (statementArray: string[]): string[] => {
  for (let i = 0; i < statementArray.length; i++) {
    if (
      statementArray[i] == "AND" &&
      statementArray[i - 1] == "TRUE" &&
      statementArray[i + 1] == "TRUE"
    ) {
      statementArray[i] = "TRUE";
      statementArray.splice(i - 1, 1);
      statementArray.splice(i, 1);
    } else if (
      statementArray[i] == "AND" &&
      (statementArray[i - 1] == "FALSE" || statementArray[i + 1] == "FALSE")
    ) {
      statementArray[i] = "FALSE";
      statementArray.splice(i - 1, 1);
      statementArray.splice(i, 1);
    }
  }
  return statementArray;
};
const evaluateOr = (statementArray: string[]): string[] => {
  for (let i = 0; i < statementArray.length; i++) {
    if (
      statementArray[i] == "OR" &&
      (statementArray[i - 1] == "TRUE" || statementArray[i + 1] == "TRUE")
    ) {
      statementArray[i] = "TRUE";
      statementArray.splice(i - 1, 1);
      statementArray.splice(i, 1);
    } else if (
      statementArray[i] == "OR" &&
      statementArray[i - 1] == "FALSE" &&
      statementArray[i + 1] == "FALSE"
    ) {
      statementArray[i] = "FALSE";
      statementArray.splice(i - 1, 1);
      statementArray.splice(i, 1);
    }
  }
  return statementArray;
};
