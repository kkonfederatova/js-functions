const sequenceSum = (begin, end) => {
  // Visualize Execution: https://goo.gl/UlTxCs
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;
