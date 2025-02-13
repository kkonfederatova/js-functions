const getChildren = (users) => {
  const childrenOfUsers = users.map(({ children }) => children);
  return childrenOfUsers.flat();
};

export default getChildren;
