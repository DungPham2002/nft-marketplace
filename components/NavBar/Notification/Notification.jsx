import Image from "next/image";
import images from "@/images";
import { updateNotify } from "@/api/notification.api";
import { useState } from "react";

export const Notification = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState([...notifications].reverse());

  const handleNotificationClick = async (id) => {
    await updateNotify(id);

    const updatedNotifications = notificationList.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotificationList(updatedNotifications);
  };

  return (
    <div className="absolute py-8 px-4 shadow-shadow w-[25rem] text-base rounded-2xl left-[-20rem] top-[3.5rem] z-[22222] bg-main-bg max-[768px]:w-[20rem] max-[768px]:left-[-15rem]">
      <p className="text-[1.3rem] font-semibold mb-[2rem]">Notification</p>
      <div className="overflow-y-auto max-h-[300px]">
        {notificationList.slice(0, 5).map((el, i) => (
          <div
            key={i}
            className="flex items-center gap-[1.5rem] p-[1rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem] max-[768px]:p-[0.3rem] justify-items-center cursor-pointer"
            onClick={() => handleNotificationClick(el.id)}
          >
            <div className="">
              <Image
                src={el.avatar || images.user1}
                alt="profile image"
                width={50}
                height={50}
                className="rounded-[5rem] h-[55px] w-[55px]"
              />
            </div>
            <div className="">
              <h4 className="font-semibold">{el?.address?.slice(0, 13)}...</h4>
              <p className="text-[15px] leading-[0.3rem] relative mt-[0.3rem] max-[768px]:text-[12px]">
                {el.message}
              </p>
            </div>
            {el.image && (
              <Image 
                src={el.image}
                alt="nft image"
                width={50}
                height={50}
                className="mr-[]"
              />
            )}
            {!el.isRead && (
              <span className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[aqua]"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
