import { useEffect, useState } from "react";

export const CountDownTimer = ({ targetDate }) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(null);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      return difference > 0 ? difference : 0;
    };

    setCountDown(calculateCountdown());

    const interval = setInterval(() => {
      setCountDown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  if (countDown === null) {
    return null;
  }

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className="flex gap-[3rem] items-center">
      <div className="{Style.NFTDescription_box_profile_biding_box_timer_item}">
        <div className="text-[3rem] font-black">{days}</div>
        <span className="font-semibold">Days</span>
      </div>
      <div className="{Style.NFTDescription_box_profile_biding_box_timer_item}">
        <div className="text-[3rem] font-black">{hours}</div>
        <span className="font-semibold">hours</span>
      </div>
      <div className="{Style.NFTDescription_box_profile_biding_box_timer_item}">
        <div className="text-[3rem] font-black">{minutes}</div>
        <span className="font-semibold">mins</span>
      </div>
      <div className="{Style.NFTDescription_box_profile_biding_box_timer_item}">
        <div className="text-[3rem] font-black">{seconds}</div>
        <span className="font-semibold">secs</span>
      </div>
    </div>
  );
};