import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { Category, Brand } from "@/components/componentsindex";
import { NFTDetailsPage } from "@/domain/NFTDetailsPage/NFTDetailsPage";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";


export default function NFTDetails() {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [nft, setNft] = useState({
    name: "",
    image: "",
    tokenId: "",
    owner: "",
    price: "",
    seller: "",
    endTime: "",
    likeCount: "",
    isLiked: "",
    tokenURI: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { name, image, description, tokenId, owner, price, seller, minBid, endTime, highestBid, tokenURI, likeCount, isLiked} = router.query;
    const formattedEndTime = dayjs(endTime).toDate();

    setNft({
      name,
      image,
      description,
      tokenId,
      owner,
      price,
      seller,
      minBid,
      highestBid,
      tokenURI,
      endTime: formattedEndTime,
      likeCount,
      isLiked,
    });
  }, [router.isReady, router.query]);

  return (
    <div>
      <NFTDetailsPage nft={nft}/>
      <Category />
      <Brand />
    </div>
  );
};  