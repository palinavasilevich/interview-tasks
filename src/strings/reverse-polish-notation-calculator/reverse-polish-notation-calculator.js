export function calc(str) {
  const OPERATIONS = new Set(["+", "-", "*", "/"]);
  const stack = [];

  const symbols = str.split(" ");

  const getResult = ({ a, b, operator }) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  };

  for (const symbol of symbols) {
    const isOperator = OPERATIONS.has(symbol);
    const isNumber = Number.isFinite(Number(symbol));

    if (isOperator && stack.length < 2) {
      return "Error in Syntax";
    }

    if (!isNumber && !isOperator) {
      return "Error in Operands";
    }

    if (isNumber && !isOperator) {
      stack.push(Number(symbol));
    }

    if (isOperator) {
      const secondNumber = stack.pop();
      const firstNumber = stack.pop();

      if (symbol === "/" && secondNumber === 0) return "Division by zero";

      const result = getResult({
        a: firstNumber,
        b: secondNumber,
        operator: symbol,
      });
      stack.push(result);
    }
  }

  if (stack.length !== 1) return "Error in Syntax";

  return stack[0];
}
