export const users = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return state.list.filter((element) => element !== action.payload);
    case "USERS_LIST":
      return { ...state, list: action.payload };
    case "NEW_USER":
      return { ...state, list: [...state.list, action.payload] };
    case "USER_DETAILS":
    case "UPDATE_USER":
    case "CLEAR_DETAILS":
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
