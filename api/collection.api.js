import { BASE_API_URL } from "@/datas"
import axios from "axios"

export const getAllCollection = async() => {
    try {
        const response = await axios.get(`${BASE_API_URL}/nfts/collections`)
        return response.data;
    } catch (error) {
        console.log("Error when fetching collections", error);
    }
}