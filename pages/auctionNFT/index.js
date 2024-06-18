import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext"
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/componentsindex";


export default function auctionNFT() {
    const {createAuction} = useContext(NFTMarketplaceContext);
    const [minBid, setMinBid] = useState("");
    const [image, setImage] = useState("");
    const [duration, setDuration] = useState("");
    const router = useRouter();
    const { id, tokenURI } = router.query;

    const fetchNFT = async() => {
        if(!tokenURI) return;
        const { data } = await axios.get(tokenURI);
        setImage(data.image);
    };
    useEffect(() => {
        fetchNFT();
    }, [id]);

    const auction = async() => {
        try {
            await createAuction(id, minBid, duration);
        } catch (error) {
            console.log("Error when create auction nft", error);
        }

    };

    return (
        <div className="w-full my-[4rem]">
            <div className="w-[60%] my-0 mx-auto">
                <h1 className="font-bold text-[3rem]">Create Auction, Set Price</h1>
                <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Price</label>
                        <input
                        type="number"
                        min={1}
                        placeholder="Min Bid"
                        className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                        onChange={(e) => setMinBid(e.target.value)}
                        />
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Duration</label>
                        <input
                        type="number"
                        min={1}
                        placeholder="Hour"
                        className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                        onChange={(e) => setDuration(e.target.value * 60 * 60)}
                        />
                    </div>

                    <div className="my-[4rem]">
                        {image && (
                            <Image src={image} alt="resel nft" width={400} height={100}/>
                        )}
                    </div>

                    <div>
                        <Button btnName="Auction NFT" handleClick={() => auction()}/>
                    </div>
            </div>
        </div>
    )
}