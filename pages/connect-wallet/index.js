import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import images from "@/images";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";



export default function connectWalletPage() {
    const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
      {
        provider: images.provider1,
        name: "Metamask",
      },
      {
        provider: images.provider2,
        name: "Coinbase",
      }
    ];
    return (
      <div className="w-full my-[5rem]">
        <div className="w-[50%] my-0 mx-auto">
          <h1 className="text-[3rem] font-extrabold">Connect your wallet</h1>
          <p className="text-[1.5rem] pb-[2rem] border-b-[1px] border-solid border-shadow-dark">
            Connect with one of our avaliabl wallet providers or create a new one
          </p>
  
          <div className="my-[5rem]">
            {providerArray.map((el, i) => (
              <div
                className={`${"flex items-center gap-[2rem] rounded-[1rem] mt-[1.5rem] border-0 border-solid border-shadow-dark p-[1rem] cursor-pointer transition-all ease-in hover:bg-shadow-dark"} ${
                  activeBtn == i + 1 ? "shadow-shadow" : ""
                }`}
                key={i + 1}
                onClick={() => (setActiveBtn(i + 1), connectWallet())}
              >
                <Image
                  src={el.provider}
                  alt={el.provider}
                  width={50}
                  height={50}
                  className="rounded-[50%]"
                />
                <p className="text-[1.5rem]">{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };