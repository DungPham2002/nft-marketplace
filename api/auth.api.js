import axios from "axios";
import { BASE_API_URL } from "@/datas";

export const logIn = async (account, signature) => {
    try {
        localStorage.clear();
        const response = await axios.post(`${BASE_API_URL}/auth/login`, {
            address: account,
            signature,
        });
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        return response.data;
        } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
