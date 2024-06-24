import React, { useContext, useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BigNFTSlider, Service, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, Slider, Brand, Video } from "@/components/componentsindex";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getTopCreators } from "@/services/getTopCreators";
import { getTopNft } from "@/api/nft.api";
import { getTopAuction } from "@/api/auction.api";


export default function Home() {  
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftCoppy, setNftCoppy] = useState([]);
  const [topAuctions, setTopAuctions] = useState([]);

  useEffect(() => {
    getTopNft().then((item) => {
      setNfts(item);
      setNftCoppy(item)
    });

  }, [currentAccount]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await getTopAuction();
        if (item.length > 0) {
          setTopAuctions(item);
        }
      } catch (error) {
        console.error('Failed to fetch top auctions', error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  let creators = [];
  if (nfts) {
    creators = getTopCreators(nfts);
  };

  return (
    <div className="">
      <HeroSection />
      <Service />
      <BigNFTSlider NFTData={topAuctions}/>
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
