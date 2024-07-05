import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "@/images";

export const DaysComponent = ({el, i}) => {
  return (
    <div className="w-full rounded-[1rem] transition-all ease-in cursor-pointer hover:shadow-shadow">
      <div className="">
        <div className="">
          <Image
            src={el.background}
            className="rounded-[1rem] object-cover h-[256px]"
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className="grid grid-cols-3 gap-[0.5rem] mt-[0.5rem]">
          <Image
            src={images.creatorbackground1}
            alt="profile"
            width={200}
            height={200}
            className="rounded-bl-[1rem] object-cover"
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={200}
            height={200}
            className="object-cover"
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={200}
            height={200}
            className="rounded-br-[1rem] object-cover"
          />
        </div>

        <div className="py-[1rem] px-[2rem]">
          <h2 className="text-[1.5rem] font-bold">Amazing Collection</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[1rem]">
              <Image
                src={images.user1}
                alt="profile"
                width={30}
                height={30}
                className="rounded-[50%] h-[30px] w-[30px] object-cover"
              />

              <p className="flex">
                Creator
                <span className="px-[0.5rem] font-semibold flex items-center">
                  UnName
                  <small>
                    <MdVerified className="ml-[0.2rem]"/>
                  </small>
                </span>
              </p>
            </div>

            <div className="p-[0.5rem] rounded-[0.5rem] font-semibold border-[3px] border-solid border-icons-color">
              <small>0.001 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};