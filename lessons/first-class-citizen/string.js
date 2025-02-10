const run = (text) => {
  const takeLast = (string, n) => {
    if (string.length < n) {
      return null;
    }
    const arr = string.slice(-n).split('');
    return arr.reverse().join('');
  };

  return takeLast(text, 4);
};

export default run;
  