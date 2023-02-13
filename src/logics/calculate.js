const calculate = (firstString, secondString, operation) => {
  const firstNumber = Number(firstString);
  const secondNumber = Number(secondString);

  let result;

  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '×':
      result = firstNumber * secondNumber;
      break;
    case '÷':
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  }

  if (Number.isNaN(result)) {
    return 'N/O';
  }

  return result.toString();
};

export default calculate;
