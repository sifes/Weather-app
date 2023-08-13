import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(config=> {
    config.url += `&appid=${process.env.REACT_APP_API_KEY}`
    config.url += `&${process.env.REACT_APP_API_METRIC}`
    return config
})
