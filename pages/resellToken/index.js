import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext"
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/componentsindex";


export default function resellToken() {
    const {createSale, setError, setOpenError} = useContext(NFTMarketplaceContext);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
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

    const reSell = async() => {
        try {
            await createSale(tokenURI, price, true, id);
            router.push("/author");
        } catch (error) {
            setError("Error when resell nft");
            setOpenError(true);
        }

    };

    return (
        <div className="w-full my-[4rem]">
            <div className="w-[60%] my-0 mx-auto">
                <h1 className="font-bold text-[3rem]">ReSell Your Token, Set Price</h1>
                <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Price</label>
                        <input
                        type="number"
                        min={1}
                        placeholder="Resell Price"
                        className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="my-[4rem]">
                        {image && (
                            <Image src={image} alt="resel nft" width={400} height={100}/>
                        )}
                    </div>

                    <div>
                        <Button btnName="Resell NFT" handleClick={() => reSell()}/>
                    </div>
            </div>
        </div>
    )
}