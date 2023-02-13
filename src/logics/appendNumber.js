const appendNumber = (number, appends) => {
  if (appends === '.' && number.includes('.')) {
    return number;
  }

  let appendsNumber = number;

  if (appendsNumber === '0') {
    appendsNumber = '';
  }

  return appendsNumber + appends;
};

export default appendNumber;
