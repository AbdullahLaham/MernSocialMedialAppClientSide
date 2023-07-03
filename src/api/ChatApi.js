import axios from "axios"

const API = axios.create({ baseURL: 'https://node-js-social-media-backend.vercel.app/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
});


export const userChats = async (userId) => {
    try {
        const res = await API.get(`/chat/${userId}`, {userId});
        return res;
    } catch (error) {
        console.log(error);
    }
}
