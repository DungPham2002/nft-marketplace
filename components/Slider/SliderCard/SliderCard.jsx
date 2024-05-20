import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/images";


export const SliderCard = ({el, i}) => {
    return (
      <motion.div className="p-[1rem]">
        <div className="pb-[1rem] rounded-[2rem] transition-all ease-in hover:shadow-shadow">
          <motion.div className="">
            <Image
              src={el.background}
              className="rounded-[2rem] object-cover h-[220px]"
              alt="slider profile"
              width={500}
              height={300}
            />
          </motion.div>
          <div className="flex items-center px-[2rem] justify-between gap-[1rem] pt-[1rem]">
            <p className="text-[1.3rem] font-extrabold">NFT Video #1245</p>
            <div className="flex gap-[5rem] items-center">
              {/* <LikeProfile /> */}
              <small className="text-[1rem]">1 of 100</small>
            </div>
          </div>
  
          <div className="flex justify-between px-[2rem] mt-[1rem] text-center">
            <div className="border-[1px] border-solid border-icons-color py-[0.2rem] px-[1rem] rounded-[0.2rem]">
              <small className="p-[1rem] rounded-[0.2rem] bg-icons-color text-main-bg">Current Bid</small>
              <p className="text-[1.3rem] font-bold mt-[1rem]">1.000 ETH</p>
            </div>
  
            <div className="grid items-end">
              <small>Reaming time</small>
              <p className="text-[1.3rem] font-bold">3h : 15m : 20s</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };