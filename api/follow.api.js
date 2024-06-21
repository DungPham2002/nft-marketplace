import { BASE_API_URL } from "@/datas";
import axios from "axios";

export const followUser = async (address) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(
      `${BASE_API_URL}/users/follow-user/${address}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(err);
  }
};

export const unfollowUser = async(address) => {
    try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.delete(
          `${BASE_API_URL}/users/unfollow-user/${address}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
    } catch (error) {
        console.log(err);
    }
}

export const getListFollowing = async(address) => {
  const response = await axios.get(`${BASE_API_URL}/users/following-list/${address}`)
  return response.data;
}

export const getListFollower = async(address) => {
  const response = await axios.get(`${BASE_API_URL}/users/follower-list/${address}`)
  return response.data;
}

export const getFollowUser = async(userId, address) => {
  const response = await axios.post(
    `${BASE_API_URL}/users/get-follow-user/${userId}/${address}`,
    {}
  );
  return response.data;

}

export const getTopFollower = async() => {
  const response = await axios.get(`${BASE_API_URL}/users/top-follower`);
  return response.data;
}
