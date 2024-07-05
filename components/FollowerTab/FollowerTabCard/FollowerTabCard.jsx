import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "@/images";
import { getUserByAddress } from "@/api/user.api";
import { getFollowUser, followUser, unfollowUser } from "@/api/follow.api";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import Link from "next/link";

export const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");
  const { userProfile } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserByAddress(el.seller);
      setUserAvatar(user?.user?.avatar);

      if (userProfile) {
        const followStatus = await getFollowUser(userProfile?.id, el.seller);
        setFollowing(followStatus?.isFollowed);
      }
    };

    fetchData();
  }, [el.seller]);

  const followMe = async () => {
    try {
      if (following) {
        await unfollowUser(el.seller);
        setFollowing(false);
      } else {
        await followUser(el.seller);
        setFollowing(true);
      }
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
    }
  };

  return (
    <div className="Style.FollowerTabCard">
      <div className="absolute z-[11111] bg-icons-color text-main-bg m-[1rem] text-[0.8rem] py-[0.1rem] px-[0.5rem] rounded-[2rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:bg-main-bg hover:text-icons-color">
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className="grid grid-cols-4 bg-main-bg rounded-[2rem] transition-all ease-in cursor-pointer relative hover:shadow-shadow">
        <Link href={{ pathname: "/author", query: `${el.seller}` }} className="col-start-1 col-end-[-1]">
          <Image
            className="rounded-[2rem] object-cover h-[188px]"
            src={images.creatorbackground1}
            alt="profile background"
            width={500}
            height={300}
          />
        </Link>

        <div className="col-start-1 col-end-[-1] text-center mt-[-2rem] relative mx-auto top-[-20%] before:absolute before:w-[5rem] before:h-[5rem] before:bg-main-bg before:rounded-[50%] before:top-[2%] before:left-[4%]">
          <Image
            className="rounded-[50%] p-[1rem] z-[222] h-[80px] w-[80px] relative"
            alt="profile picture"
            width={50}
            height={50}
            src={userAvatar || images.user1}
          />
        </div>

        <div className="col-start-1 col-end-[-1] flex items-center justify-between mt-[-1rem] px-[1rem] pb-[1rem]">
          <div className="items-center">
            <h4 className="text-[1rem] font-bold flex">
              {el.seller.slice(0, 9)}
              {""}{" "}
              <span className="ml-[0.2rem] my-auto">
                <MdVerified />
              </span>
            </h4>
            <p>{el.total || 0} ETH</p>
          </div>

          <div className="Style.FollowerTabCard_box_info_following">
            {following ? (
              <a
                className="rounded-[2rem] bg-shadow-dark py-[0.7rem] px-[1.5rem] border-[1px] border-solid border-shadow-dark transition-all ease-in hover:bg-[transparent] flex"
                onClick={followMe}
              >
                Following
              </a>
            ) : (
              <a
                className="rounded-[2rem] bg-shadow-dark py-[0.7rem] px-[1.5rem] border-[1px] border-solid border-shadow-dark transition-all ease-in hover:bg-[transparent] flex"
                onClick={followMe}
              >
                Follow{""}{" "}
                <span className="ml-[0.2rem] my-auto">
                  <TiTick />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
