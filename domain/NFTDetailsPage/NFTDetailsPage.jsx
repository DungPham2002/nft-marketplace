import { NFTDescription } from "./NFTDescription/NFTDescription";
import { NFTDetailsImg } from "./NFTDetailsImg/NFTDetailsImg";

export const NFTDetailsPage = ({nft}) => {
    return (
        <div className="w-full my-[5rem]">
            <div className="w-[80%] my-0 mx-auto grid grid-cols-[1.2fr,1fr] gap-[5rem]">
                <NFTDetailsImg nft={nft}/>
                <NFTDescription nft={nft}/>
            </div>
        </div>
    );
}