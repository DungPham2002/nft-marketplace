import React from "react";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BigNFTSlider, Service, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, Slider, Brand, Video } from "@/components/componentsindex";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <FollowerTab />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
}
