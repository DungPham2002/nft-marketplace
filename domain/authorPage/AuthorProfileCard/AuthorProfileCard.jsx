import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import images from "@/images";
import { Button } from "@/components/componentsindex";
import { getFollowUser, followUser, unfollowUser } from "@/api/follow.api";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

export const AuthorProfileCard = ({ userByAddress }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  const [following, setFollowing] = useState(false);

  const { userProfile } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    const fetchData = async () => {
      if (userProfile) {
        const followStatus = await getFollowUser(userProfile?.id, userByAddress?.user?.address);
        setFollowing(followStatus?.isFollowed);
      }
    };

    fetchData();
  }, [userByAddress]);

  const followMe = async () => {
    try {
      if (following) {
        await unfollowUser(userByAddress.user.address);
        setFollowing(false);
      } else {
        await followUser(userByAddress.user.address);
        setFollowing(true);
      }
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
    }
  };

  //copyAddress function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  return (
    <div className="w-full z-[22222] mt-[5rem]">
      <div className="w-[80%] my-0 mx-auto grid grid-cols-[1fr,4fr,1.3fr] items-center bg-main-bg py-[2.5rem] px-[2rem] rounded-[1rem] shadow-shadow gap-[3rem]">
        <div className="{Style.AuthorProfileCard_box_img}">
          <Image
            src={userByAddress?.user?.avatar || images.nft_image_1}
            className="rounded-[1rem]"
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className="{Style.AuthorProfileCard_box_info}">
          <h2 className="text-[2.5rem] font-bold mt-[-0.5rem] flex items-center">
            {userByAddress?.user?.name || "UnName"}
            {""}{" "}
            <span>
              <MdVerified className="ml-[0.5rem]" />
            </span>{" "}
          </h2>

          <div className="flex items-center">
            <input
              className="w-[38%] outline-none text-[1rem] border-none bg-[transparent] font-bold"
              type="text"
              value={userByAddress?.user?.address}
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className="transition-all ease-in hover:shadow-shadow hover:cursor-pointer hover:text-icons-color ml-[0.2rem]"
            />
          </div>

          <p className="text-[1.1rem] w-[90%] leading-none my-[1rem]">
            {userByAddress?.user?.description}
          </p>

          <div className="flex items-center gap-[1rem] text-[1.5rem]">
            <a
              className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color"
              href={userByAddress?.user?.facebook}
              target="_blank"
            >
              <TiSocialFacebook />
            </a>
            <a
              className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color"
              href={userByAddress?.user?.instagram}
              target="_blank"
            >
              <TiSocialInstagram />
            </a>
            <a
              className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color"
              href={userByAddress?.user?.twitter}
              target="_blank"
            >
              <TiSocialTwitter />
            </a>
            <a
              className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color"
              href={userByAddress?.user?.youtube}
              target="_blank"
            >
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className="flex items-center self-start gap-[2rem] relative">
          {following ? (<Button btnName="UnFollow" handleClick={followMe} />) : (<Button btnName="Follow" handleClick={followMe} />)}

          <MdCloudUpload
            onClick={() => openShare()}
            className="text-[2.5rem] cursor-pointer"
          />

          {share && (
            <div className="absolute p-[0.5rem] w-[15rem] shadow-shadow rounded-[1rem] bg-main-bg left-[2rem] top-[5rem] z-[11111111]">
              <a
                className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]"
                href={userByAddress.user.facebook}
                target="_blank"
              >
                <span className="text-[1.5rem]">
                  <TiSocialFacebook />
                </span>{" "}
                {""}
                Facebook
              </a>
              <a
                className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]"
                href={userByAddress.user.instagram}
                target="_blank"
              >
                <span className="text-[1.5rem]">
                  <TiSocialInstagram />
                </span>{" "}
                {""}
                Instagram
              </a>
              <alert
                className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]"
                href={userByAddress.user.twitter}
                target="_blank"
              >
                <span className="text-[1.5rem]">
                  <TiSocialTwitter />
                </span>{" "}
                {""}
                Twitter
              </alert>
              <a
                className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]"
                href={userByAddress.user.youtube}
                target="_blank"
              >
                <span className="text-[1.5rem]">
                  <TiSocialYoutube />
                </span>{" "}
                {""}
                YouTube
              </a>
            </div>
          )}

          <BsThreeDots onClick={() => openReport()} className="text-[2rem]" />

          {report && (
            <p className="absolute p-[0.5rem] w-[10rem] shadow-shadow rounded-[1rem] bg-main-bg left-[6rem] top-[4rem] z-[11111111] flex items-center">
              <span className="mr-[0.2rem]">
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
