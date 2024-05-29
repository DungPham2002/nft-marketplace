import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
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
import { useContext, useState } from "react";
import { NFTTabs } from "../NFTTabs/NFTTabs";
import Link from "next/link";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { useRouter } from "next/router";
import { CountDownTimer } from "./CountDownTimer/CountDownTimer";



export const NFTDescription = ({nft}) => {
    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [provanance, setProvanance] = useState(false);
    const [owner, setOwner] = useState(false);

    const { currentAccount, buyNFT } = useContext(NFTMarketplaceContext);
    const router = useRouter();

    const historyArray = [
      images.user1,
      images.user2,
      images.user3,
      images.user4,
      images.user5,
    ];
    const provananceArray = [
      images.user6,
      images.user7,
      images.user8,
      images.user9,
      images.user10,
    ];
    const ownerArray = [
      images.user1,
      images.user8,
      images.user2,
      images.user6,
      images.user5,
    ];
  
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
        setProvanance(false);
        setOwner(false);
      } else if (btnText == "Provanance") {
        setHistory(false);
        setProvanance(true);
        setOwner(false);
      }
    };
  
    const openOwmer = () => {
      if (!owner) {
        setOwner(true);
        setHistory(false);
        setProvanance(false);
      } else {
        setOwner(false);
        setHistory(true);
      }
    };
  
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
                    <TiSocialInstagram /> Instragram
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
                  src={images.user1}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px]"
                />
                <div className="{Style.NFTDescription_box_profile_box_left_info}">
                  <small className="font-medium text-[1rem]">Creator</small> <br />
                  <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                    <span className="font-extrabold flex items-center">
                      Karli Costa <MdVerified className="ml-[0.2rem]"/>
                    </span>
                  </Link>
                </div>
              </div>
  
              <div className="flex items-center gap-[1rem] border-l-[1px] border-solid border-icons-color pl-[2rem]">
                <Image
                  src={images.creatorbackground1}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-[50%] w-[40px] h-[40px]"
                />
  
                <div className="{Style.NFTDescription_box_profile_box_right_info}">
                  <small className="font-medium text-[1rem]">Collection</small> <br />
                  <span className="font-extrabold flex items-center">
                    HIHIHI <MdVerified className="ml-[0.2rem]"/>
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
                {currentAccount == nft.seller.toLowerCase() ? (
                  <p className="items-center flex">
                    You cannot buy your own NFT
                  </p>
                ) : currentAccount == nft.owner.toLowerCase() ? (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="List on Market"
                  handleClick={() => router.push(`/resellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}

                  classStyle="flex items-center"
                />
                ) : (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle="flex items-center"
                />
                )}
                {currentAccount == nft.owner.toLowerCase() ? (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="List on Auction"
                  handleClick={() => router.push(`/auctionNFT?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}

                  classStyle="flex items-center"
                />
                ) : (
                  <Button
                  icon={<FaWallet className="mr-[0.5rem]"/>}
                  btnName="Make offer"
                  handleClick={() => router.push(`/bidNFT?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
                  classStyle="flex items-center"
                />
                )}
              </div>
  
              <div className="mt-[3rem] flex gap-[1rem]">
                <button className="text-[1rem] py-[1rem] px-[2rem] border-0 bg-shadow-dark text-icons-color rounded-[2rem] cursor-pointer font-semibold" onClick={(e) => openTabs(e)}>Bid History</button>
                <button className="text-[1rem] py-[1rem] px-[2rem] border-0 bg-shadow-dark text-icons-color rounded-[2rem] cursor-pointer font-semibold" onClick={(e) => openTabs(e)}>Provanance</button>
                <button className="text-[1rem] py-[1rem] px-[2rem] border-0 bg-shadow-dark text-icons-color rounded-[2rem] cursor-pointer font-semibold" onClick={() => openOwmer()}>Owner</button>
              </div>
  
              {history && (
                <div className="mt-[2rem] p-[1rem]">
                  <NFTTabs dataTab={historyArray} />
                </div>
              )}
              {provanance && (
                <div className="mt-[2rem] p-[1rem]">
                  <NFTTabs dataTab={provananceArray} />
                </div>
              )}
  
              {owner && (
                <div className="mt-[2rem] p-[1rem]">
                  <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  