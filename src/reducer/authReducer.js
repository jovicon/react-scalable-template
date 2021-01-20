const authReducer = (state, action) => {
    switch (action.type) {
      case 'AUTH_LOGIN_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'AUTH_LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
    //   case 'STORIES_FETCH_FAILURE':
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //     };
    //   case 'REMOVE_STORY':
    //     return {
    //       ...state,
    //       data: state.data.filter(
    //         story => action.payload.objectID !== story.objectID
    //       ),
    //     };
      default:
        throw new Error();
    }
};

export default authReducer;