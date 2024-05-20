import Image from "next/image";
import { Button } from "../../components/componentsindex.js";
import images from "@/images";


export const Brand = () => {
    return (
      <div className="w-full mt-[8rem] mb-[7rem]">
        <div className="w-[80%] my-0 mx-auto grid grid-cols-[1.5fr,2fr] gap-[5rem] items-center">
          <div className="{Style.Brand_box_left}">
            <Image className="w-[100px] h-[100px]" src={images.logo} alt="brand logo" width={100} height={100} />
            <h1 className="text-[5rem] leading-[1] font-bold">Earn free crypto with Ciscrypt</h1>
            <p className="text-[1.3rem] mt-[1em]">A creative agency that lead and inspire.</p>
  
            <div className="flex items-center gap-[2rem] mt-[3rem]">
              <Button btnName="Create" handleClick={() => {}} />
              <Button btnName="Discover" handleClick={() => {}} />
            </div>
          </div>
          <div className="Style.Brand_box_right}">
            <Image src={images.earn} alt="brand logo" width={800} height={600} />
          </div>
        </div>
      </div>
    );
  };