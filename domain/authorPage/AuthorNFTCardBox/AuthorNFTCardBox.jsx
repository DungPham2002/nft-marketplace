import React, { useState } from "react";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import { FollowerTabCard } from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "@/images";
import { FollowerTabCardTwo } from "../FollowerTabCardTwo/FolloweTabCardTwo";

export const AuthorNFTCardBox = ({
  listed,
  created,
  like,
  follower,
  following,
  auction,
  myNFTs,
  nfts,
  auctionList,
  likedList,
  followerList,
  followingList
}) => {

  return (
    <div className="w-full mb-[14rem]">
      {listed && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNFTs} />}
      {auction && <NFTCardTwo NFTData={auctionList} />}
      {like && <NFTCardTwo NFTData={likedList} />}
      {follower && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {followerList.map((el, i) => (
            <FollowerTabCardTwo i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem]">
          {followingList.map((el, i) => (
            <FollowerTabCardTwo i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};
