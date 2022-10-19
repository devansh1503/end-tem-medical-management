import axios from "axios";

const url = 'http://localhost:3333'
export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`http://localhost:3333/users/${id}`);
}