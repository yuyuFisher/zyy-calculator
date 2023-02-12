const calculate = (a, b, operation) => {
  const numberA = Number(a);
  const numberB = Number(b);

  let ret;
  switch (operation) {
    case '+':
      ret = numberA + numberB;
      break;
    case '-':
      ret = numberA - numberB;
      break;
    case '*':
      ret = numberA * numberB;
      break;
    case '÷':
      ret = numberA / numberB;
      break;
    default:
      break;
  }

  if (Number.isNaN(ret)) {
    return 'N/O';
  }

  return ret.toString();
};

export default calculate;
