import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getLikeNft, likeNft, unLikeNft } from "@/api/nft.api";

export const NFTCard = ({ NFTData }) => {
  const { userProfile } = useContext(NFTMarketplaceContext);

  const [likes, setLikes] = useState({});
  const [isLiking, setIsLiking] = useState(false);

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
    <div className="w-[80%] my-0 mx-auto grid grid-cols-3 gap-[3rem] mb-[10rem]">
      {NFTData?.map((el, i) => (
        <Link
          href={{ pathname: "/NFT-details", query: { 
            ...el, 
            endTime: el.endTime?.toString(), 
            likeCount: likes[el.tokenId]?.likeCount || 0,
            isLiked: likes[el.tokenId]?.isLiked || false, } 
          }}
          key={i + 1}
          className="p-[1rem] bg-shadow-light rounded-[1rem] grid grid-cols-4 grid-rows-4 cursor-pointer transition-all ease-in hover:shadow-shadow-1 group"
        >
          <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] overflow-hidden rounded-[1rem]">
            <Image
              src={el.image}
              alt="NFT images"
              width={600}
              height={600}
              className="group-hover:rounded-[1rem] group-hover:scale-[1.05] h-[345px] object-cover"
            />
          </div>

          <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-2] z-[1111] flex items-start justify-between overflow-hidden">
            <div className="m-[1rem] bg-icons-color text-main-bg rounded-[2rem] py-[0.5rem] px-[1rem]">
              <div
                className="flex items-center text-[1.2rem] gap-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  handleLikeToggle(el.tokenId);
                }}
              >
                {likes[el.tokenId]?.isLiked ? (
                  <AiFillHeart className="text-[red]" />
                ) : (
                  <AiOutlineHeart />
                )}
                {""} {likes[el.tokenId]?.likeCount || 0}
              </div>
            </div>

            <div className=" px-[4rem] bg-shadow-light text-center rounded-bl-[1rem] mr-[-2rem] skew-x-45 transform">
              <div className="bg-shadow-light -skew-x-45">
                <small>Remaining time</small>
                <p className="text-[1.2rem] font-semibold">0h : 0m : 0s</p>
              </div>
            </div>
          </div>

          <div className="col-start-1 col-end-[-1] row-start-3 row-end-[-1] items-end grid grid-cols-[1.5fr,1fr] overflow-hidden">
            <div className="ml-[-3rem] pb-[0.6rem] bg-shadow-light skew-x-45 rounded-tr-[1rem]">
              <div className="pl-[4rem] -skew-x-45">
                <h4 className="text-[1.3rem] font-bold my-[0.2rem]">
                  {el.name} #{el.tokenId}
                </h4>

                <div className="flex justify-between items-end">
                  <div
                    className="rounded-[0.3rem] px-[0.5rem] pb-[0.2rem] border-[1px] border-solid border-icons-color items-center"
                  >
                    <small className="p-[0.5rem] py-[0.5rem] rounded-[0.2rem] text-main-bg bg-icons-color">Current Bid</small>
                    <p className="text-center pt-[0.2rem] pl-0 pr-0 pb-0 font-semibold">{el.price} ETH</p>
                  </div>
                  <div className="{Style.NFTCard_box_update_details_price_box_stock}">
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[1.5rem] my-[1.5rem] ml-[6rem] text-icons-color z-[11111]">
              <BsImages className="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};