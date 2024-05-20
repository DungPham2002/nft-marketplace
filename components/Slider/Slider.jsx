import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { SliderCard } from "./SliderCard/SliderCard";
import { scrollAmount } from "./constant";
import images from "@/images";

export const Slider = () => {
  const FollowingArray = [
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
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

  
    useEffect(() => {
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll = (direction) => {
      if (isScrolling.current) return;
      let start = dragSlider.current.scrollLeft;
      let end = direction === 'left' ? start - scrollAmount : start + scrollAmount;
      let startTime = null;

      const animateScroll = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, start, end - start, 500);
          dragSlider.current.scrollLeft = run;
          if (timeElapsed < 500) requestAnimationFrame(animateScroll);
      };

      const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }; 
  
    return (
      <div className="w-full">
        <div className="w-[80%] my-0 mx-auto pt-0 pr-[-1rem] pb-[8rem] pl-0">
          <h2 className="text-[3rem] font-bold">Explore NFTs Video</h2>
          <div className="flex justify-between items-center">
            <p>Click on play icon & enjoy Nfts Video</p>
            <div className="flex items-center gap-[2rem] text-[2rem]">
            <div
              className="p-[1rem] border-[1px] border-solid border-icons-color flex items-center rounded-[50%] transition-all ease-in cursor-pointer hover:bg-icons-color hover:text-main-bg hover:shadow-shadow"
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className="p-[1rem] border-[1px] border-solid border-icons-color flex items-center rounded-[50%] transition-all ease-in cursor-pointer hover:bg-icons-color hover:text-main-bg hover:shadow-shadow"
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
          </div>
  
          <motion.div className="w-full overflow-hidden" ref={dragSlider}>
            <motion.div
              ref={dragSlider}
              className="grid gap-[1rem] py-[4rem] px-[2rem] cursor-grab grid-cols-[repeat(6,24rem)]"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
            >
              {FollowingArray.map((el, i) => (
                <SliderCard key={i + 1} el={el} i={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
};