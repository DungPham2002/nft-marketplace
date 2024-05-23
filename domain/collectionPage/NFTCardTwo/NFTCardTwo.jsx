import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { LikeProfile } from "@/components/componentsindex";
import Link from "next/link";

export const NFTCardTwo = ({ NFTData }) => {
    const [like, setLike] = useState(false);
    const [likeInc, setLikeInc] = useState(21);

    const likeNFT = () => {
        if (!like) {
        setLike(true);
        setLikeInc(23);
        } else {
        setLike(false);
        setLikeInc(23 + 1);
        }
    };

    return (
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[3rem] mb-[14rem]">
        {NFTData.map((el, i) => (
            <Link href={{ pathname:"/NFT-details", query: el }} key={i + 1}>
                <div className="grid cursor-pointer transition-all ease-in rounded-[1rem] hover:shadow-shadow" key={i + 1}>
                <div className="p-[1rem] col-start-1 col-end-[-1] row-start-1 row-end-[-1] z-[111111]">
                    <div className="{Style.NFTCardTwo_box_like_box}">
                    <div className="flex items-center justify-between">
                        <BsImage className="text-[2rem] text-icons-color" />
                        <p className="flex items-center gap-[1rem] text-[1.2rem] bg-icons-color text-main-bg rounded-[2rem] py-0 px-[0.5rem]" onClick={() => likeNFT()}>
                        {like ? <AiOutlineHeart className=""/> : <AiFillHeart className="text-[red]"/>}
                        {""}
                        <span>{likeInc + 1}</span>
                        </p>
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
                    <small className="text-[1rem]">4{i + 2}</small>
                </div>

                <div className="flex justify-between items-end p-[1rem]">
                    <div className="{Style.NFTCardTwo_box_price_box}">
                    <small className="ml-[1rem] rounded-[0.3rem] p-[1rem] text-main-bg bg-icons-color">Current Bid</small>
                    <p className="rounded-[0.3rem] text-[1.1rem] pt-[1rem] px-[1rem] pb-[0.5rem] border-[1px] border-solid border-icons-color">{el.price} ETH</p>
                    </div>
                    <p className="flex items-center gap-[0.5rem] text-[1.1rem]">
                    <MdTimer /> <span className="">{i + 1} hours left</span>
                    </p>
                </div>
                </div>
            </Link>
        ))}
        </div>
    );
};