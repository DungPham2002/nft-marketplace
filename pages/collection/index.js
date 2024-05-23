import React from "react";
import { Slider, Brand, Filter } from "@/components/componentsindex";
import { Banner, CollectionProfile, NFTCardTwo } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";


export default function Collection() {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
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