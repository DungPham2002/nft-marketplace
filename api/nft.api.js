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
  collectionId,
  url
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
      tokenURI: url
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
  const response = await axios.post(
    `${BASE_API_URL}/nfts/nft-like-count/${userId}/${tokenId}`,
    {}
  );
  return response.data;
};

export const getListNftLiked = async (address) => {
  const response = await axios.get(
    `${BASE_API_URL}/nfts/liked-list/${address}`
  );
  return response.data;
};

export const getListSoldNft = async (address) => {
  const response = await axios.get(`${BASE_API_URL}/nfts/sell-list/${address}`);
  return response.data;
};

export const getListOwnerNft = async (address) => {
  const response = await axios.get(`${BASE_API_URL}/nfts/own-list/${address}`);
  return response.data;
};


export const getTopNft = async () => {
  const response = await axios.get(`${BASE_API_URL}/nfts/top-nft`);
  return response.data;
};

export const getFilteredNft = async({collectionId, filter}) => {
  const response = await axios.get(`${BASE_API_URL}/nfts/filter-nft`, {
    params: {
      collectionId,
      filter
    }, 
  });
  return response.data;
}