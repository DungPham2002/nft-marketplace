import axios from "axios";
import { BASE_API_URL } from "@/datas";

export const getUserProfile = async() => {
    try {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const response = await axios.get(`${BASE_API_URL}/users/my-profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
            return response.data;
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};


export const updateUserProfile = async(name, email, avatar, description, website, facebook, twitter, instagram) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.put(`${BASE_API_URL}/users/my-profile`, {
            name, email, avatar, description, website, facebook, twitter, instagram
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response;
        } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};