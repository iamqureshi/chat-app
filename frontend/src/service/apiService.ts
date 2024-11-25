import axios from "axios";

const BACKEND_URI = "http://localhost:3000/api";
class ApiService {

    async getChats() {
        const res = await axios.get(`${BACKEND_URI}/chats`);
        return res.data
    }
}

export const apiService = new ApiService();
