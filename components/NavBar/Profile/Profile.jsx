import Link from "next/link";
import images from "../../../images";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

export const Profile = ({currentAccount}) => {
    return (
        <div className="absolute py-[2rem] px-[0.5rem] shadow-shadow text-[1rem] w-[20rem] rounded-[1rem] left-[-17rem] top-[4.5rem] z-[22222] bg-main-bg">
            <div className="flex items-center gap-[2rem] p-[1.5rem]">
                <Image 
                    src={images.user1}
                    alt="user profile"
                    width={50}
                    height={50}
                    className="rounded-[50%] h-[55px] w-[55px]"
                />
                <div className="leading-2">
                    <p className="font-semibold">Van Anh</p>
                    <small className="mt-[1rem]">{currentAccount.slice(0, 20)}...</small>
                </div>
            </div>

            <div>
                <div>
                    <div className="flex items-center gap-[2rem] py-[1rem] px-[1.5rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem]">
                        <FaUserAlt />
                        <p>
                            <Link href={{ pathname: '/author' }}>My Profile</Link>
                        </p>
                    </div>
                    <div className="flex items-center gap-[2rem] py-[1rem] px-[1.5rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem]">
                        <FaRegImage />
                        <p>
                            <Link href={{ pathname: '/author' }}>My Items</Link>
                        </p>
                    </div>
                    <div className="flex items-center gap-[2rem] py-[1rem] px-[1.5rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem]">
                        <FaUserEdit />
                        <p>
                            <Link href={{ pathname: '/account' }}>Edit Profile</Link>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-[2rem] py-[1rem] px-[1.5rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem]">
                        <MdHelpCenter />
                        <p>
                            <Link href={{ pathname: '/contact-us' }}>Help</Link>
                        </p>
                    </div>
                    <div className="flex items-center gap-[2rem] py-[1rem] px-[1.5rem] ease-in transition-all hover:bg-icons-color hover:text-shadow-dark rounded-[0.3rem]">
                        <TbDownload />
                        <p>
                            <Link href={{ pathname: '/about-us' }}>About Us</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}