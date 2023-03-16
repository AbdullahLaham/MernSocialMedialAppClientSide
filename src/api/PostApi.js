import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const getTimeLinePosts = async (userId) => {
    try {
        const res = await API.get(`/post/${userId}/timeline`);
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const likePost = async (postId, userId) => {
    try {
        const res = await API.put(`/post/${postId}/like`, {userId});
        return res;
    } catch (error) {
        console.log(error);
    }
}
