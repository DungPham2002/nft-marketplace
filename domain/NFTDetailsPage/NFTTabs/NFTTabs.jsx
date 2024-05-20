import Image from "next/image";



export const NFTTabs = ({ dataTab, icon }) => {
    return (
        <div className="">
            {dataTab.map((el, i) => (
            <div className="flex items-center gap-[1rem] py-[1rem] px-0 border-b-[1px] border-solid border-b-shadow-dark" key={i + 1}>
                <Image
                    src={el}
                    alt="profile image"
                    width={40}
                    height={40}
                    className="rounded-[50%] h-[40px] w-[40px]"
                />
                <div className="grid self-start mt-[6px]">
                    <span className="flex font-bold items-center">
                        Offer by $770 by<span className="mx-[0.2rem]">Shoaib Bhai</span>
                        {icon}
                    </span>
        
                    <small className="mt-[0.2rem]">Jun 14 - 4:12 PM</small>
                </div>
            </div>
            ))}
        </div>
    );
};