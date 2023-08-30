const stringLength = (string) => {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw new Error('length can not be less than 1 or than 10');
  }
  return length;
};

module.exports = stringLength;
