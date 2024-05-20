import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { Button } from "@/components/componentsindex";


export const Form = () => {
    return (
        <div className="w-full">
            <div className="{Style.Form_box}">
                <form>
                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Username</label>
                    <input
                    type="text"
                    placeholder="shoaib bhai"
                    className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    />
                </div>

                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="email">Email</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <HiOutlineMail />
                    </div>
                    <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="Email*" />
                    </div>
                </div>
        
                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="description">Description</label>
                    <textarea
                        className="border-[1px] border-solid border-icons-color w-full bg-[transparent] outline-none rounded-[1rem] p-[1rem] placeholder:text-[1.2rem] placeholder:text-icons-color"
                        name=""
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="something about yourself in few words"
                    ></textarea>
                </div>

                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="website">Website</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <MdOutlineHttp />
                    </div>

                    <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="website" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[1rem]">
                    <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="facebook">Facebook</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                        <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <TiSocialFacebook />
                        </div>
                        <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="http://shoaib" />
                    </div>
                    </div>
                    <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="Twitter">Twitter</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                        <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <TiSocialTwitter />
                        </div>
                        <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="http://shoaib" />
                    </div>
                    </div>
                    <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="Instragram">Instragram</label>
                        <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                            <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                            <TiSocialInstagram />
                            </div>
                            <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="http://shoaib" />
                        </div>
                    </div>
                </div>

                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="wallet">Wallet address</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <MdOutlineHttp />
                    </div>
                    <input
                        className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                        type="text"
                        placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                    />
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <MdOutlineContentCopy />
                    </div>
                    </div>
                </div>

                <div className="my-[4rem] mx-0">
                    <Button
                    btnName="Upload profile"
                    handleClick={() => {}}
                    classStyle="w-full flex justify-center text-[1.5rem]"
                    />
                </div>
                </form>
            </div>
        </div>
    );
};