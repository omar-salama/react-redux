const initialState = {
  modal: false,
};

type Action = {
  type: "showModal" | "hideModal";
  payload: boolean;
};

export const modal = (state = initialState, actions: Action) => {
  switch (actions.type) {
    case "showModal":
      return { ...state, modal: actions.payload };
    case "hideModal":
      return { ...state, modal: actions.payload };
    default:
      return state;
  }
};
