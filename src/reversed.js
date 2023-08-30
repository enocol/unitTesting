const reversed = (string) => {
  const split = string.split('');
  const reversed = split.reverse();
  const join = reversed.join(' ');

  return join;
};

module.exports = reversed;
