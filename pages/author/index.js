import { AuthorNFTCardBox, AuthorProfileCard, AuthorTabs } from "@/domain/authorPage/authorIndex";
import { Banner } from "@/domain/collectionPage/collectionIndex";
import { Brand, Title } from "@/components/componentsindex";
import { FollowerTabCard } from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "@/images";
import { useState } from "react";

export default function authorPage() {
    const followerArray = [
      {
        background: images.creatorbackground1,
        user: images.user1,
      },
      {
        background: images.creatorbackground2,
        user: images.user2,
      },
      {
        background: images.creatorbackground3,
        user: images.user3,
      },
      {
        background: images.creatorbackground4,
        user: images.user4,
      },
      {
        background: images.creatorbackground5,
        user: images.user5,
      },
      {
        background: images.creatorbackground6,
        user: images.user6,
      },
    ];
  
    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
  
    return (
      <div className="">
        <Banner bannerImage={images.creatorbackground2} />
        <AuthorProfileCard />
        <AuthorTabs
          setCollectiables={setCollectiables}
          setCreated={setCreated}
          setLike={setLike}
          setFollower={setFollower}
          setFollowing={setFollowing}
        />
  
        <AuthorNFTCardBox
          collectiables={collectiables}
          created={created}
          like={like}
          follower={follower}
          following={following}
        />
        <Title
          heading="Popular Creators"
          paragraph="Click on music icon and enjoy NTF music or audio"
        />
        <div className="w-[80%] my-0 mx-auto grid grid-cols-4 gap-[2rem] mt-[6rem]">
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
  
        <Brand />
      </div>
    );
  };