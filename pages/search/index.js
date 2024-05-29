import { Slider, Brand, Filter, Title } from "@/components/componentsindex";
import { SearchBar } from "@/domain/searchPage/searchBarIndex";
import { NFTCardTwo, Banner } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

export default function Search() {
    const { fetchNFTs, fetchActiveAuctions, currentAccount } = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftCoppy, setNftCoppy] = useState([]);
    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        fetchNFTs().then((item) => {
            setNfts(item?.reverse());
            setNftCoppy(item)
        })
    }, [currentAccount]);


    const onHandleSearch = (value) => {
        const filteredNFTS = nfts.filter(({ name }) => 
            name.toLowerCase().includes(value.toLowerCase())
        );

        if(filteredNFTS.length === 0) {
            setNfts(nftCoppy);
        } else {
            setNfts(filteredNFTS);
        }
    };

    const onClearSearch = () => {
        if(nfts.length && nftCoppy.length) {
            setNfts(nftCoppy);
        };
    };

    useEffect(() => {
        fetchActiveAuctions().then((items) => {
            setAuctionList(items);
        });
      }, [])
    return (
        <div className="">
          <Banner bannerImage={images.creatorbackground2} />
          <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch}/>
          <Filter />
          <Title heading="List on market"/>
          <NFTCardTwo NFTData={nfts} />
          <Title heading="List on auction"/>
          <NFTCardTwo NFTData={auctionList} />
          <Slider />
          <Brand />
        </div>
    );
}