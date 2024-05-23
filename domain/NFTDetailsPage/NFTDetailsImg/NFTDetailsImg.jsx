import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import images from "@/images";

export const NFTDetailsImg = ({nft}) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="w-full">
      <div className="{Style.NFTDetailsImg_box}">
        <div className="grid">
          <div className="flex items-center justify-between col-start-1 col-end-[-1] row-start-1 row-end-[12] z-[111111] self-start p-[2rem]">
            <BsImages className="text-[1.4rem]" />
            <p
              className="bg-icons-color py-[0.2rem] px-[1rem] text-main-bg flex items-center gap-[0.5rem] rounded-[2rem] cursor-pointer"
              onClick={() => likeNFT()}
            >
              {like ? (
                <AiOutlineHeart className="text-[1.4rem]" />
              ) : (
                <AiFillHeart className="text-[1.4rem]" />
              )}
              <span>23</span>
            </p>
          </div>

          <div className="col-start-1 col-end-[-1] row-start-1 row-end-12">
            <Image
              src={nft.image}
              className="rounded-[1rem] object-cover"
              alt="NFT image"
              width={700}
              height={800}
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between bg-icons-bg rounded-[0.5rem] px-[1rem] cursor-pointer mt-[1rem]"
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className="pt-[1rem] px-[1rem] text-[1rem]">
            <p>
              {nft.description}
            </p>
          </div>
        )}

        <div
          className="flex items-center justify-between bg-icons-bg rounded-[0.5rem] px-[1rem] cursor-pointer mt-[1rem]"
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className="pt-[1rem] px-[1rem] text-[1rem]">
            <small className="text-[1rem]">2000 x 2000 px.IMAGE(685KB)</small>
            <p className="text-[1rem] py-[1rem]">
              <small className="text-[1rem]">Contract Address</small>
              <br></br>
              <span className="text-[1rem]">{nft.contractAddress}</span>
                {nft.seller}
            </p>
            <p className="text-[1rem]">
              <small className="text-[1rem]">Token ID</small>
                &nbsp; {nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
