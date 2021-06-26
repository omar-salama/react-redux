import axios from "axios";
const api = "/users";

export const getUsers = async (name) => {
  let response = null;
  try {
    if (!name) {
      response = await axios.get(api);
    } else response = await axios.get(`${api}/name/${name}`);
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
