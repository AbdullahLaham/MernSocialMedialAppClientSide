import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' })


export const fetchUserData = async (userId) => {
    try {
        console.log('hello')
        const res = API.get(`/user/${userId}`);
        return res;
    } catch (error) {
        console.log(error)
    }
}
