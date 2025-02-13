export default (users) => {
  const friendsOfUsers = users.map(({friends})=>friends).flat();
  const femaleFriendsOfUser = friendsOfUsers.filter(({gender}) => gender === 'female');
  return femaleFriendsOfUser;
}
