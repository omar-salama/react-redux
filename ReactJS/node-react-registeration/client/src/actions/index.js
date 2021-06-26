import axios from "axios";
const api = "/users";

export const getUsers = async (name) => {
  let response = null;
  try {
    if (!name) {
      response = await axios.get(api);
    } else response = await axios.get(`${api}/${name}`);
  } catch (error) {
    console.log(error);
  }
  return {
    type: "USERS_LIST",
    payload: response.data,
  };
};
