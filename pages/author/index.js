import { AuthorNFTCardBox, AuthorProfileCard, AuthorTabs } from "@/domain/authorPage/authorIndex";
import { Banner } from "@/domain/collectionPage/collectionIndex";
import { Brand, Title } from "@/components/componentsindex";
import images from "@/images";
import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getUserByAddress } from "@/api/user.api";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { getListNftLiked, getListNftSell, getListOwnerNft, getListSoldNft } from "@/api/nft.api";
import { getListFollower, getListFollowing } from "@/api/follow.api";
import { useRouter } from "next/router";




export default function Author() {
    const [listed, setListed] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
    const [auction, setAuction] = useState(false);
    const [userByAddress, setUserByAddress] = useState("");
    const { currentAccount, fetchActiveAuctions } = useContext(NFTMarketplaceContext);

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);
    const [auctionList, setAuctionList] = useState([]);
    const [likedList, setLikedList] = useState([])
    const [address, setAddress] = useState("");
    const [followerList, setFollowerList] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const router = useRouter();

    useEffect(() => {
      const { query } = router;
      const addressKey = Object.keys(query)[0];
      if (addressKey) {
        setAddress(addressKey);
        handleSearchAddress(addressKey);
      } else {
        if (currentAccount) {
          fetchUserData(currentAccount);
        }
      }
    }, [router.query, currentAccount]);

    useEffect(() => {
      if (userByAddress && userByAddress.createdNft) {
        updateMyNFTs(userByAddress.user.address);
      }
    }, [userByAddress, auctionList]);

    const fetchUserData = async (address) => {
      const user = await getUserByAddress(address);
      setUserByAddress(user);

      const activeAuctions = await fetchActiveAuctions();
      const userAuctions = activeAuctions?.filter((auction) => auction.seller.toLowerCase() === address.toLowerCase());
      setAuctionList(userAuctions);

      const listedNfts = await getListSoldNft(address);
      setNfts(listedNfts);

      const listLikedNfts = await getListNftLiked(address);
      setLikedList(listLikedNfts)
      
      const listFollower = await getListFollower(address);
      setFollowerList(listFollower);

      const listFollowing = await getListFollowing(address);
      setFollowingList(listFollowing);
    };

    const updateMyNFTs = async(address) => {
      const fetchedMyNFTs = await getListOwnerNft(address);
      const filteredMyNFTs = fetchedMyNFTs?.filter((nft) => {
        return !auctionList.some((auction) => auction.tokenId === nft.tokenId);
      });
      setMyNFTs(filteredMyNFTs);
    };

    const handleSearchAddress = async (address) => {
      if (address) {
        await fetchUserData(address);
      }
    };

    return (
      <div className="">
        <Banner bannerImage={images.creatorbackground2} />
        <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSearchAddress(address); }}>
          <div className="w-[40%] my-0 mx-auto bg-main-bg text-main-bg flex rounded-[5rem] items-center mt-[8rem] mb-[3rem] shadow-shadow">
            <BsSearch className="text-[3rem] py-[0.5rem] px-[0.8rem] cursor-pointer text-icons-color" />
            <input
              className="w-[85%] border-0 outline-[0] p-[2rem] bg-main-bg placeholder:text-icons-color placeholder:text-[1.2rem] text-icons-color"
              type="text"
              placeholder="Type address..."
              onChange={(e) => { setAddress(e.target.value); }}
            />
            <BsArrowRight className="text-[3rem] py-[0.5rem] px-[1rem] cursor-pointer text-icons-color" />
          </div>
        </form>
        <AuthorProfileCard userByAddress={userByAddress} />
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
          likedList={likedList}
          followerList={followerList}
          followingList={followingList}
        />
        {/* <Title
          heading="Popular Creators"
          paragraph="Click on music icon and enjoy NTF music or audio"
        />
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem] mt-[6rem]">
          {followerArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div> */}
  
        <Brand />
      </div>
    );
}
