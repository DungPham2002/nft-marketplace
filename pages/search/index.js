import { Slider, Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/domain/searchPage/searchBarIndex";
import { NFTCardTwo, Banner } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

export default function SearchPage() {
    const { fetchNFTs } = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftCoppy, setNftCoppy] = useState([]);

    useEffect(() => {
        fetchNFTs().then((item) => {
            setNfts(item.reverse());
            setNftCoppy(item);
        });
    });

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

    return (
        <div className="">
          <Banner bannerImage={images.creatorbackground2} />
          <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch}/>
          <Filter />
          <NFTCardTwo NFTData={nfts} />
          <Slider />
          <Brand />
        </div>
    );
}