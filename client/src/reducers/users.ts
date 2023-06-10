import { IUser } from "../types";

type IUsersState = {
  list: IUser[];
  details?: IUser;
};

type Action =
  | {
      type: "DELETE_USER" | "NEW_USER" | "USER_DETAILS" | "UPDATE_USER" | "CLEAR_DETAILS";
      payload: IUser;
    }
  | {
      type: "USERS_LIST";
      payload: IUser[];
    };

const initialState: IUsersState = {
  list: [],
};

export const users = (state = initialState, action: Action) => {
  switch (action.type) {
    case "DELETE_USER":
      return { ...state, list: state.list.filter((element) => element._id !== action.payload._id) };
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
