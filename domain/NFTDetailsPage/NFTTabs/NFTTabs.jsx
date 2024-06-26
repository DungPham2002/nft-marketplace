import Image from "next/image";
import images from "@/images";
import dayjs from "dayjs";



export const NFTTabs = ({ dataTab, icon }) => {
    return (
        <div className="">
            {dataTab?.map((el, i) => (
            <div className="flex items-center gap-[1rem] py-[1rem] px-0 border-b-[1px] border-solid border-b-shadow-dark" key={i + 1}>
                <Image
                    src={el.owner?.avatar || el.bidder?.avatar || images.user1}
                    alt="profile image"
                    width={40}
                    height={40}
                    className="rounded-[50%] h-[40px] w-[40px]"
                />
                <div className="grid self-start mt-[6px]">
                    <span className="flex font-bold items-center">
                        {el.bidder ? `Offer by ${el.price} ETH by` : "Owner"}
                        <span className="mx-[0.2rem]">{el.owner?.address.slice(0,15) || el.bidder?.address.slice(0,15) || "..."}</span>
                        {icon}
                    </span>
        
                    <small className="mt-[0.2rem]">{dayjs(el?.created_at).toDate().toDateString()}</small>
                </div>
            </div>
            ))}
        </div>
    );
};