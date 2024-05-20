import Image from "next/image";
import { useDropzone } from "react-dropzone";
import images from "@/images";
import { Form } from "@/domain/accountPage/accountIndex";
import { useState, useCallback } from "react";


export default function account() {
    const [fileUrl, setFileUrl] = useState(null);
    const onDrop = useCallback(async (acceptedFile) => {
      setFileUrl(acceptedFile[0]);
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
          <div className="mt-[2rem] cursor-pointer relative text-center" {...getRootProps()}>
            <input {...getInputProps()} />
            <Image
              src={images.user1}
              alt="account upload"
              width={150}
              height={150}
              className="rounded-[50%] !h-[150px] w-[150px] max-w-[200px]"
            />
            <p className="text-[1rem] mt-[1rem] font-bold">Change Image</p>
          </div>
          <div className="">
            <Form />
          </div>
        </div>
      </div>
    );
};