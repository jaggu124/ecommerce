import axios from "axios"
 
export const API_BASE_URL = "https://ecommerce-server-production-acb9.up.railway.app"

//export const API_BASE_URL = "http://localhost:5454"
 
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})
 
// Runs before every request, so it always picks up the latest token —
// not just whatever was in localStorage when the app first loaded.
api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
});