import Image from "next/image";
import images from "@/images";

export const Video = () => {
    return (
        <div className="w-full mt-[14rem] mb-[5rem]">
            <div className="w-[80%] my-0 mx-auto">
                <h1 className="text-[3rem] font-bold">
                    <span>🎬</span> The Videos
                </h1>
                <p className="text-[1.3rem] w-[40%] leading-[1.2]">
                    Check out our hottest videos. View more and share more new
                    perspectives on just about any topic. Everyone’s welcome.
                </p>
    
                <div className="grid grid-cols-8 gap-[1rem] p-[5rem] mt-[6rem]">
                    <div className="col-start-1 col-end-8 row-start-1 row-end-[-1] z-[111]">
                    <Image
                        src={images.nftvideo}
                        alt="Video image"
                        width={1920}
                        height={1080}
                        className="rounded-[1rem] object-cover"
                    />
                    </div>
        
                    <div className="col-start-3 col-end-[-1] bg-icons-color rounded-[1rem] row-start-1 row-end-[-1] py-[3rem] px-0 mt-[-5rem] shadow-shadow">Hey</div>
                </div>
            </div>
        </div>
    );
};