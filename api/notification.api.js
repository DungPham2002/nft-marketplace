import axios from "axios";
import { BASE_API_URL } from "@/datas";

export const updateNotify = async (id) => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.put(
      `${BASE_API_URL}/notification/update-notify/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
};

export const getNotify = async() => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get(
      `${BASE_API_URL}/notification`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
};