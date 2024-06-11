import React, { useContext, useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BigNFTSlider, Service, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, Slider, Brand, Video } from "@/components/componentsindex";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getTopCreators } from "@/services/getTopCreators";


export default function Home() {  
  const { checkIfWalletConnected, currentAccount } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected()
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftCoppy, setNftCoppy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
        setNfts(items?.reverse());
        setNftCoppy(items)
    })
  }, [currentAccount]);


  let creators = [];
  if (nfts) {
    creators = getTopCreators(nfts);
  };

  return (
    <div className="">
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <FollowerTab TopCreator={creators}/>
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard NFTData={nfts}/>
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
