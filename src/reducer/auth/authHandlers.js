export const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};
  
export const mapDispatchToProps = dispatch => ({
  handleSignInDispatch: () => {
      dispatch({ type: "AUTH_LOGIN_SUCCESS" });
  },
  handleSignOutDispatch: () => {
      dispatch({ type: "AUTH_LOGOUT_SUCCESS" });
  }
});