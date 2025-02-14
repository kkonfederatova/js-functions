export default (students, key) => {
  const cb = (acc, student) => {
    const groupKey = student[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(student);

  return acc;
  }

  const groupByKey = students.reduce(cb, {});
  return groupByKey;
}
