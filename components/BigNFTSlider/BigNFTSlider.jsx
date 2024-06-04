import images from "@/images";
import { useState, useCallback, useEffect } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Image from "next/image";
import { Button } from "../componentsindex";

export const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="my-[8rem]">
      <div className="my-0 mx-auto w-[80%] grid grid-cols-12 items-center">
        <div className="col-start-1 col-end-7 row-start-1 row-end-[-1] bg-main-bg shadow-shadow-1 rounded-[1rem] p-[2rem] z-[1111] h-[90vh]">
          <h2 className="font-bold text-[3rem]">{sliderData[idNumber].title}</h2>
          <div className="grid grid-cols-2 items-center">
            <div className="flex items-center gap-[1rem]">
              <Image
                className="rounded-[50%] h-[50px] w-[50px]"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className="">
                <p className="">Creator</p>
                <h4 className="flex font-bold">
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-[1rem]">
              <AiFillFire
                className="text-[4rem]"
              />

              <div
                className=""
              >
                <p>Collection</p>
                <h4 className="font-bold">{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className="{Style.bigNFTSlider_box_left_bidding}">
            <div className="my-[2rem] py-0 px-[4rem] rounded-[0.5rem] border-[3px] border-solid border-shadow-dark">
              <small className="py-[1rem] px-[2rem] bg-shadow-dark font-semibold rounded-[0.5rem]">Current Bid</small>
              <p className="my-[1rem]">
                {sliderData[idNumber].price} <span></span>
              </p>
            </div>

            <p className="flex items-center gap-[1rem]">
              <MdTimer
                className="text-[2rem]"
              />
              <span>Auction ending in</span>
            </p>

            <div className="flex items-center gap-[3rem] text-center pt-[1rem] px-0 pb-[3rem] border-b-[1px] border-b-solid border-b-shadow-dark">
              <div
                className="{Style.bigNFTSlider_box_left_bidding_box_timer_item}"
              >
                <p className="text-[2rem] font-black ">{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className="{Style.bigNFTSlider_box_left_bidding_box_timer_item}"
              >
                <p className="text-[2rem] font-black ">{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className="{Style.bigNFTSlider_box_left_bidding_box_timer_item}"
              >
                <p className="text-[2rem] font-black ">{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className="{Style.bigNFTSlider_box_left_bidding_box_timer_item}"
              >
                <p className="text-[2rem] font-black ">{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[4rem] py-[2rem]">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className="flex items-center gap-[2rem] text-[2rem] mt-[3rem]">
            <TbArrowBigLeftLines
              className="cursor-pointer transition-all ease-in hover:p-[1rem] hover:bg-shadow-dark hover:rounded-[50%]"
              onClick={() => dec()}
            />
            <TbArrowBigRightLines
              className="cursor-pointer transition-all ease-in hover:p-[1rem] hover:bg-shadow-dark hover:rounded-[50%]"
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className="col-start-6 col-end-[-1] row-start-1 row-end-[-1] p-[1rem] bg-main-bg rounded-[2.5rem] shadow-shadow-1">
          <div className="relative">
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className="rounded-[2rem]"
            />

            <div className="absolute top-[3rem] right-[3rem] flex items-center gap-[1rem] text-[1.2rem] bg-icons-color text-shadow-dark py-[0.5rem] px-[1rem] rounded-[5rem]">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};