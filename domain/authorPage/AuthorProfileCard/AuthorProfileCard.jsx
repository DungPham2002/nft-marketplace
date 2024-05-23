import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import images from "@/images";
import { Button } from "@/components/componentsindex";

export const AuthorProfileCard = ({currentAccount}) => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    //copyAddress function
    const copyAddress = () => {
        const copyText = document.getElementById("myInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
        setShare(true);
        setReport(false);
        } else {
        setShare(false);
        }
    };

    const openReport = () => {
        if (!report) {
        setReport(true);
        setShare(false);
        } else {
        setReport(false);
        }
    };

    return (
        <div className="w-full z-[22222] mt-[5rem]">
            <div className="w-[80%] my-0 mx-auto grid grid-cols-[1fr,4fr,1.3fr] items-center bg-main-bg py-[2.5rem] px-[2rem] rounded-[1rem] shadow-shadow gap-[3rem]">
                <div className="{Style.AuthorProfileCard_box_img}">
                <Image
                    src={images.nft_image_1}
                    className="rounded-[1rem]"
                    alt="NFT IMAGES"
                    width={220}
                    height={220}
                />
                </div>

                <div className="{Style.AuthorProfileCard_box_info}">
                    <h2 className="text-[2.5rem] font-bold mt-[-0.5rem] flex items-center">
                        Dony Herrera{""}{" "}
                        <span>
                        <MdVerified className="ml-[0.5rem]"/>
                        </span>{" "}
                    </h2>

                    <div className="flex items-center">
                        <input
                            className="w-[38%] outline-none text-[1rem] border-none bg-[transparent] font-bold"
                            type="text"
                            value={currentAccount}
                            id="myInput"
                        />
                        <FiCopy
                        onClick={() => copyAddress()}
                        className="transition-all ease-in hover:shadow-shadow hover:cursor-pointer hover:text-icons-color"
                        />
                    </div>

                    <p className="text-[1.1rem] w-[90%] leading-none my-[1rem]">
                        Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                        Contributing to @ether_cards, an NFT Monetization Platform.
                    </p>

                    <div className="flex items-center gap-[1rem] text-[1.5rem]">
                        <a className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color" href="#">
                        <TiSocialFacebook />
                        </a>
                        <a className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color" href="#">
                        <TiSocialInstagram />
                        </a>
                        <a className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color" href="#">
                        <TiSocialLinkedin />
                        </a>
                        <a className="cursor-pointer bg-icons-color text-main-bg rounded-[50%] grid p-[0.5rem] border-[1px] border-solid border-icons-color transition-all ease-in hover:shadow-shadow hover:bg-main-bg hover:text-icons-color" href="#">
                        <TiSocialYoutube />
                        </a>
                    </div>
                </div>

                <div className="flex items-center self-start gap-[2rem] relative">
                <Button btnName="Follow" handleClick={() => {}} />
                <MdCloudUpload
                    onClick={() => openShare()}
                    className="text-[2.5rem] cursor-pointer"
                />

                {share && (
                    <div className="absolute p-[0.5rem] w-[15rem] shadow-shadow rounded-[1rem] bg-main-bg left-[2rem] top-[5rem] z-[11111111]">
                        <p className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]">
                            <span className="text-[1.5rem]">
                            <TiSocialFacebook />
                            </span>{" "}
                            {""}
                            Facebook
                        </p>
                        <p className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]">
                            <span className="text-[1.5rem]">
                            <TiSocialInstagram />
                            </span>{" "}
                            {""}
                            Instragram
                        </p>
                        <p className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]">
                            <span className="text-[1.5rem]">
                            <TiSocialLinkedin />
                            </span>{" "}
                            {""}
                            LinkedIn
                        </p>
                        <p className="flex items-center gap-[1rem] cursor-pointer transition-all ease-in py-[0.3rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg hover:rounded-[2rem]">
                            <span className="text-[1.5rem]">
                            <TiSocialYoutube />
                            </span>{" "}
                            {""}
                            YouTube
                        </p>
                    </div>
                )}

                <BsThreeDots
                    onClick={() => openReport()}
                    className="text-[2rem]"
                />

                {report && (
                    <p className="absolute p-[0.5rem] w-[10rem] shadow-shadow rounded-[1rem] bg-main-bg left-[6rem] top-[4rem] z-[11111111] flex items-center">
                        <span className="mr-[0.2rem]">
                            <MdOutlineReportProblem />
                        </span>{" "}
                        {""}
                        Report abouse
                    </p>
                )}
                </div>
            </div>
        </div>
    );
};