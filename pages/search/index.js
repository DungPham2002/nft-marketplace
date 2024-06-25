import { Slider, Brand, Filter, Title } from "@/components/componentsindex";
import { SearchBar } from "@/domain/searchPage/searchBarIndex";
import { NFTCardTwo, Banner } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getFilteredNft } from "@/api/nft.api";
import { getFilteredAuction } from "@/api/auction.api";

export default function Search() {
    const { fetchNFTs, fetchActiveAuctions } = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftCoppy, setNftCoppy] = useState([]);
    const [auctionList, setAuctionList] = useState([]);
    const [auctionCoppy, setAuctionCoppy] = useState([]);
    const [newest, setNewest] = useState(false);
    const [highest, setHighest] = useState(false);
    const [lowest, setLowest] = useState(false);
    const [oldest, setOldest] = useState(false);
    const [activeCollection, setActiveCollection] = useState(0);


    useEffect(() => {
        getFilteredNft({
            collectionId: activeCollection != 0 ? activeCollection : null,
            filter: highest ? 'highest' : lowest ? 'lowest' : newest ? 'newest' : oldest ? 'oldest' : null,
          }).then((item) => {
            setNfts(item);
            setNftCoppy(item);
            })
    }, [activeCollection, highest, lowest, newest, oldest]);

    useEffect(() => {
        getFilteredAuction({
            collectionId: activeCollection != 0 ? activeCollection : null,
            filter: highest ? 'highest' : lowest ? 'lowest' : newest ? 'newest' : oldest ? 'oldest' : null,
          }).then((items) => {
        setAuctionList(items);
        setAuctionCoppy(items);
        });
    }, [activeCollection, highest, lowest, newest, oldest]);

    const onHandleSearch = (value) => {
        const filteredNFTS = nftCoppy.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
        );
        const filteredAuctions = auctionCoppy.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
        );
        setNfts(filteredNFTS);
        setAuctionList(filteredAuctions);
    };

    const onClearSearch = () => {
        setNfts(nftCoppy);
        setAuctionList(auctionCoppy);
    };

    return (
        <div className="">
        <Banner bannerImage={images.creatorbackground2} />
        <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch} />
        <Filter newest={newest} setNewest={setNewest} highest={highest} setHighest={setHighest} lowest={lowest} setLowest={setLowest} oldest={oldest} setOldest={setOldest} activeCollection={activeCollection} setActiveCollection={setActiveCollection}/>
        <Title heading="List on market" />
        <NFTCardTwo NFTData={nfts} />
        <Title heading="List on auction" />
        <NFTCardTwo NFTData={auctionList} />
        <Slider />
        <Brand />
        </div>
    );
}