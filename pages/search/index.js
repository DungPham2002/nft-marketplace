import { Slider, Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/domain/searchPage/searchBarIndex";
import { NFTCardTwo, Banner } from "@/domain/collectionPage/collectionIndex";
import images from "@/images";

export default function SearchPage() {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ];
    return (
        <div className="">
          <Banner bannerImage={images.creatorbackground2} />
          <SearchBar />
          <Filter />
          <NFTCardTwo NFTData={collectionArray} />
          <Slider />
          <Brand />
        </div>
    );
}