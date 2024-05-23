import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { Category, Brand } from "@/components/componentsindex";
import { NFTDetailsPage } from "@/domain/NFTDetailsPage/NFTDetailsPage";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function NFTDetails() {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [nft, setNft] = useState({
    name: "",
    image: "",
    tokenId: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }), [router.isReady];

  return (
    <div>
      <NFTDetailsPage nft={nft}/>
      <Category />
      <Brand />
    </div>
  );
};