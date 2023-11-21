import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
});

export const fetchUserData = async (userId) => {
    try {
        console.log('hello')
        const res = API.get(`/user/${userId}`);
        return res;
    } catch (error) {
        console.log(error)
    }
}
export const updateUser = async (userId, userData) => {
    try {
        console.log('hello')
        const res = API.put(`/user/${userId}`, userData);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = async () => {
    try {
        const res = await API.get('/user');
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const followUser = async (userId, followedUserId) => {
    try {
        const res = await API.put(`/user/${followedUserId}/follow`, {userId});
        return res;
    } catch (error) {
        console.log(error)
    }
}


export const unFollowUser = async (userId, followedUserId) => {
    try {
        const res = await API.put(`/user/${followedUserId}/unfollow`, {userId});
        return res;
    } catch (error) {
        console.log(error)
    }
}






