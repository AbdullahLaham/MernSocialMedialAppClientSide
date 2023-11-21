import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const uploadImage = async (imageData) => {

    const res = await API.post('/upload', imageData);
    
 }

 export const uploadPost = async (imageData) => {

    const res = await API.post('/post', imageData);
    return res;
 }