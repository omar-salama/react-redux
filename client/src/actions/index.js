import axios from "axios";
const api = "/api/user";

export const getUsers = async (name) => {
  let response = null;
  try {
    if (!name) {
      response = await axios.get(api);
    } else response = await axios.get(`${api}/search?name=${name}`);
  } catch (error) {
    console.log(error);
  }
  return {
    type: "USERS_LIST",
    payload: response.data,
  };
};
export const getUserById = async (_id) => {
  let response = null;
  try {
    response = await axios.get(`${api}/${_id}`);
  } catch (error) {
    console.log(error);
  }
  return {
    type: "USER_DETAILS",
    payload: response.data,
  };
};
export const addNewUser = async (user) => {
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
export const deleteUser = async (_id) => {
  let response = null;
  try {
    response = await axios.delete(`${api}/${_id}`);
  } catch (error) {
    console.log(error);
  }
  return {
    type: "DELETE_USER",
    payload: response.data,
  };
};
export const updateUser = async (id, user) => {
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
    payload: null,
  };
}

export const showModal = () => {
  return { type: "showModal", payload: true };
};
export const hideModal = () => {
  return { type: "hideModal", payload: false };
};
