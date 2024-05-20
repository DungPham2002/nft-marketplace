import Image from "next/image";
import images from "@/images";

export const Notification = () => {
  return (
    <div className="absolute py-8 px-4 shadow-shadow w-[25rem] text-base rounded-2xl left-[-20rem] top-[3.5rem] z-[22222] bg-main-bg max-[768px]:w-[20rem] max-[768px]:left-[-15rem]">
      <p className="text-[1.3rem] font-semibold mb-[2rem]">Notification</p>
      <div className="flex items-center gap-[1rem] p-[1rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem] max-[768px]:p-[0.3rem] justify-items-center">
        <div className="">
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-[5rem] h-[55px] w-[55px]"
          />
        </div>
        <div className="">
          <h4 className="font-semibold">Van Anh</h4>
          <p className="text-[15px] leading-[0.3rem] relative mt-[0.3rem] max-[768px]:text-[12px]">
            Measure action your user...
          </p>
          <small className="">3 minutes ago</small>
        </div>
        <span className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[aqua]"></span>
      </div>
    </div>
  );
};
