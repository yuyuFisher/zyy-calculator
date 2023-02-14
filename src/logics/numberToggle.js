const numberToggle = (value) => {
  if (Number(value) === 0) return value;
  if (String(value).startsWith('-')) {
    return String(value).substring(1);
  }
  return `-${value}`;
};

export default numberToggle;
