import axios from "axios";
const api = '/users';
export const getAllUsers = async () => {
    let response = null;
    try {
        response = await axios.get(api)
    } catch (error) {
        console.log(error)
    }
    return {
        type: 'USERS_LIST',
        payload: response.data
    }
}