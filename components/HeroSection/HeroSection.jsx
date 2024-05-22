import Image from "next/image";
import { Button } from "../componentsindex";
import images from "@/images";
import { useContext } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

export const HeroSection = () => {
  const {titleData} = useContext(NFTMarketplaceContext);
  return (
    <div className="w-[80%] my-[3rem] mx-auto">
      <div className="grid grid-cols-2 gap-[2rem]">
        <div className="pr-[6rem]">
          <h1 className="text-[5rem] font-bold leading-none">{titleData} 🖼️</h1>
          <p className="mb-[2rem]">
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className="">
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
