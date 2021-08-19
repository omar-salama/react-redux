export const users = (state = {}, actions) => {
  switch (actions.type) {
    case "DELETE_USER":
      const { list } = state;
      return list.filter((element) => element !== actions.payload);
    case "USERS_LIST":
    case "NEW_USER":
      return { ...state, list: actions.payload };
    case "USER_DETAILS":
    case "UPDATE_USER":
    case "CLEAR_DETAILS":
      return { ...state, details: actions.payload };
    default:
      return state;
  }
};
