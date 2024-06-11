import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { Button } from "@/components/componentsindex";
import {  useEffect, useState } from "react";
import { updateUserProfile } from "@/api/user.api";


export const Form = ({userProfile,image}) => {
    const [name, setName] = useState(userProfile?.name);
    const [email, setEmail] = useState(userProfile?.email);
    const [description, setDescription] = useState(userProfile?.description);
    const [youtube, setYoutube] = useState(userProfile?.youtube);
    const [facebook, setFacebook] = useState(userProfile?.facebbook);
    const [twitter, setTwitter] = useState(userProfile?.twitter);
    const [instagram, setInstagram] = useState(userProfile?.instagram);
    const [avatar, setAvatar] = useState(userProfile?.avatar);

    useEffect(() => {
        setAvatar(image);
    }, [image]);
    
    const handleSubmit = async () => {
    try {
        await updateUserProfile(name, email, avatar, description, youtube, facebook, twitter, instagram);
        console.log("Profile updated successfully");
    } catch (error) {
        console.error("Error updating profile:", error);
    }
    };
    return (
        <div className="w-full">
            <div className="{Style.Form_box}">
                <form>
                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Username</label>
                    <input
                    type="text"
                    placeholder={userProfile?.name || "Name"}
                    onChange={e => setName(e.target.value)}
                    className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    />
                </div>

                <div className="mt-[2rem]">
                    <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="email">Email</label>
                    <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <HiOutlineMail />
                    </div>
                    <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder={userProfile?.email || "Email*"} onChange={e => setEmail(e.target.value)} />

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
                        placeholder={userProfile?.description || "something about yourself in few words"}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-[1rem]">
                    <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="facebook">Facebook</label>
                        <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                            <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                            <TiSocialFacebook />
                            </div>
                            <input 
                                className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" 
                                type="text" 
                                placeholder={userProfile?.facebook || "facebook.com"} 
                                onChange={e => setFacebook(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="Twitter">Twitter</label>
                        <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                            <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                            <TiSocialTwitter />
                            </div>
                            <input 
                                className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" 
                                type="text" placeholder={userProfile?.twitter || "twitter.com"} 
                                onChange={e => setTwitter(e.target.value)}
                            />

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[1rem]">
                    <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="facebook">Youtube</label>
                        <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                            <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                            <TiSocialYoutube />
                            </div>
                            <input 
                                className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" 
                                type="text" 
                                placeholder={userProfile?.youtube || "youtube.com"} 
                                onChange={e => setYoutube(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-[2rem]">
                        <label className="block w-full ml-[1rem] font-bold text-[1.3rem]" htmlFor="Twitter">Instagram</label>
                        <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                            <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                            <TiSocialInstagram />
                            </div>
                            <input 
                                className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" 
                                type="text" placeholder={userProfile?.instagram || "instagram.com"} 
                                onChange={e => setInstagram(e.target.value)}
                            />

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
                        disabled
                        placeholder={userProfile?.address}
                    />
                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                        <MdOutlineContentCopy />
                    </div>
                    </div>
                </div>

                <div className="my-[4rem] mx-0">
                    <Button
                        btnName="Upload profile"
                        handleClick={() => handleSubmit()}
                        classStyle="w-full flex justify-center text-[1.5rem]"
                    />
                </div>
                </form>
            </div>
        </div>
    );
};