import axios from "axios";

const secret = import.meta.env.VITE_API_SECRET;

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: secret
    }
});