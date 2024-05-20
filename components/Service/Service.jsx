import images from "@/images"
import Image from "next/image"

export const Service = () => {
    return (
        <div className="w-[80%] my-[12rem] mx-auto">
            <div className="grid grid-cols-4 gap-[3rem] text-center">
                <div className="">
                    <Image
                        src={images.service1}
                        alt="Filter & Discover"
                        width={100}
                        height={100}
                        className="m-auto"
                    />
                    <p className="mt-[3rem] mb-[2rem]">
                        <span className="py-[0.5rem] px-[1.5rem] rounded-[5rem] bg-icons-color text-shadow-dark">Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>
                        Connect with wallet, discover, buy NTFs, sell your NFTs and earn
                        money
                    </p>
                </div>
                <div className="service_box_item">
                    <Image
                        src={images.service2}
                        alt="Filter & Discover"
                        width={100}
                        height={100}
                        className="m-auto"
                    />
                    <p className="mt-[3rem] mb-[2rem]">
                        <span className="py-[0.5rem] px-[1.5rem] rounded-[5rem] bg-icons-color text-shadow-dark">Step 2</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>
                        Connect with wallet, discover, buy NTFs, sell your NFTs and earn
                        money
                    </p>
                </div>
                <div className="service_box_item">
                    <Image
                        src={images.service3}
                        alt="Conect Wallet"
                        width={100}
                        height={100}
                        className="m-auto"
                    />
                    <p className="mt-[3rem] mb-[2rem]">
                        <span className="py-[0.5rem] px-[1.5rem] rounded-[5rem] bg-icons-color text-shadow-dark">Step 3</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>
                        Connect with wallet, discover, buy NTFs, sell your NFTs and earn
                        money
                    </p>
                </div>
                <div className="service_box_item">
                    <Image
                        src={images.service4}
                        alt="Filter & Discover"
                        width={100}
                        height={100}
                        className="m-auto"
                    />
                    <p className="mt-[3rem] mb-[2rem]">
                        <span className="py-[0.5rem] px-[1.5rem] rounded-[5rem] bg-icons-color text-shadow-dark">Step 4</span>
                    </p>
                    <h3>Start Trading</h3>
                    <p>
                        Connect with wallet, discover, buy NTFs, sell your NFTs and earn
                        money
                    </p>
                </div>
            </div>
        </div>
    )
}