interface Action { 
  payload: any
  type: string
}

const githubReducer = (state: object, action: Action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_PROFILE":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return { ...state, users: [], loading: false };

    default:
      return state;
  }
};

export default githubReducer;
