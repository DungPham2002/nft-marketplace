import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../images";
import { Discover, HelpCenter } from "../NavBar/index";

export const Footer = () => {
    return (
        <div className="w-full relative p-[1.5rem]">
          <div className="w-[80%] my-0 mx-auto grid grid-cols-[1.3fr,1fr,1fr,2fr] items-start justify-between gap-[3rem]">
            <div className="{Style.footer_box_social}">
              <Image src={images.logo} alt="footer logo" height={100} width={100} />
              <p className="mt-14">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
                exclusive digital items.
              </p>
    
              <div className="flex gap-[1.3rem] text-[1.5rem] items-center mt-4">
                <a className="p-[0.5rem] rounded-[50%] transition-all ease-in grid hover:bg-icons-color hover:text-shadow-dark shadow-shadow" href="#">
                  <TiSocialFacebook />
                </a>
                <a className="p-[0.5rem] rounded-[50%] transition-all ease-in grid hover:bg-icons-color hover:text-shadow-dark shadow-shadow" href="#">
                  <TiSocialLinkedin />
                </a>
                <a className="p-[0.5rem] rounded-[50%] transition-all ease-in grid hover:bg-icons-color hover:text-shadow-dark shadow-shadow" href="#">
                  <TiSocialTwitter />
                </a>
                <a className="p-[0.5rem] rounded-[50%] transition-all ease-in grid hover:bg-icons-color hover:text-shadow-dark shadow-shadow" href="#">
                  <TiSocialYoutube />
                </a>
                <a className="p-[0.5rem] rounded-[50%] transition-all ease-in grid hover:bg-icons-color hover:text-shadow-dark shadow-shadow" href="#">
                  <TiSocialInstagram />
                </a>
              </div>
            </div>
    
            <div className="">
              <h3 className="font-bold">Discover</h3>
              <Discover />
            </div>
    
            <div className="">
              <h3 className="font-bold">Help Center</h3>
              <HelpCenter />
            </div>
    
            <div className="">
              <h3 className="font-bold">Subscribe</h3>
    
              <div className="w-full flex justify-between items-center py-[1.5rem] px-[2rem] bg-icons-color text-shadow-dark rounded-[5rem] mt-[3rem]">
                <input className="border-none bg-[transparent] outline-none w-[90%] text-shadow-dark placeholder:text-shadow-dark" type="email" placeholder="Enter your email *" />
                <RiSendPlaneFill className="cursor-pointer text-[2rem]" />
              </div>
              <div className="py-[1rem] px-[2rem]">
                <p className="mt-1">
                  Discover, collect, and sell extraordinary NFTs OpenSea is the
                  world first and largest NFT marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}