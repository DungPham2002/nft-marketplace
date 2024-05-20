import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import images from "@/images";

export const Subscribe = () => {
    return (
        <div className="w-full my-[3rem]">
          <div className="w-[80%] my-0 mx-auto py-[8rem] px-0 grid grid-cols-[1.5fr,2fr] items-center">
            <div className="subscribe_box_left">
              <h2 className="text-[3rem] font-bold">Never miss a drop</h2>
              <p className="txet-[1.2rem]">
                Subcribe to our super-exclusive drop list and be the first to know
                abour upcoming drops
              </p>
              <div className="flex items-center gap-[1rem] mt-[2rem]">
                <span className="w-[4rem] bg-icons-color text-main-bg py-[0.5rem] px-[1rem] rounded-[2rem] text-center">01</span>
                <small className="text-[1rem] font-bold">Get more discount</small>
              </div>
    
              <div className="flex items-center gap-[1rem] mt-[2rem]">
                <span className="w-[4rem] bg-icons-color text-main-bg py-[0.5rem] px-[1rem] rounded-[2rem] text-center">02</span>
                <small className="text-[1rem] font-bold">Get premium magazines</small>
              </div>
    
              <div className="mt-[3rem] p-[2rem] w-[80%] rounded-[4rem] bg-icons-color text-main-bg flex items-center">
                <input className="bg-[transparent] border-0 outline-none w-[90%] placeholder:text-[1.2rem] placeholder:text-main-bg placeholder:items-center" type="email" placeholder="Enter your email" />
                <RiSendPlaneFill className="text-[2rem] cursor-pointer" />
              </div>
            </div>
    
            <div className="{Style.subscribe_box_right}">
              <Image
                src={images.update}
                alt="get update"
                height={600}
                width={800}
              />
            </div>
          </div>
        </div>
    );
}