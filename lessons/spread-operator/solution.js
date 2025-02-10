export default (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const [year, month, day] = item;
    const date = new Date(year, month - 1, day);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
};
  