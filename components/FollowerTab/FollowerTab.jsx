import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import { FollowerTabCard } from "./FollowerTabCard/FollowerTabCard";
import images from "@/images";


export const FollowerTab = () => {
  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground10,
      user: images.user10,
    }
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    }
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className="w-full py-[6rem] relative pb-[13rem] items-center mx-auto">
        <div className="w-[40rem] my-0 mx-auto pb-[6rem] text-center">
            <h2 className="text-[3rem] font-semibold mb-[4rem]"> Top Creators List..</h2>
            <div className="{Style.followerTab_tabs}">
                <div className="flex bg-main-bg py-[0.5rem] px-[1rem] rounded-[4rem] justify-around gap-[1rem] items-center text-[1.2rem] shadow-shadow">
                    <button className="p-[1rem] bg-icons-color text-main-bg border-[1px] border-solid border-icons-color rounded-[4rem] cursor-pointer transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex" onClick={() => openPopular()}>
                        <RiUserFollowFill className="mr-[0.2rem]"/> Popular
                    </button>
                    <button className="p-[1rem] bg-icons-color text-main-bg border-[1px] border-solid border-icons-color rounded-[4rem] cursor-pointer transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex" onClick={() => openFollower()}>
                        <RiUserFollowFill className="mr-[0.2rem]"/> Following
                    </button>
                    <button className="p-[1rem] bg-icons-color text-main-bg border-[1px] border-solid border-icons-color rounded-[4rem] cursor-pointer transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex" onClick={() => openNews()}>
                        <RiAwardLine className="mr-[0.2rem]"/> NoteWorthy
                    </button>
                </div>
            </div>
        </div>

      {popular && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className="text-center">
        <div className="my-0 mx-auto pt-[7rem] items-center">
          <a className="text-icons-color bg-[transparent] transition-all ease-in hover:bg-icons-color hover:text-main-bg mx-[1.5rem] py-[1rem] px-[2rem] rounded-[2rem] border-[1px] border-solid border-icons-color shadow-shadow text-[1.3rem]" href="#">Show me more</a>
          <a className="hover:bg-icons-color hover:text-main-bg bg-icons-color mx-[1.5rem] py-[1rem] px-[2rem] text-main-bg rounded-[2rem] border-[1px] border-solid border-icons-color shadow-shadow text-[1.3rem]" href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};