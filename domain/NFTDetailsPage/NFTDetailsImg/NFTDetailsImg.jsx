import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { likeNft, unLikeNft } from "@/api/nft.api";
import { NFTMarketplaceAdrress } from "@/Context/constants";


export const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (nft) {
      setLike(nft.isLiked || "false");
      setLikeCount(+nft.likeCount || 0); 
    }
  }, [nft]);

  const openDescription = () => {
    setDescription(!description);
  };

  const openDetails = () => {
    setDetails(!details);
  };

  const handleLikeToggle = async (tokenId) => {
    if (isLiking) return;
    setIsLiking(true);
    try {
      if (like == "true") {
        await unLikeNft(tokenId);
        setLike("false");
        setLikeCount(prevCount => Math.max(prevCount - 1, 0));
      } else {
        await likeNft(tokenId);
        setLike("true");
        setLikeCount(prevCount => prevCount + 1);
      }
    } catch (error) {
      console.error('Error liking/unliking NFT:', error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="w-full">
      <div className="NFTDetailsImg_box">
        <div className="grid">
          <div className="flex items-center justify-between col-start-1 col-end-[-1] row-start-1 row-end-[12] z-[111111] self-start p-[2rem]">
            <BsImages className="text-[1.4rem]" />
            <div
              className="bg-icons-color py-[0.2rem] px-[1rem] text-main-bg flex items-center gap-[0.5rem] rounded-[2rem] cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleLikeToggle(nft.tokenId);
              }}
            >
              {like == "true" ? (
                <AiFillHeart className="text-[red] text-[1.4rem]" />
              ) : (
                <AiOutlineHeart className="text-[1.4rem]" />
              )}
              {""} {likeCount || 0}
            </div>
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
          onClick={openDescription}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className="pt-[1rem] px-[1rem] text-[1rem]">
            <p>{nft.description}</p>
          </div>
        )}

        <div
          className="flex items-center justify-between bg-icons-bg rounded-[0.5rem] px-[1rem] cursor-pointer mt-[1rem]"
          onClick={openDetails}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className="pt-[1rem] px-[1rem] text-[1rem]">
            <small className="text-[1rem]">2000 x 2000 px.IMAGE(685KB)</small>
            <p className="text-[1rem] py-[1rem]">
              <small className="text-[1rem]">Contract Address</small>
              <br />
              <span className="text-[1rem]">{NFTMarketplaceAdrress}</span>
              {/* {nft.seller} */}
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