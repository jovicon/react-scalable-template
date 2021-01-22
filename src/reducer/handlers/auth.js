export const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};
  
export const mapDispatchToProps = dispatch => ({
  handleSignIn: () => {
      dispatch({ type: "AUTH_LOGIN_SUCCESS" });
  },
  handleSignOut: () => {
      dispatch({ type: "AUTH_LOGOUT_SUCCESS" });
  }
});