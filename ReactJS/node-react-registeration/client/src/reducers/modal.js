const initialState = {
  modal: false,
};
export const modal = (state = initialState, actions) => {
  switch (actions.type) {
    case "showModal":
      return { ...state, modal: actions.payload };
    case "hideModal":
      return { ...state, modal: actions.payload };
    default:
      return state;
  }
};
