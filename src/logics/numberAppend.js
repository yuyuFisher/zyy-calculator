const numberAppend = (number, appends) => {
  if (appends === '.' && number.includes('.')) {
    return number;
  }

  let appendedNumber = number;

  if (appendedNumber === '0') {
    appendedNumber = '';
  }

  return appendedNumber + appends;
};

export default numberAppend;
