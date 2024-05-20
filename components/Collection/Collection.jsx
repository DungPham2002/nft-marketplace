import { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import { DaysComponent } from "./DaysComponent/DaysComponent";
import images from "@/images";

export const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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
  const followingArray = [
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
  const newsArray = [
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
    <div className="w-full items-center mx-auto py-[3rem] px-0 pb-[10rem]">
        <div className="w-[35rem] my-0 mx-auto pb-[6rem] text-center">
            <h2 className="text-[3rem] mb-[4rem]">Top List Creators</h2>
            <div className="{Style.collection_collections}">
                <div className="bg-main-bg py-[0.5rem] px-[1rem] rounded-[4rem] flex justify-around gap-[1rem] items-center text-[1.2rem] shadow-shadow">
                    <button className="p-[1rem] bg-icons-color text-main-bg rounded-[4rem] cursor-pointer border-[1px] border-solid border-icons-color transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex items-center" onClick={() => openPopular()}>
                        <BsFillAlarmFill className="mr-[0.4rem]"/> 24 hours
                    </button>
                    <button className="p-[1rem] bg-icons-color text-main-bg rounded-[4rem] cursor-pointer border-[1px] border-solid border-icons-color transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex items-center" onClick={() => openFollower()}>
                        <BsCalendar3 className="mr-[0.4rem]"/> 7 days
                    </button>
                    <button className="p-[1rem] bg-icons-color text-main-bg rounded-[4rem] cursor-pointer border-[1px] border-solid border-icons-color transition-all ease-in hover:bg-[transparent] hover:text-icons-color flex items-center" onClick={() => openNews()}>
                        <BsFillCalendarDateFill className="mr-[0.4rem]"/> 30 days
                    </button>
                </div>
            </div>
        </div>
      {popular && (
        <div className="w-[80%] ny-0 mx-auto grid grid-cols-3 gap-[2rem]">
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}

      {following && (
        <div className="w-[80%] ny-0 mx-auto grid grid-cols-3 gap-[2rem]">
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}

      {news && (
        <div className="w-[80%] ny-0 mx-auto grid grid-cols-3 gap-[2rem]">
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
    </div>
  );
};
