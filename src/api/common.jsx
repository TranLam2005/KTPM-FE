import axios from "axios"
import { CommonError } from "./constants"

const API_URL = import.meta.env.VITE_PUBLIC_API_URL

const InstanceApi = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    },
    validateStatus: () => true
})

export default InstanceApi

InstanceApi.interceptors.response.use(
    (response) => {
        if (response.data && typeof response.data === "object") {
            if (response.data.code === CommonError.INTERNAL_SERVER.code) {
                response.data.message = CommonError.INTERNAL_SERVER.message;
            }
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)