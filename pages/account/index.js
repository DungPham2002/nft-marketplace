import Image from "next/image";
import { useDropzone } from "react-dropzone";
import images from "@/images";
import { Form } from "@/domain/accountPage/accountIndex";
import { useState, useCallback, useContext, useEffect } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { getUserProfile } from "@/api/user.api";

export default function account() {
  const { uploadToPinata } = useContext(NFTMarketplaceContext);
  const [userProfile, setUserProfile] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    getUserProfile().then((user) => {
      setUserProfile(user);
    });
  }, []);

  useEffect(() => {
    if (userProfile?.avatar) {
      setImage(userProfile?.avatar);
    }
  }, [userProfile])

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      try {
        const imageUrl = await uploadToPinata(file);
        setImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className="w-full my-[6rem]">
      <div className="w-[50%] my-0 mx-auto border-b-[1px] border-solid border-shadow-dark">
        <h1 className="text-[4rem] font-extrabold">Profile settings</h1>
        <p className="text-[1.3rem] w-[80%] pb-[0.5rem]">
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className="w-[50%] my-0 mx-auto grid grid-cols-[1fr,5fr] mt-[3rem] gap-[3rem] items-start">
        <div
          className="mt-[2rem] cursor-pointer relative text-center"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Image
            src={(image!="") ? image : images.user1}
            alt="account upload"
            width={150}
            height={150}
            className="rounded-[50%] !h-[150px] w-[150px] max-w-[200px]"
          />
          <p className="text-[1rem] mt-[1rem] font-bold">Change Image</p>
        </div>
        <div className="">
          <Form userProfile={userProfile} image={image} />
        </div>
      </div>
    </div>
  );
}
