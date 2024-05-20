import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import images from "@/images";

export const CollectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className="w-full mt-[8rem]">
      <div className="w-[80%] my-0 mx-auto grid grid-cols-[1fr,3fr] gap-[3rem] items-center bg-main-bg shadow-shadow rounded-[1rem] py-[1rem] px-[2rem]">
        <div className="{Style.collectionProfile_box_left}">
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className="rounded-[1rem]"
          />

          <div className="flex gap-[1rem] text-[1.3rem] items-center justify-center mt-[0.5rem]">
            <a className="transition-all ease-in p-[0.5rem] grid text-main-bg rounded-[50%] border-[1px] border-solid border-icons-color bg-icons-color hover:bg-main-bg hover:text-icons-color hover:shadow-shadow" href="#">
              <TiSocialFacebook />
            </a>
            <a className="transition-all ease-in p-[0.5rem] grid text-main-bg rounded-[50%] border-[1px] border-solid border-icons-color bg-icons-color hover:bg-main-bg hover:text-icons-color hover:shadow-shadow" href="#">
              <TiSocialInstagram />
            </a>
            <a className="transition-all ease-in p-[0.5rem] grid text-main-bg rounded-[50%] border-[1px] border-solid border-icons-color bg-icons-color hover:bg-main-bg hover:text-icons-color hover:shadow-shadow" href="#">
              <TiSocialLinkedin />
            </a>
            <a className="transition-all ease-in p-[0.5rem] grid text-main-bg rounded-[50%] border-[1px] border-solid border-icons-color bg-icons-color hover:bg-main-bg hover:text-icons-color hover:shadow-shadow" href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className="grid self-start">
          <h1 className="text-[3rem] font-extrabold">Awesome NFTs Collection</h1>
          <p className="w-[70%]">
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className="grid grid-cols-4 gap-[2rem] bg-main-bg mt-[1.5rem]">
            {cardArray.map((el, i) => (
              <div
                className="text-center rounded-[2rem] py-[3rem] px-[2rem] shadow-shadow-1 bg-main-bg"
                key={i + 1}
              >
                <small className="block">Floor price</small>
                <p className="text-[2rem]">${i + 1}95,4683</p>
                <span className="text-icons-color">+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};