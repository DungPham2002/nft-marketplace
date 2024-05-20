import { Category, Brand } from "@/components/componentsindex";
import { NFTDetailsPage } from "@/domain/NFTDetailsPage/NFTDetailsPage";
export default function NFTDetails() {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};