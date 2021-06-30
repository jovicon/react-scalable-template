export const mapStateToProps = state => {
    const { s3, auth } = state;
    return { s3, auth };
};
    
export const mapDispatchToProps = dispatch => ({
    handleActiveDispatch: async () => {
        await dispatch({ type: "ACTIVE" });
    },
    handleNotActiveDispatch: () => {
        dispatch({ type: "NOT_ACTIVE" });
    },
    handleSignInDispatch: () => {
        dispatch({ type: "AUTH_LOGIN_SUCCESS" });
    },
    handleSignOutDispatch: () => {
        dispatch({ type: "AUTH_LOGOUT_SUCCESS" });
    }
});