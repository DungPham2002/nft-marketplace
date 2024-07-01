import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";
import images from "@/images";
import { Button } from "@/components/componentsindex";
import { useContext, useEffect, useState } from "react";
import { NFTTabs } from "../NFTTabs/NFTTabs";
import Link from "next/link";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { useRouter } from "next/router";
import { CountDownTimer } from "./CountDownTimer/CountDownTimer";
import { getUserByAddress } from "@/api/user.api";
import { getOwnerHistory } from "@/api/nft.api";
import { getBidderHistory } from "@/api/auction.api";



export const NFTDescription = ({nft}) => {
    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [owner, setOwner] = useState(false);
    const [authorProfile, setAuthorProfile] = useState("");
    const [onwerHistory, setOwnerHistory] = useState([]);
    const [bidderHistory, setBidderHistory] = useState([]);

    const { currentAccount, buyNFT } = useContext(NFTMarketplaceContext);
    const router = useRouter();

    useEffect(() => {
        if (nft.tokenId) {
          getOwnerHistory(nft.tokenId).then((item) => {
            setOwnerHistory(item)
          })

          getBidderHistory(nft.tokenId).then((item) => {
            setBidderHistory(item)
          })
        }
    }, [nft.tokenId])
  
    const openSocial = () => {
      if (!social) {
        setSocial(true);
        setNFTMenu(false);
      } else {
        setSocial(false);
      }
    };
  
    const openNFTMenu = () => {
      if (!NFTMenu) {
        setNFTMenu(true);
        setSocial(false);
      } else {
        setNFTMenu(false);
      }
    };
  
    const openTabs = (e) => {
      const btnText = e.target.innerText;
  
      if (btnText == "Bid History") {
        setHistory(true);
        setOwner(false);
      } else if (btnText == "Owner History") {
        setHistory(false);
        setOwner(true);
      }
    };
  
    const openOwner = () => {
      if (!owner) {
        setOwner(true);
        setHistory(false);;
      } else {
        setOwner(false);
        setHistory(true);
      }
    };

    useEffect(() => {
      if (nft.seller != "" && nft.seller) {
        getUserByAddress(nft.seller).then((item) => {
          setAuthorProfile(item)
        })
      }
    }, [nft])
  
    return (
      <div className="w-full">
        <div className="w-full my-0 mx-auto">
          <div className="flex items-center justify-between relative">
            <p className="bg-icons-color text-main-bg py-[0.2rem] px-[0.8rem] rounded-[2rem]">Virtual Worlds</p>
            <div className="flex items-center gap-[2rem] text-[1.3rem]">
              <MdCloudUpload
                className="cursor-pointer"
                onClick={() => openSocial()}
              />
  
              {social && (
                <div className="absolute top-[4rem] left-[65%] w-[14rem] bg-main-bg shadow-shadow rounded-[0.5rem] p-[1rem]">
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <TiSocialFacebook /> Facebooke
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <TiSocialInstagram /> Instagram
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <TiSocialLinkedin /> LinkedIn
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <TiSocialTwitter /> Twitter
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <TiSocialYoutube /> YouTube
                  </a>
                </div>
              )}
  
              <BsThreeDots
                className="cursor-pointer"
                onClick={() => openNFTMenu()}
              />
  
              {NFTMenu && (
                <div className="absolute top-[4rem] left-[65%] w-[14rem] bg-main-bg shadow-shadow rounded-[0.5rem] p-[1rem]">
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <BiDollar /> Change price
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <BiTransferAlt /> Transfer
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <MdReportProblem /> Report abouse
                  </a>
                  <a className="flex items-center gap-[1rem] transition-all ease-in py-[0.5rem] px-[0.5rem] hover:bg-icons-color hover:text-main-bg rounded-[0.5rem] p-[0.5rem]" href="#">
                    <MdOutlineDeleteSweep /> Delete item
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* //Part TWO */}
          <div className="{Style.NFTDescription_box_profile}">
            <h1 className="text-[3.2rem]">{nft.name} #{nft.tokenId}</h1>
            <div className="flex items-center gap-[2rem] pb-[1.5rem]">
              <div className="flex items-center self-center gap-[1rem]">
                <Image
                  src={authorProfile.user.avatar ||images.user1}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px]"
                />
                <div className="{Style.NFTDescription_box_profile_box_left_info}">
                  <small className="font-medium text-[1rem]">Creator</small> <br />
                  <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                    <span className="font-extrabold flex items-center">
                      {authorProfile.user.name || "UnName"} <MdVerified className="ml-[0.2rem]"/>
                    </span>
                  </Link>
                </div>
              </div>
  
              <div className="flex items-center gap-[1rem] border-l-[1px] border-solid border-icons-color pl-[2rem]">
                <Image
                  src={nft?.collectionImage}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px]"
                />
  
                <div className="{Style.NFTDescription_box_profile_box_right_info}">
                  <small className="font-medium text-[1rem]">Collection</small> <br />
                  <span className="font-extrabold flex items-center">
                    {nft?.collectionName} <MdVerified className="ml-[0.2rem]"/>
                  </span>
                </div>
              </div>
            </div>
  
            <div className="my-[1rem]">
              <p className="flex items-center text-[1.5rem] gap-[1rem]">
                <MdTimer /> <span>Auction ending in:</span>
              </p>
              <CountDownTimer targetDate={nft.endTime}/>
              <div className="mt-[4rem] grid grid-cols-[4fr,1fr] gap-[3rem] items-end justify-between">
                <div
                  className="border-[2px] border-solid border-icons-color rounded-[0.5rem]"
                >
                  <small className="text-[1.2rem] bg-icons-color text-main-bg p-[1rem] rounded-[0.5rem] ml-[2rem]">Current Bid</small>
                  <p className="p-[1rem] text-[1.5rem] font-black">
                    {(nft.highestBid && nft.highestBid != 0) ? (nft.highestBid) : (nft.minBid) ? (nft.minBid) : (nft.price)} ETH <span>( ≈ $3,221.22)</span>
                  </p>
                </div>
  
                <span>[96 in stock]</span>
              </div>
  
              <div className="flex mt-[2rem] gap-[4rem]">
                {currentAccount == nft?.seller?.toLowerCase() && nft?.isSelling == "true" && nft?.isActive != "true" ? (
                  <p className="items-center flex">
                    You cannot buy your own NFT
                  </p>
                ) : currentAccount == nft?.seller?.toLowerCase() && nft?.isActive != "true" ? (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="List on Market"
                  handleClick={() => router.push(`/resellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}

                  classStyle="flex items-center"
                />
                ) : nft?.isSelling == "true" && nft?.isActive != "true" ? (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle="flex items-center"
                />
                ) : (<div className="mr-[-3.5rem]"/>)}
                {currentAccount == nft?.seller?.toLowerCase() && nft?.isActive != "true" && nft?.isSelling != "true" ? (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="List on Auction"
                  handleClick={() => router.push(`/auctionNFT?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}

                  classStyle="flex items-center"
                />
                ) : nft?.isSelling == "true" ? ((<div/>)) : (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="Make offer"
                  handleClick={() => router.push(`/bidNFT?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
                  classStyle="flex items-center"
                />
                )}
              </div>
  
              <div className="mt-[3rem] flex gap-[1rem]">
                <button className="text-[1rem] w-[50%] py-[1rem] px-[2rem] border-0 bg-shadow-dark text-icons-color rounded-[2rem] cursor-pointer font-semibold" onClick={(e) => openTabs(e)}>Bid History</button>
                <button className="text-[1rem] w-[50%] py-[1rem] px-[2rem] border-0 bg-shadow-dark text-icons-color rounded-[2rem] cursor-pointer font-semibold" onClick={() => openOwner()}>Owner</button>
              </div>
  
              {history && (
                <div className="mt-[2rem] p-[1rem]">
                  <NFTTabs dataTab={bidderHistory} />
                </div>
              )}
  
              {owner && (
                <div className="mt-[2rem] p-[1rem]">
                  <NFTTabs dataTab={onwerHistory} icon={<MdVerified />} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  