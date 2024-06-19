import { BASE_API_URL } from "@/datas";
import axios from "axios";

export const createNft = async (
  image,
  name,
  description,
  website,
  price,
  fileSize,
  royalties,
  collectionId
) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.post(
    `${BASE_API_URL}/nfts/create-nft`,
    {
      image,
      name,
      description,
      website,
      price,
      size: fileSize,
      royalties,
      collectionId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const reSellNft = async (tokenId, formInputPrice) => {
  const token = localStorage.getItem("accessToken");
  const price = formInputPrice;
  const response = await axios.put(
    `${BASE_API_URL}/nfts/resell-nft/${tokenId}/${price}`,
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


export const buyNft = async (address, tokenId) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.put(
    `${BASE_API_URL}/nfts/buy-nft/${address}/${tokenId}`,
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

export const likeNft = async (tokenId) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.post(
    `${BASE_API_URL}/nfts/like-nft/${tokenId}`,
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

export const unLikeNft = async (tokenId) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.delete(
    `${BASE_API_URL}/nfts/unlike-nft/${tokenId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getLikeNft = async (userId, tokenId) => {
  const response = await axios.post(`${BASE_API_URL}/nfts/nft-like-count/${userId}/${tokenId}`, {})
  return response.data;
}