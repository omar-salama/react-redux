import axios from "axios";
import { IUser } from "../types";

const api = "/api/user";
type Users = {
  data: IUser[];
};

export const getUsers = async (name?: string) => {
  try {
    let response: Users;
    if (!name) {
      response = await axios.get(api);
    } else response = await axios.get(`${api}/search?name=${name}`);
    return {
      type: "USERS_LIST",
      payload: response.data,
    };
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (_id: string) => {
  try {
    let response = await axios.get(`${api}/${_id}`);
    return {
      type: "USER_DETAILS",
      payload: response.data,
    };
  } catch (error) {
    console.log(error);
  }
};
export const addNewUser = async (user: FormData) => {
  try {
    let response = await axios.post(api, user);
    return {
      type: "NEW_USER",
      payload: response.data,
    };
  } catch (err) {
    console.log(err);
  }
};
export const deleteUser = async (_id: string) => {
  try {
    let response = await axios.delete(`${api}/${_id}`);
    return {
      type: "DELETE_USER",
      payload: response.data,
    };
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = async (id: string, user: FormData) => {
  try {
    let response = await axios.put(`${api}/${id}`, user);
    if (response.status === 200) {
      return { type: "UPDATE_USER", payload: response.data };
    } else return { type: "UPDATE_USER", payload: [] };
  } catch (err) {
    console.error(err);
  }
};

export function clearDetails() {
  return {
    type: "CLEAR_DETAILS",
    payload: undefined,
  };
}

export const showModal = () => {
  return { type: "showModal", payload: true };
};
export const hideModal = () => {
  return { type: "hideModal", payload: false };
};
