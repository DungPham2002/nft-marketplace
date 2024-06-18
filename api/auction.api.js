import axios from "axios";
import { BASE_API_URL } from "@/datas";


export const listOnAuction = async(id, minBid, duration) =>{
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(`${BASE_API_URL}/nfts/create-auction/${id}`,
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
    const response = await axios.post(`${BASE_API_URL}/nfts/bid-auction/${tokenId}`,
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
    const response = await axios.post(`${BASE_API_URL}/nfts/end-auction/${tokenId}`, {});
    return response.data;
}