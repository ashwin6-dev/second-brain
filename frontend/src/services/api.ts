import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000", // update with your backend URL
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
