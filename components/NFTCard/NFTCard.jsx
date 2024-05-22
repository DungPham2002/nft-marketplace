import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import images from "@/images";

export const NFTCard = () => {
  const featureArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3
  ];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="w-[80%] my-0 mx-auto grid grid-cols-3 gap-[3rem] mb-[10rem]">
      {featureArray.map((el, i) => (
        <div className="p-[1rem] bg-shadow-light rounded-[1rem] grid grid-cols-4 grid-rows-4 cursor-pointer transition-all ease-in hover:shadow-shadow-1 group" key={i + 1}>
          <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] overflow-hidden rounded-[1rem]">
            <img
              src={el}
              alt="NFT images"
              width={600}
              height={600}
              className="group-hover:rounded-[1rem] group-hover:scale-[1.05]"
            />
          </div>

          <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-2] z-[1111] flex items-start justify-between overflow-hidden">
            <div className="m-[1rem] bg-icons-color text-main-bg rounded-[2rem] py-[0.5rem] px-[1rem]">
              <div
                className="flex items-center text-[1.2rem] gap-[0.5rem]"
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className="text-[red]"
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className="py-[0.2rem] px-[5rem] bg-shadow-light text-center rounded-bl-[1rem] mr-[-2rem] skew-x-45 transform">
              <div className="bg-shadow-light -skew-x-45">
                <small>Remaining time</small>
                <p className="text-[1.2rem] font-semibold">3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className="col-start-1 col-end-[-1] row-start-3 row-end-[-1] items-end grid grid-cols-[1.5fr,1fr] overflow-hidden">
            <div className="ml-[-3rem] pb-[0.5rem] bg-shadow-light skew-x-45 rounded-tr-[1rem]">
              <div className="pl-[4rem] -skew-x-45">
                <h4 className="text-[1.3rem] font-bold my-[0.2rem]">Clone #17373</h4>

                <div className="flex justify-between items-end">
                  <div
                    className="rounded-[0.3rem] px-[0.5rem] pb-[0.2rem] border-[1px] border-solid border-icons-color items-center"
                  >
                    <small className="p-[0.5rem] py-[0.5rem] rounded-[0.2rem] text-main-bg bg-icons-color">Current Bid</small>
                    <p className="pt-[0.5rem] pl-0 pr-0 pb-0 font-semibold">1.000ETH</p>
                  </div>
                  <div
                    className="{Style.NFTCard_box_update_details_price_box_stock}"
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[1.5rem] my-[1.5rem] ml-[6rem] text-icons-color z-[11111]">
              <BsImages className=""/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};