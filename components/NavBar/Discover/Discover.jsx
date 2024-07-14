import Link from "next/link"

export const Discover = () => {
    const discover = [
        {
            name: "Market",
            link: "search"
        },
        {
            name: "Author Profile",
            link: "author"
        },
        {
            name: "Account settings",
            link: "account"
        },
        {
            name: "Upload NFT",
            link: "upload-NFT"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
        {
            name: "Transfer",
            link: "transfer"
        },
    ]
    return (
        <div>
            {discover.map((el, i) => (
                <div key={i+1} className="py-2 px-4 transition-all z-[22222] ease-in hover:bg-icons-color hover:text-shadow-dark hover:rounded-[0.3rem]">
                    <Link href={{ pathname: `${el.link}` }}> 
                        {el.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}