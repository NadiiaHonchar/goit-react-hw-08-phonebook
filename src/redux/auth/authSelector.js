const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
};

export { getIsLoggedIn, getUserName };
export default authSelector;
