import images from "@/images";
import { useState, useCallback, useEffect, useContext } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Image from "next/image";
import { Button } from "../componentsindex";
import { CountDownTimer } from "@/domain/NFTDetailsPage/NFTDescription/CountDownTimer/CountDownTimer";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getLikeNft, likeNft, unLikeNft } from "@/api/nft.api";

export const BigNFTSlider = ({ NFTData }) => {  
  const { userProfile } = useContext(NFTMarketplaceContext);

  const [idNumber, setIdNumber] = useState(0);
  const [likes, setLikes] = useState({});
  const [isLiking, setIsLiking] = useState(false);
  const router = useRouter();

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < NFTData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, NFTData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  //==========Like
  useEffect(() => {
    if (userProfile) {
      NFTData?.forEach(async (nft) => {
        if (userProfile.id !== 0) {
          const res = await getLikeNft(userProfile.id, nft.tokenId);
          setLikes((prevLikes) => ({
            ...prevLikes,
            [nft.tokenId]: res,
          }));
        } else {
          setLikes((prevLikes) => ({
            ...prevLikes,
            [nft.tokenId]: { likeCount: nft.likes || 0, isLiked: false },
          }));
        }
      });
    }
  }, [userProfile, NFTData]);

  const handleLikeToggle = async (tokenId) => {
    if (isLiking) return;
    setIsLiking(true);
    try {
      if (likes[tokenId]?.isLiked) {
        await unLikeNft(tokenId);
        setLikes((prevLikes) => ({
          ...prevLikes,
          [tokenId]: {
            ...prevLikes[tokenId],
            isLiked: false,
            likeCount: prevLikes[tokenId].likeCount - 1,
          },
        }));
      } else {
        await likeNft(tokenId);
        setLikes((prevLikes) => ({
          ...prevLikes,
          [tokenId]: {
            ...prevLikes[tokenId],
            isLiked: true,
            likeCount: prevLikes[tokenId].likeCount + 1,
          },
        }));
      }
    } catch (error) {
      console.error('Error liking/unliking NFT:', error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="my-[8rem]">
      <div className="my-0 mx-auto w-[80%] grid grid-cols-12 items-center">
        <div className="col-start-1 col-end-7 row-start-1 row-end-[-1] bg-main-bg shadow-shadow-1 rounded-[1rem] p-[2rem] z-[1111] h-[90vh]">
          <h2 className="font-bold text-[3rem]">{NFTData[idNumber]?.name} {""} #{NFTData[idNumber]?.tokenId}</h2>
          <div className="grid grid-cols-2 items-center">
            <div className="flex items-center gap-[1rem]">
              <Image
                className="rounded-[50%] h-[50px] w-[50px]"
                src={NFTData[idNumber]?.sellerAvatar || images.user1}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className="">
                <p className="">Creator</p>
                <h4 className="flex font-bold">
                  {NFTData[idNumber]?.sellerName || "UnName"}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-[1rem]">
              <AiFillFire className="text-[4rem]" />
              <div className="">
                <p>Collection</p>
                <h4 className="font-bold">{NFTData[idNumber]?.collectionName}</h4>
              </div>
            </div>
          </div>

          <div className="{Style.bigNFTSlider_box_left_bidding}">
            <div className="my-[2rem] py-0 px-[4rem] rounded-[0.5rem] border-[3px] border-solid border-shadow-dark">
              <small className="py-[1rem] px-[2rem] bg-shadow-dark font-semibold rounded-[0.5rem]">Current Bid</small>
              <p className="my-[1rem]">
                {(NFTData[idNumber]?.highestBid > NFTData[idNumber]?.minBid) ? (NFTData[idNumber]?.highestBid) : NFTData[idNumber]?.minBid} ETH<span></span>
              </p>
            </div>

            <p className="flex items-center gap-[1rem]">
              <MdTimer className="text-[2rem]" />
              <span>Auction ending in</span>
            </p>
            <div className="text-center pt-[1rem] px-0 pb-[1rem] border-b-[1px] border-b-solid border-b-shadow-dark">
              <CountDownTimer targetDate={dayjs(NFTData[idNumber]?.endTime).toDate()} />
            </div>
            <div className="flex items-center justify-center gap-[4rem] py-[2rem]">
              <Button btnName="Place" handleClick={() => router.push(`/bidNFT?id=${NFTData[idNumber]?.tokenId}&tokenURI=${NFTData[idNumber]?.tokenURI}`)} />
              <Button 
                btnName="View" 
                handleClick={() => router.push({ 
                  pathname: "/NFT-details", 
                  query: { 
                    tokenId: NFTData[idNumber]?.tokenId,
                    tokenURI: NFTData[idNumber]?.tokenURI,
                    name: NFTData[idNumber]?.name,
                    description: NFTData[idNumber]?.description,
                    image: NFTData[idNumber]?.image,
                    collectionId: NFTData[idNumber]?.collectionId,
                    website: NFTData[idNumber]?.website,
                    royalties: NFTData[idNumber]?.royalties,
                    seller: NFTData[idNumber]?.seller,
                    minBid: NFTData[idNumber]?.minBid,
                    highestBid: NFTData[idNumber]?.highestBid,
                    likeCount: likes[NFTData[idNumber]?.tokenId]?.likeCount || 0,
                    isLiked: likes[NFTData[idNumber]?.tokenId]?.isLiked || false,
                    endTime: dayjs(NFTData[idNumber]?.endTime).toDate().toString(),
                    collectionName: NFTData[idNumber]?.collectionName,
                    collectionImage: NFTData[idNumber]?.collectionImage,
                    isActive: true,
                  }
                })}
              />
            </div>
          </div>

          <div className="flex items-center gap-[2rem] text-[2rem] mt-[3rem]">
            <TbArrowBigLeftLines
              className="cursor-pointer transition-all ease-in hover:p-[1rem] hover:bg-shadow-dark hover:rounded-[50%]"
              onClick={() => dec()}
            />
            <TbArrowBigRightLines
              className="cursor-pointer transition-all ease-in hover:p-[1rem] hover:bg-shadow-dark hover:rounded-[50%]"
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className="col-start-6 col-end-[-1] row-start-1 row-end-[-1] p-[1rem] bg-main-bg rounded-[2.5rem] shadow-shadow-1">
          <div className="relative">
            <Image
              src={NFTData[idNumber]?.image}
              alt="NFT IMAGE"
              width={680}
              height={680}
              className="rounded-[2rem] h-[680px] w-[680px]"
            />

            <div onClick={(e) => {e.preventDefault(); handleLikeToggle(NFTData[idNumber].tokenId)}} className="absolute top-[3rem] right-[3rem] flex items-center gap-[1rem] text-[1.2rem] bg-icons-color text-shadow-dark py-[0.5rem] px-[1rem] rounded-[5rem]">
              {likes[NFTData[idNumber]?.tokenId]?.isLiked ? (
                <AiFillHeart className="text-[red]" />
              ) : (
                <AiOutlineHeart />
              )}
              {""} {likes[NFTData[idNumber]?.tokenId]?.likeCount || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};