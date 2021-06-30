export const mapStateToProps = state => {
    const { s3 } = state;
    return { s3 };
};
    
export const mapDispatchToProps = dispatch => ({
    handleActiveDispatch: () => {
        dispatch({ type: "ACTIVE" });
    },
    handleNotActiveDispatch: () => {
        dispatch({ type: "NOT_ACTIVE" });
    }
});