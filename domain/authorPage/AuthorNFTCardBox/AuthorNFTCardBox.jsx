import React, { useState } from "react";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import { FollowerTabCard } from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "@/images";

export const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
  auction,
  myNFTs,
  nfts,
  auctionList
}) => {

  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
    },
  ];
  return (
    <div className="w-full mb-[14rem]">
      {collectiables && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNFTs} />}
      {like && <NFTCardTwo NFTData={nfts} />}
      {auction && <NFTCardTwo NFTData={auctionList} />}
      {follower && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};
