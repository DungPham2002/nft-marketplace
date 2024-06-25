import axios from "axios";
import { BASE_API_URL } from "@/datas";


export const listOnAuction = async(id, minBid, duration) =>{
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(`${BASE_API_URL}/auction/create-auction/${id}`,
      {price: minBid, duration},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
}

export const makeOffer = async(tokenId, price) => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(`${BASE_API_URL}/auction/bid-auction/${tokenId}`,
        {price},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
}

export const endBid = async(tokenId) => { 
    const response = await axios.post(`${BASE_API_URL}/auction/end-auction/${tokenId}`, {});
    return response.data;
}

export const getTopAuction = async() => {
  const response = await axios.get(`${BASE_API_URL}/auction/top-auction`, {});
  return response.data;
}

export const getFilteredAuction = async({collectionId, filter}) => {
  const response = await axios.get(`${BASE_API_URL}/auction/filter-auction`, {
    params: {
      collectionId,
      filter
    }, 
  });
  return response.data;
}