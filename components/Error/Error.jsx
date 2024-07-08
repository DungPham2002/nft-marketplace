import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext"
import images from "@/images";
import Image from "next/image";
import { useContext } from "react"

export const Error = () => {
    const {error, setOpenError} = useContext(NFTMarketplaceContext);
    return (
        <div className="Error bg-overlay w-full h-full fixed z-1111111 top-0 cursor-pointer" onClick={() => setOpenError(false)}>
            <div className="Error_box absolute top-[25%] left-[30%] bg-icons-bg py-[2rem] px-[5rem] rounded-[1rem] shadow-shadow-1 text-center w-[40%]">
                <div className="Error_box_info">
                    <Image 
                        alt="error"
                        src={images.error}
                        width={200}
                        height={200}
                        objectFit="cover"
                        className="error_box_info_img mx-auto"
                    />
                    <p className="error_box_info_text text-[1.3rem] text-icons-color">{error}</p>
                </div>
            </div>
        </div>
    )
}