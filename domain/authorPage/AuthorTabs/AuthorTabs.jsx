import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";


export const AuthorTabs = ({
  setListed,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
  setAuction
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const activeClass = "border-[1px] border-solid border-icons-color !bg-icons-color text-main-bg";
  const buttonClass = "border-[1px] border-solid border-icons-color bg-main-bg text-[1.2rem] rounded-[2rem] py-[0.5rem] px-[1rem] cursor-pointer transition-all aese-in text-icons-color hover:bg-icons-color hover:text-main-bg"

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Listed NFT") {
      setListed(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setAuction(false);
      setActiveBtn(1);
    } else if (btnText == "Own NFT") {
      setListed(false);
      setCreated(true);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setAuction(false);
      setActiveBtn(2);
    } else if (btnText == "Liked") {
      setListed(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(true);
      setAuction(false);
      setActiveBtn(3);
    } else if (btnText == "Following") {
      setListed(false);
      setCreated(false);
      setFollower(false);
      setFollowing(true);
      setLike(false);
      setAuction(false);
      setActiveBtn(4);
    } else if (btnText == "Followers") {
      setListed(false);
      setCreated(false);
      setFollower(true);
      setFollowing(false);
      setLike(false);
      setAuction(false);
      setActiveBtn(5);
    } else if (btnText == "Auction") {
      setListed(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setAuction(true);
      setActiveBtn(6);
    }
  };

  return (
    <div className="w-full mt-[8rem] mb-[3rem] mx-0">
      <div className="w-[80%] my-0 mx-auto flex justify-between">
        <div className="{Style.AuthorTaps_box_left}">
          <div className="flex gap-[2rem] items-center">
            <button
              className={`${activeBtn == 1 ? activeClass : ""} ${buttonClass}`}
              onClick={(e) => openTab(e)}
            >
              Listed NFT
            </button>
            <button
              className={`${activeBtn == 2 ? activeClass : ""} ${buttonClass}`}

              onClick={(e) => openTab(e)}
            >
              Own NFT
            </button>
            <button
              className={`${activeBtn == 3 ? activeClass : ""} ${buttonClass}`}


              onClick={(e) => openTab(e)}
            >
              Liked
            </button>
            <button
              className={`${activeBtn == 4 ? activeClass : ""} ${buttonClass}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? activeClass : ""} ${buttonClass}`}

              onClick={(e) => openTab(e)}
            >
              Followers
            </button>
            <button
              className={`${activeBtn == 6 ? activeClass : ""} ${buttonClass}`}
              onClick={(e) => openTab(e)}
            >
              Auction
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="border-[1px] border-solid border-icons-color rounded-[2rem] w-[17rem] py-[0.5rem] px-[2rem] grid items-center gap-[1rem] cursor-pointer grid-cols-[9fr,1fr]"
            onClick={() => openDropDownList()}
          >
            <p className="text-[1.2rem]">{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className="bg-main-bg p-[1rem] w-[16rem] left-[-3rem] absolute rounded-[1rem] mt-[1.5rem] shadow-shadow z-[111111111]">
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(el)}
                  className="flex items-center justify-between pr-[1rem] py-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[0.2rem]"
                >
                  <p className="transition-all ease-in py-0 px-[1rem] cursor-pointer">{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
