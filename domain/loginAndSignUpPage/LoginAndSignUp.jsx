import React, { useState } from "react";
import Image from "next/image";
import images from "@/images";
import { Button } from "@/components/componentsindex";

export const LoginAndSignUp = () => {
    const [activeBtn, setActiveBtn] = useState(1);
  
    const socialImage = [
      {
        social: images.facebook,
        name: "Continue with Facebook",
      },
      {
        social: images.twitter,
        name: "Continue with Twitter",
      },
      {
        social: images.telegram,
        name: "Continue with Telegram ",
      },
    ];
    return (
      <div className="">
        <div className="">
          <div className="">
            {socialImage.map((el, i) => (
              <div
                key={i + 1}
                onClick={() => setActiveBtn(i + 1)}
                className={`${"flex items-center gap-[2rem] mt-[1.5rem] border-[2px] border-solid border-shadow-dark p-[1rem] rounded-[1rem] text-[1.2rem] cursor-pointer transition-all ease-in hover:shadow-shadow"} ${
                  activeBtn == i + 1 ? "shadow-shadow" : ""
                }`}
              >
                <Image
                  src={el.social}
                  alt={el.name}
                  width={30}
                  height={30}
                  className=""
                />
                <p>
                  <span>{el.name}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-[2rem] relative before:w-[45%] before:border-[1px] before:border-solid before:border-shadow-dark before:top-[2rem] before:left-0 before:absolute after:w-[45%] after:border-[1px] after:border-solid after:border-shadow-dark after:top-[2rem] after:right-0 after:absolute">OR</p>
  
          <div className="mt-[3rem]">
            <div className="grid items-center mt-[1rem]">
              <label className="text-[1.2rem] font-semibold flex justify-between" htmlFor="email">Email address</label>
              <input className="p-[1rem] rounded-[1rem] mt-[0.5rem] outline-0 border-[1px] border-solid border-shadow-dark bg-[transparent]" type="email" placeholder="example@emample.com" />
            </div>
  
            <div className="grid items-center mt-[1rem]">
              <label
                htmlFor="password"
                className="text-[1.2rem] font-semibold flex justify-between"
              >
                <p>Password</p>
                <p>
                  <a href="#">Forget password</a>
                </p>
              </label>
              <input className="p-[1rem] rounded-[1rem] mt-[0.5rem] outline-0 border-[1px] border-solid border-shadow-dark bg-[transparent]" type="password"  placeholder="password"/>
            </div>
          </div>
  
          <Button btnName="Continue" classStyle="w-full mt-[3rem] flex justify-center text-[1.2rem]" />
        </div>
      </div>
    );
};
  