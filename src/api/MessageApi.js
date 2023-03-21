import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
});



export const getMessages = async (chatId) => {
    try {
        const res = await API.get(`/messages/${chatId}/`);
        return res;
    } catch (error) {
        console.log(error);
    }
}


export const addMessage = async (message) => {
    try {
        const res = await API.post(`/messages`, message);
        return res;
    } catch (error) {
        console.log(error);
    }
}


