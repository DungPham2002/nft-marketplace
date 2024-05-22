import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import images from "@/images";
import Image from "next/image";


export const DropZone = ({
        title,
        heading,
        subHeading,
        name,
        website,
        description,
        royalties,
        fileSize,
        category,
        properties,
        uploadToPinata,
        setImage
    }) => {
    const [fileUrl, setFileUrl] = useState(null);
  
    const onDrop = useCallback(async (acceptedFile) => {
      const url = await uploadToPinata(acceptedFile[0]);
      setFileUrl(url);
      setImage(url);
    });
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
      maxSize: 5000000,
    });
    return (
      <div className="w-full my-[3rem]">
        <div className="border-[5px] border-dotted border-icons-color rounded-[1rem] text-center p-[1rem] cursor-pointer" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="{Style.DropZone_box_input}">
            <p className="">{title}</p>
            <div className="{Style.DropZone_box_input_img}">
              <Image
                src={images.upload}
                alt="upload"
                width={100}
                height={100}
                className="rounded-[1rem] object-contain mx-auto my-[1rem]"
              />
            </div>
            <p>{heading}</p>
            <p>{subHeading}</p>
          </div>
        </div>
  
        {fileUrl && (
          <aside className="p-[2rem] border-[3px] border-dotted border-icons-color mt-[3rem] rounded-[1px]">
            <div className="grid grid-cols-[1.5fr,4fr] gap-[3rem]">
              <Image
                src={fileUrl}
                alt="nft image"
                width={200}
                height={200}
              />
  
              <div className="{Style.DropZone_box_aside_box_preview}">
                <div className="flex items-center justify-between font-bold text-[1.2rem]">
                  <p>
                    <samp className="text-[1.2rem] mx-[1rem] font-bold">NFT Name:</samp>
                    {name || ""}
                  </p>
                  <p>
                    <samp>Website:</samp>
                    {website || ""}
                  </p>
                </div>
  
                <div className="{Style.DropZone_box_aside_box_preview_two}">
                  <p>
                    <span className="text-[1.2rem] mx-[1rem] font-bold">Description</span>
                    {description || ""}
                  </p>
                </div>
  
                <div className="grid grid-cols-3">
                  <p>
                    <span className="text-[1.2rem] mx-[1rem] font-bold">Royalties</span>
                    {royalties || ""}
                  </p>
                  <p>
                    <span className="text-[1.2rem] mx-[1rem] font-bold">FileSize</span>
                    {fileSize || ""}
                  </p>
                  <p>
                    <span className="text-[1.2rem] mx-[1rem] font-bold">Properties</span>
                    {properties || ""}
                  </p>
                  <p>
                    <span className="text-[1.2rem] mx-[1rem] font-bold">Category</span>
                    {category || ""}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    );
  };