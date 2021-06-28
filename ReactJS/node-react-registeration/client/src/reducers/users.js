export const users = (state = {}, actions) => {
  switch (actions.type) {
    case "USERS_LIST":
    case "NEW_USER":
    case "DELETE_USER":
      return { ...state, list: actions.payload };
      case "USER_DETAILS":
      case "UPDATE_USER":
      case "CLEAR_DETAILS":
      return { ...state, details: actions.payload };
    default:
      return state;
  }
};
