import React from "react";
import Image from "next/image";
import images from "@/images";
export const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className="flex items-start">
      {imageArray.map((el, i) => (
        <div className="rounded-[50%] border-[3px] border-solid border-icons-color" key={i + 1}>
          <Image
            src={el}
            width={20}
            height={20}
            key={i + 1}
            className="rounded-[50%] h-[20px] w-[20px]"
          />
        </div>
      ))}
    </div>
  );
};