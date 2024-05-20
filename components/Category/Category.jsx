import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import images from "@/images";

export const Category = () => {
  const categoryArray = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
    images.creatorbackground5,
    images.creatorbackground10,
    images.creatorbackground11
  ];
  return (
    <div className="w-[80%] my-0 mx-auto">
      <div className="py-[4rem] px-0 grid grid-cols-6 gap-[2rem]">
        {categoryArray.map((el, i) => (
          <div
            className="pb-[1rem] transition-all ease-in rounded-[1rem] cursor-pointer overflow-hidden hover:shadow-shadow"
            key={i + 1}
          >
            <Image
              src={el}
              className="rounded-[1rem] object-cover h-[118px]"
              alt="Background image"
              width={350}
              height={150}
            />

            <div className="flex items-end p-[1rem] gap-[1rem]">
              <span className="text-[3rem]">
                <BsCircleFill />
              </span>
              <div className="">
                <h4>Enterainment</h4>
                <small>1995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
