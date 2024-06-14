import { AuthorNFTCardBox, AuthorProfileCard, AuthorTabs } from "@/domain/authorPage/authorIndex";
import { Banner } from "@/domain/collectionPage/collectionIndex";
import { Brand, Title } from "@/components/componentsindex";
import { FollowerTabCard } from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getUserByAddress } from "@/api/user.api";
import { BsSearch, BsArrowRight } from "react-icons/bs";

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
  
    const [listed, setListed] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
    const [auction, setAuction] = useState(false);
    const [userByAddress, setUserByAddress] = useState("");
    const { fetchMyNFTsorListedNFTs, currentAccount, fetchActiveAuctions} = useContext(NFTMarketplaceContext);

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);
    const [auctionList, setAuctionList] = useState([]);


    useEffect(() => {
      fetchActiveAuctions().then((items) => {
        setAuctionList(items)
      });
    }, [currentAccount]);

    useEffect(() => {
      if (currentAccount) {
        getUserByAddress(currentAccount).then((item) => {
          setUserByAddress(item)
        });
        fetchMyNFTsorListedNFTs("fetchItemsListed").then((items) => {
          setNfts(items);
        });
        fetchMyNFTsorListedNFTs("fetchMyNFTs").then((items) => {
          setMyNFTs(items);
        });
      }
    }, [currentAccount]);

    const handleSearchAddress = async(address) => {
      if (!address) {
        getUserByAddress(currentAccount).then((item) => {
          setUserByAddress(item)
        })
      } else {
        getUserByAddress(address).then((item) => {
          setUserByAddress(item)
          setNfts(item.listedNft)
          setMyNFTs(item.createdNft)
        })
      }
    }

    return (
      <div className="">
        <Banner bannerImage={images.creatorbackground2} />
        <form className="w-full">
          <div className="w-[40%] my-0 mx-auto bg-main-bg text-main-bg flex rounded-[5rem] items-center mt-[8rem] mb-[3rem] shadow-shadow">
            <BsSearch className="text-[3rem] py-[0.5rem] px-[0.8rem] cursor-pointer text-icons-color" />
            <input
              className="w-[85%] border-0 outline-[0] p-[2rem] bg-main-bg placeholder:text-icons-color placeholder:text-[1.2rem] text-icons-color"
              type="text"
              placeholder="Type address..."
              onChange={(e)=>{handleSearchAddress(e.target.value)}}
            />
            <BsArrowRight className="text-[3rem] py-[0.5rem] px-[1  rem] cursor-pointer text-icons-color" />
          </div>
        </form>
        <AuthorProfileCard userByAddress={userByAddress}/>
        <AuthorTabs
          setListed={setListed}
          setCreated={setCreated}
          setLike={setLike}
          setFollower={setFollower}
          setFollowing={setFollowing}
          setAuction={setAuction}
        />
  
        <AuthorNFTCardBox
          listed={listed}
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