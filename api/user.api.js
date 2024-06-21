import axios from "axios";
import { BASE_API_URL } from "@/datas";


export const getUserByAddress = async(address) => {
    const response = await axios.get(`${BASE_API_URL}/users/profile/${address}`,
    );
    return response.data;
};

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
    }
};


export const updateUserProfile = async(name, email, avatar, description, youtube, facebook, twitter, instagram) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.put(`${BASE_API_URL}/users/my-profile`, {
            name, email, avatar, description, youtube, facebook, twitter, instagram
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

