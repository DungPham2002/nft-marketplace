import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaVideo,
    FaImages,
    FaUserAlt,
  } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
  
  
export const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true);
  
    const openFilter = () => {
      if (!filter) {
        setFilter(true);
      } else {
        setFilter(false);
      }
    };
  
    const openImage = () => {
      if (!image) {
        setImage(true);
      } else {
        setImage(false);
      }
    };
  
    const openVideo = () => {
      if (!video) {
        setVideo(true);
      } else {
        setVideo(false);
      }
    };
  
    return (
      <div className="py-[2rem] px-0">
        <div className="w-[80%] my-0 mx-auto flex items-center justify-between pb-[4rem]">
          <div className="flex gap-[2rem]">
            <button className="outline-none py-[1rem] px-[1.5rem] rounded-[2rem] border-[1px] border-solid border-main-bg transition-all ease-in text-[1.3rem] cursor-pointer bg-main-bg hover:shadow-shadow hover:text-icons-color hover:border-icons-color" onClick={() => {}}>NFTs</button>
            <button className="outline-none py-[1rem] px-[1.5rem] rounded-[2rem] border-[1px] border-solid border-main-bg transition-all ease-in text-[1.3rem] cursor-pointer bg-main-bg hover:shadow-shadow hover:text-icons-color hover:border-icons-color" onClick={() => {}}>Arts</button>
            <button className="outline-none py-[1rem] px-[1.5rem] rounded-[2rem] border-[1px] border-solid border-main-bg transition-all ease-in text-[1.3rem] cursor-pointer bg-main-bg hover:shadow-shadow hover:text-icons-color hover:border-icons-color" onClick={() => {}}>Sports</button>
            <button className="outline-none py-[1rem] px-[1.5rem] rounded-[2rem] border-[1px] border-solid border-main-bg transition-all ease-in text-[1.3rem] cursor-pointer bg-main-bg hover:shadow-shadow hover:text-icons-color hover:border-icons-color" onClick={() => {}}>Photography</button>
          </div>
  
          <div className="{Style.filter_box_right}">
            <div
              className="border-[1px] border-solid border-icons-color py-[1rem] px-[2rem] rounded-[2rem] text-icons-color shadow-shadow cursor-pointer flex items-center- gap-[1rem]"
              onClick={() => openFilter()}
            >
              <FaFilter />
              <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
  
        {filter && (
          <div className="w-[80%] my-0 mx-auto flex py-[2rem] px-0 border-t-[1px] border-t-solid border-t-icons-light">
            <div className="p-[1rem]">
              <div className="py-[0.5rem] px-[1rem] bg-icons-color rounded-[2rem] text-main-bg cursor-pointer flex items-center gap-[0.5rem]">
                <FaWallet /> <span>10 ETH</span>
                <AiFillCloseCircle />
              </div>
            </div>
  
            <div className="p-[1rem]">
              <div
                className="border-[1px] border-solid border-icons-color text-icons-color py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]"
                onClick={() => openImage()}
              >
                <FaImages /> <small>Images</small>
                {image ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>
  
            <div className="p-[1rem]">
              <div
                className="border-[1px] border-solid border-icons-color text-icons-color py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]"
                onClick={() => openVideo()}
              >
                <FaVideo /> <small>Videos</small>
                {video ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>
  
            <div className="p-[1rem]">
              <div className="py-[0.5rem] px-[1rem] bg-icons-color rounded-[2rem] text-main-bg cursor-pointer flex items-center gap-[0.5rem]">
                <FaUserAlt /> <span>Verified</span>
                <MdVerified />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };