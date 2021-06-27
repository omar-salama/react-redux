export const users = (state = {}, actions) => {
  switch (actions.type) {
    case "USERS_LIST":
    case "NEW_USER":
    case "USER_DELETED":
      return { ...state, list: actions.payload };
    case "USER_DETAILS":
      return { ...state, details: actions.payload };
    default:
      return state;
  }
};
