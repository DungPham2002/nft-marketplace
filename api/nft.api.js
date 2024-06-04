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
