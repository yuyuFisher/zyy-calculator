const appendNumber = (number, appends) => {
  if (appends === '.' && number.includes('.')) {
    return number;
  }

  let n = number;

  if (n === '0') {
    n = '';
  }

  return n + appends;
};

export default appendNumber;
