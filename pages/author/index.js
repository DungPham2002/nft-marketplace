import { AuthorNFTCardBox, AuthorProfileCard, AuthorTabs } from "@/domain/authorPage/authorIndex";
import { Banner } from "@/domain/collectionPage/collectionIndex";
import { Brand, Title } from "@/components/componentsindex";
import { FollowerTabCard } from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

export default function Author() {
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
  
    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
    const [auction, setAuction] = useState(false);
  
    const { fetchMyNFTsorListedNFTs, currentAccount, fetchActiveAuctions } = useContext(NFTMarketplaceContext);

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);
    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
      fetchMyNFTsorListedNFTs("fetchItemsListed").then((items) => {
        setNfts(items);
      });
    }, []);

    useEffect(() => {
      fetchMyNFTsorListedNFTs("fetchMyNFTs").then((items) => {
        setMyNFTs(items);
      });
    }, []);

    useEffect(() => {
      fetchActiveAuctions().then((items) => {
        setAuctionList(items)
      });
    }, [])

    return (
      <div className="">
        <Banner bannerImage={images.creatorbackground2} />
        <AuthorProfileCard currentAccount={currentAccount}/>
        <AuthorTabs
          setCollectiables={setCollectiables}
          setCreated={setCreated}
          setLike={setLike}
          setFollower={setFollower}
          setFollowing={setFollowing}
          setAuction={setAuction}
        />
  
        <AuthorNFTCardBox
          collectiables={collectiables}
          created={created}
          like={like}
          follower={follower}
          following={following}
          auction={auction}
          myNFTs={myNFTs}
          nfts={nfts}
          auctionList={auctionList}
        />
        <Title
          heading="Popular Creators"
          paragraph="Click on music icon and enjoy NTF music or audio"
        />
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem] mt-[6rem]">
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} key={i + 1}/>
          ))}
        </div>
  
        <Brand />
      </div>
    );
  };