import { UploadNFT } from "@/domain/uploadNFTPage/uploadNFTIndex";


export default function uploadNFT() {
    return (
        <div className="w-full my-[8rem]">
            <div className="w-[60%] my-0 mx-auto">
                <div className="border-b-[1px] border-solid border-shadow-dark">
                    <h1 className="text-[3.5rem] font-extrabold">Create New NFT</h1>
                    <p className="text-[1.4rem] w-[70%]">
                        You can set preferred display name, create your profile URL and
                        manage other personal settings.
                    </p>
                </div>
        
                <div className="border-b-[1px] border-solid border-shadow-dark mt-[4rem]">
                    <h2 className="text-[2.5rem] font-bold">Image, Video, Audio, or 3D Model</h2>
                    <p className="text-[1.1rem] font-medium">
                        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
                        GLB, GLTF. Max size: 100 MB
                    </p>
                </div>
        
                <div className="{Style.uploadNFT_box_form}">
                    <UploadNFT />
                </div>
            </div>
        </div>
      );
}