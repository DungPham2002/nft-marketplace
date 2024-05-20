import Image from "next/image";

export const Banner = ({ bannerImage }) => {
    return (
        <div className="">
            <div className="">
                <Image
                className="object-cover h-[300px]"
                src={bannerImage}
                alt="background"
                width={1600}
                height={300}
                />
            </div>

            <div className="hidden">
                <Image
                className="object-cover"
                src={bannerImage}
                alt="background"
                width={1600}
                height={900}
                />
            </div>
        </div>
    );
};