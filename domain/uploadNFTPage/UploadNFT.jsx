import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import images from "@/images";
import { Button } from "@/components/componentsindex";
import { DropZone } from "./uploadNFTIndex";
import Router, { useRouter } from "next/router";



export const UploadNFT = ({ uploadToPinata, createNFT }) => {
    const [active, setActive] = useState(0);
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [royalties, setRoyalties] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [category, setCategory] = useState(0);
    const [properties, setProperties] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const router = useRouter();
  
    const categoryArry = [
      {
        image: images.nft_image_1,
        category: "Sports",
      },
      {
        image: images.nft_image_2,
        category: "Arts",
      },
      {
        image: images.nft_image_3,
        category: "Music",
      },
      {
        image: images.nft_image_1,
        category: "Digital",
      },
      {
        image: images.nft_image_2,
        category: "Time",
      },
      {
        image: images.nft_image_3,
        category: "Photography",
      },
    ];
  
    return (
      <div className="{Style.upload}">
        <DropZone
          title="JPG, PNG, WEBM , MAX 100MB"
          heading="Drag & drop file"
          subHeading="or Browse media on your device"
          name={name}
          website={website}
          description={description}
          royalties={royalties}
          fileSize={fileSize}
          category={category}
          properties={properties}
          setImage={setImage}
          uploadToPinata={uploadToPinata}
        />
  
        <div className="{Style.upload_box}">
          <div className="mt-[2rem]">
            <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="nft">Item Name</label>
            <input
              type="text"
              placeholder="Item Name"
              className="w-full border-[1px] border-solid border-icons-color p-[1rem] rounded-[1rem] bg-[transparent] mt-[0.5rem] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          <div className="mt-[2rem]">
            <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="website">Website</label>
            <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
              <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                <MdOutlineHttp />
              </div>
  
              <input
                    className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    type="text"
                    placeholder="website"
                    onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
  
            <p className="pt-[0.5rem] px-[1rem]">
              Ciscrypt will include a link to this URL on this item's detail page,
              so that users can click to learn more about it. You are welcome to
              link to your own webpage with more details.
            </p>
          </div>
  
          <div className="mt-[2rem]">
            <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="description">Description</label>
            <textarea
                className="border-[1px] border-solid border-icons-color w-full bg-[transparent] outline-none rounded-[1rem] p-[1rem] placeholder:text-[1.2rem] placeholder:text-icons-color"
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="something about yourself in few words"
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p>
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
          </div>
  
          <div className="mt-[2rem]">
            <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="name">Choose collection</label>
            <p className="py-0 px-[1rem]">
              Choose an exiting collection or create a new one
            </p>
  
            <div className="flex gap-[1rem]">
              {categoryArry.map((el, i) => (
                <div
                  className={`${"border-[1px] border-solid border-icons-color rounded-[1rem] p-[1rem] cursor-pointer"} ${
                    active == i + 1 ? "bg-icons-color text-main-bg" : ""
                  }`}
                  key={i + 1}
                  onClick={() => (setActive(i + 1), setCategory(el.category))}
                >
                  <div className="flex items-center gap-[3rem]">
                    <div className="{Style.upload_box_slider_box_img}">
                      <Image
                        src={el.image}
                        alt="background image"
                        width={70}
                        height={70}
                        className="rounded-[50%] w-[42px] h-[42px] max-w-[100px]"
                      />
                    </div>
                    <div className="bg-icons-color text-main-bg rounded-[50%] grid p-[0.2rem]">
                      <TiTick />
                    </div>
                  </div>
                  <p className="text-[1.2rem] font-bold">Crypto Legend - {el.category} </p>
                </div>
              ))}
            </div>
          </div>
  
          <div className="grid grid-cols-3 gap-[1rem]">
            <div className="mt-[2rem]">
              <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="Royalties">Royalties</label>
              <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                    <FaPercent />
                </div>
                <input
                    className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    type="text"
                    placeholder="20%"
                    onChange={(e) => setRoyalties(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-[2rem]">
              <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="size">Size</label>
              <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                  <MdOutlineAttachFile />
                </div>
                <input
                    className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    type="text"
                    placeholder="165MB"
                    onChange={(e) => setFileSize(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-[2rem]">
              <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="Propertie">Propertie</label>
              <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                  <AiTwotonePropertySafety />
                </div>
                <input
                    className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    type="text"
                    placeholder="Propertie"
                    onChange={(e) => setProperties(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-[2rem]">
              <label className="block w-ful ml-[1rem] font-bold text-[1.3rem]" htmlFor="Price">Price</label>
              <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                  <AiTwotonePropertySafety />
                </div>
                <input
                    className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color"
                    type="text"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-2 my-[4rem] gap-[2rem]">
            <Button
              btnName="Upload"
              handleClick={async() => createNFT(
                name,
                price,
                image,
                description,
                router
              )}
              classStyle="w-full grid self-center text-[1.3rem]"
            />
            <Button
              btnName="Preview"
              handleClick={() => {}}
              classStyle="w-full grid self-center text-[1.3rem]"
            />
          </div>
        </div>
      </div>
    );
};