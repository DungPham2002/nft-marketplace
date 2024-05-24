import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import images from "../../../images";
import { Button } from "../../Button/Button";

export const SideBar = ({setOpenSideBarMenu}) => {
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Author Profile",
            link: "author"
        },
        {
            name: "NFT Details",
            link: "NFT-details"
        },
        {
            name: "Account settings",
            link: "account"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
    ];

    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "ContactU",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "signUp"
        },
        {
            name: "Log in",
            link: "login"
        },
        {
            name: "Forgot password",
            link: "forgot-password"
        },
    ];

    const openDiscoverMenu = () => {
        if(!openDiscover) {
            setOpenDiscover(true)
        } else {
            setOpenDiscover(false)
        }
    };

    const openHelpMenu = () => {
        if(!openHelp) {
            setOpenHelp(true)
        } else {
            setOpenHelp(false)
        }
    };

    const closeSideBar = () => {
        setOpenSideBarMenu(false)
    };
    return ( 
        <div className="">
            <GrClose
                className="absolute top-[3rem] right-[3rem] transition-all ease-in-out cursor-pointer shadow-shadow hover:rotate-45"
                onClick={() => closeSideBar()}
            ></GrClose>

            <dir className="p-[2rem] border-b-[1px] border-b-icons-color border-b-solid bg-icons-bg">
                <Image 
                    src={images.logo}
                    alt="logo"
                    width={150}
                    height={150}
                />
                <p className="mt-[2rem]">
                    Discover the most outstanding articles on all topices of NFT
                </p>
                <div className="flex gap-[1.3rem] text-[1.5rem] items-center">
                    <a className="p-[0.2rem] rounded hover:bg-icons-color hover:text-[shadow-dark] hover:shadow-icons-color hover:shadow-solid" href="">
                        <TiSocialFacebook />
                    </a>
                    <a className="p-[0.2rem] rounded hover:bg-icons-color hover:text-[shadow-dark] hover:shadow-icons-color hover:shadow-solid" href="">
                        <TiSocialLinkedin />
                    </a>
                    <a className="p-[0.2rem] rounded hover:bg-icons-color hover:text-[shadow-dark] hover:shadow-icons-color hover:shadow-solid" href="">
                        <TiSocialTwitter />
                    </a>
                    <a className="p-[0.2rem] rounded hover:bg-icons-color hover:text-[shadow-dark] hover:shadow-icons-color hover:shadow-solid" href="">
                        <TiSocialYoutube />
                    </a>
                    <a className="p-[0.2rem] rounded hover:bg-icons-color hover:text-[shadow-dark] hover:shadow-icons-color hover:shadow-solid" href="">
                        <TiSocialInstagram />
                    </a>
                </div>
            </dir>

            <div className="p-[2rem] uppercase font-medium border-b-[1px] border-b-icons-color border-b-solid">
                <div>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => openDiscoverMenu()}>
                        <p>Discover</p>
                        <TiArrowSortedDown/>
                    </div>

                    {openDiscover && ( 
                        <div className="pe-px pt-px">
                            {discover.map((el, i) => (
                                <p key={i}>
                                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => openHelpMenu()}>
                        <p>Help Center</p>
                        <TiArrowSortedDown/>
                    </div>

                    {
                        openHelp && (
                            <div className="pe-px pt-px">
                                {helpCenter.map((el, i) => (
                                    <p key={i + 1}>
                                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="p-[2rem] flex items-center justify-between">
                <Button btnName="Create" handleClick={() => {}} />
                <Button btnName="Connect Wallet" handleClick={() => {}}/>
            </div>
        </div>
    )
}