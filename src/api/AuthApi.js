import axios from "axios"

const API = axios.create({ baseURL: 'https://node-js-social-media-backend.vercel.app/' })

export const logIn = async (formData) => {
    try {
        const res = API.post('/auth/login', formData)
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (formData) => {
    try {
        const res = API.post('/auth/register', formData)
        return res;
    } catch (error) {
        console.log(error)
    }
}

