import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { LikeProfile } from "@/components/componentsindex";
import Link from "next/link";
import { CountDownTimer } from "./CountDownTimer/CountDownTimer";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getLikeNft, likeNft, unLikeNft } from "@/api/nft.api";

export const NFTCardTwo = ({ NFTData }) => {
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
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[3rem] mb-[14rem]">
        {NFTData?.map((el, i) => (
            <Link href={{ pathname:"/NFT-details", query:  { 
                ...el, 
                owner: el.owner?.address,
                endTime: el.endTime?.toString(), 
                likeCount: likes[el.tokenId]?.likeCount || 0,
                isLiked: likes[el.tokenId]?.isLiked || false, } }} key={i + 1}>
                <div className="grid cursor-pointer transition-all ease-in rounded-[1rem] hover:shadow-shadow" key={i + 1}>
                <div className="p-[1rem] col-start-1 col-end-[-1] row-start-1 row-end-[-1] z-[111111]">
                    <div className="{Style.NFTCardTwo_box_like_box}">
                    <div className="flex items-center justify-between" >
                        <BsImage className="text-[2rem] text-icons-color" />
                        <div className="flex items-center gap-[1rem] text-[1.2rem] bg-icons-color text-main-bg rounded-[2rem] py-0 px-[0.5rem]" onClick={(e) => {
                            e.preventDefault();
                            handleLikeToggle(el.tokenId);
                            }}>
                        {likes[el.tokenId]?.isLiked ? (
                        <AiFillHeart className="text-[red]" />
                        ) : (
                        <AiOutlineHeart />
                        )}
                        {""} {likes[el.tokenId]?.likeCount || 0}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1]">
                    <Image
                    src={el.image}
                    alt="NFT"
                    width={500}
                    height={500}
                    className="rounded-[1rem] object-cover h-[270px]"
                    />
                </div>

                <div className="flex justify-between p-[1rem]">
                    <div className="{Style.NFTCardTwo_box_info_left}">
                    <LikeProfile />
                    <p className="text-[2rem] font-black">{el.name}</p>
                    </div>
                    <small className="text-[1rem]">#{el.tokenId}</small>
                </div>

                <div className="flex justify-between items-end p-[1rem]">
                    <div className="{Style.NFTCardTwo_box_price_box}">
                    <small className="mx-[0.5rem] rounded-[0.3rem] p-[1rem] text-main-bg bg-icons-color">Current Bid</small>
                    <p className="rounded-[0.3rem] text-[1.1rem] pt-[1rem] px-[1.5rem] pb-[0.5rem] border-[1px] border-solid border-icons-color">{el.highestBid ? (el.highestBid) : (el.minBid) ? (el.minBid.slice(0,5)) : 0} ETH</p>
                    </div>
                    <p className="flex items-center gap-[0.5rem] text-[1.1rem]">
                    <MdTimer /> <CountDownTimer targetDate={el.endTime}/>
                    </p>
                </div>
                </div>
            </Link>
        ))}
        </div>
    );
};