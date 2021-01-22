const defaultState = {
  data: [],
  isAuthenticated: false,
  isLoading: false,
  isError: false
}

export const auth = (state = defaultState, action) => {
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
          isAuthenticated: true,
          isLoading: false,
          isError: false,
          data: [],
        };
      case 'AUTH_LOGOUT_SUCCESS':
        return {
          ...state,
          isAuthenticated: false,
          isLoading: false,
          isError: false,
          data: [],
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
        return state;
    }
};