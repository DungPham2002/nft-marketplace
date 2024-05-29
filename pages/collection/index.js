import React from "react";
import { Slider, Brand, Filter } from "@/components/componentsindex";
import { Banner, CollectionProfile, NFTCardTwo } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";


export default function Collection() {
  const collectionArray = [
    {image: images.nft_image_1},
    {image: images.nft_image_2},
    {image: images.nft_image_3},
    {image: images.nft_image_1},
    {image: images.nft_image_2},
    {image: images.nft_image_3},
    {image: images.nft_image_1},
    {image: images.nft_image_2},
  ];
  return (
      <div>
        <Banner bannerImage={images.creatorbackground1} />
        <CollectionProfile />
        <Filter />
        <NFTCardTwo NFTData={collectionArray} />
        <Slider />
    <Brand />
      </div>
  );
}