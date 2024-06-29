import images from "@/images";
import { useContext, useState, useEffect } from "react"
import { BsSearch } from "react-icons/bs";
import { Discover } from "./Discover/Discover";
import { HelpCenter } from "./HelpCenter/HelpCenter";
import { MdNotifications } from "react-icons/md";
import { Button } from "../Button/Button";
import { Notification } from "./Notification/Notification";
import { Profile } from "./Profile/Profile";
import { SideBar } from "./SideBar/SideBar";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { getNotify } from "@/api/notification.api";
import { updateNotify } from "@/api/notification.api";
import { SOCKET_URL } from "@/datas";

export const NavBar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideBarMenu, setOpenSideBarMenu] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const router = useRouter();
    const { currentAccount, userProfile } = useContext(NFTMarketplaceContext);
  
    useEffect(() => {
      const fetchNotifications = async () => {
        try {
          const notifyData = await getNotify();
          setNotifications(notifyData);
          const unreadCount = notifyData.filter(notification => !notification.isRead).length;
          setUnreadCount(unreadCount);
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      };
  
      fetchNotifications();
  
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('No access token found');
        return;
      }
      const socket = io(`${SOCKET_URL}`, {
        cor: { origin: ['*'] },
        auth: {
          Authorization: `Bearer ${accessToken}`,
        },
        transports: ['websocket'],
      });
  
      socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });
  
      socket.on('disconnect', (reason) => {
        console.log(`Disconnected: ${reason}`);
      });
  
      socket.on('connect_error', (error) => {
        console.error('Connection Error:', error);
      });
  
      socket.on('notification', (data) => {
        setNotifications((prevNotifications) => [...prevNotifications, data]);
        setUnreadCount((prevCount) => prevCount + 1);
      });
  
      return () => {
        socket.disconnect();
      };
    }, []);
  
    const openDiscover = () => {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    };
  
    const openHelp = () => {
      setHelp(!help);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    };
  
    const openNotification = async () => {
      if (unreadCount > 0) {
        try {
          setNotifications(notifications.map(notification => ({ ...notification })));
          setUnreadCount(0);
        } catch (error) {
          console.error('Error updating notifications:', error);
        }
      }
      setNotification(!notification);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    };
  
    const openProfile = () => {
      setProfile(!profile);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    };
  
    const openSideBar = () => {
      setOpenSideBarMenu(!openSideBarMenu);
    };
  
    return (
      <div className="w-full z-[11111] p-6 relative">
        <div className="w-4/5 my-0 mx-auto grid grid-cols-2 items-center justify-between gap-4 max-[768px]:grid-cols-1">
          <div className="grid grid-cols-[1fr,2fr] items-center max-[768px]:grid-cols-1">
            <div className="">
              <Image
                src={images.logo}
                alt="NFT MARKET PLACE"
                width={100}
                height={100}
                className=""
                onClick={() => router.push('/')}
              />
            </div>
            <div className="">
              <div className="w-3/5 h-[38px] border border-icons-color flex items-center px-2 rounded-full overflow-hidden max-[768px]:hidden">
                <input type="text" placeholder="Search NFT" className="w-full border-none outline-none bg-[transparent] max-[768px]:hidden" />
                <BsSearch onClick={() => {}} className="cursor-pointer text-lg" />
              </div>
            </div>
          </div>
  
          {/* //END OF LEFT SECTION */}
          <div className="grid grid-cols-5 gap-4 items-center max-[768px]:grid-cols-3 justify-items-center">
            <div className="relative cursor-pointer max-[768px]:hidden">
              {/* DISCOVER MENU */}
              <p onClick={() => openDiscover()}>Discover</p>
              {discover && (
                <div className="absolute top-[3.5rem] py-[1rem] px-[0.5rem] shadow-shadow rounded-lg text-base w-60 bg-main-bg">
                  <Discover />
                </div>
              )}
            </div>
  
            {/* HELP CENTER MENU */}
            <div className="relative cursor-pointer max-[768px]:hidden">
              <p onClick={() => openHelp()}>Help Center</p>
              {help && (
                <div className="absolute top-[3.5rem] py-[1rem] px-[0.5rem] shadow-shadow rounded-lg text-base w-60 bg-main-bg">
                  <HelpCenter />
                </div>
              )}
            </div>
  
            {/* NOTIFICATION */}
            <div className="relative cursor-pointer">
              <MdNotifications
                className="text-2xl relative"
                onClick={() => openNotification()}
              />
              {unreadCount > 0 && (
                <span className="bg-[red] absolute top-0 right-0 h-[0.3rem] w-[0.3rem] bg-red-500 rounded-full outer-circle"></span>
              )}
              {notification && <Notification notifications={notifications} />}
            </div>
  
            {/* CREATE BUTTON SECTION */}
            <div className="relative cursor-pointer max-[768px]:hidden">
              {currentAccount === '' ? (
                <Button btnName="Connect" handleClick={() => router.push('connect-wallet')} />
              ) : (
                <Button btnName="Create" handleClick={() => router.push('upload-NFT')} />
              )}
            </div>
  
            {/* USER PROFILE */}
            <div className="relative cursor-pointer">
              <div className="rounded-full">
                <Image
                  src={userProfile?.avatar || images.user1}
                  alt="Profile"
                  width={40}
                  height={40}
                  onClick={() => openProfile()}
                  className="rounded-[50%] h-[40px] w-[40px]" 
                />
  
                {profile && <Profile currentUser={userProfile} />}
              </div>
            </div>
  
            {/* MENU BUTTON */}
            <div className="hidden max-[768px]:block">
              <CgMenuRight
                className="text-2.5xl cursor-pointer"
                onClick={() => openSideBar()}
              />
            </div>
          </div>
        </div>
  
        {/* SIDEBAR */}
        {openSideBarMenu && (
          <div className="fixed top-0 w-full p-0 bg-main-bg hidden z-[11111] shadow-shadow h-screen overflow-y-auto max-[768px]:block [&::-webkit-scrollbar]">
            <SideBar setOpenSideBarMenu={setOpenSideBarMenu} />
          </div>
        )}
      </div>
    );
  };