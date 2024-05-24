import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { useContext, useEffect, useState } from "react"
import { FaEthereum, FaUserAlt } from "react-icons/fa"
import Image from "next/image";
import images from "@/images";
import { Button } from "@/components/componentsindex";



export default function Transfer() {
    const { transferEther, currentAccount, accountBalance, transactions, getAllTransactions } = useContext(NFTMarketplaceContext);
    const [transferAmount, setTransferAmount] = useState("");
    const [transferAccount, setTransferAccount] = useState("");
    const [message , setMessage] = useState("");
    const [readMessage, setReadMessage] = useState("");
    const [openBox, setOpenBox] = useState(false);

    useEffect(() => {
        getAllTransactions()
    })

    return (
        <div className="w-full my-[2rem]">
           <div className="w-[80%] my-0 mx-auto">
                <h1 className="text-[4rem] font-bold">Transfer Ether</h1>
                <p className="w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab reiciendis dolorem eligendi, impedit molestias debitis amet sunt cumque facere quos. Ex nulla architecto aspernatur magnam dolorem laudantium voluptates quos!</p>
                <div className="grid grid-cols-[1fr,1.5fr] gap-[3rem]">
                    <div className="box-box-left text-center grid">
                        <Image
                            src={images.nft_image_1} 
                            alt="image"
                            width={400}
                            height={400}   
                        />
                    </div>

                    <div className="box-box-right">
                        <h2 className="text-[1.3rem] font-bold">Now you can transfer ether</h2>
                        <div className="box-box-right-info border-[1px] border-solid border-icons-color shadow-shadow rounded-[0.5rem] p-[1rem] w-[90%] grid grid-cols-[3fr,1.5fr]">
                            <p className="box-box-right-info-destop">Account: {currentAccount.slice(0,30)}...</p>
                            <p className="box-box-right-info-mobile hidden">Account</p>
                            <p>Balance: {accountBalance.slice(0,10)} ETH</p>
                        </div>

                        <div className="box-box-right-box w-[90%]">
                            <div className="mt-[2rem]">
                                <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                                    <FaUserAlt />
                                    </div>
                                    <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="text" placeholder="address" onChange={(e) => setTransferAccount(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mt-[2rem]">
                                <div className="w-full border-[1px] border-solid border-icons-color rounded-[1rem] items-center flex gap-[1rem] overflow-hidden">
                                    <div className="text-[2rem] bg-icons-color py-[0.5rem] px-[1rem] text-main-bg grid cursor-pointer">
                                    <FaEthereum/>
                                    </div>
                                    <input className="w-[90%] border-0 bg-[transparent] outline-none placeholder:text-[1.2rem] placeholder:text-icons-color mr-[1rem]" type="number" min={1} placeholder="ETH" onChange={(e) => setTransferAmount(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mt-[2rem]">
                                <textarea
                                    className="border-[1px] border-solid border-icons-color w-full bg-[transparent] outline-none rounded-[1rem] p-[1rem] placeholder:text-[1.2rem] placeholder:text-icons-color"
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="6"
                                    placeholder="Your message"
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>


                            <Button
                                btnName="Transfer"
                                handleClick={() => 
                                    transferEther(transferAccount, transferAmount, message)
                                }
                                classStyle="w-full mt-[2rem]"
                            />
                        </div>
                    </div>
                </div>


                <h1 className="mt-[10rem] text-[2.5rem] font-bold">Transaction History</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab reiciendis dolorem eligendi, impedit molestias debitis amet sunt cumque facere quos. Ex nulla architecto aspernatur magnam dolorem laudantium voluptates quos!</p>
                <div className="mt-[5rem] grid grid-cols-5 gap-[2rem]">
                    {transactions.map((el, i) => (
                        <div className="border-[1px] border-solid border-icons-color rounded-[0.5rem] shadow-shadow p-[1rem] overflow-hidden" key={i+1}>
                            <Image 
                                src={images.nft_image_1}
                                width={200}
                                height={200}
                                alt="image"
                            />

                            <div className="box-history-item-info">
                                <p className="w-full mt-[0.5rem]"><span className="text-icons-color my-[0.2rem] mr-[1rem]">Transfer ID:</span>#{i + 1}</p>
                                <p className="w-full"><span className="text-icons-color my-[0.2rem] mr-[1rem]">Amount:</span>{el.amount} ETH</p>
                                <p className="w-full"><span className="text-icons-color my-[0.2rem] mr-[1rem]">From:</span>{el.addressFrom.slice(0, 15)}...</p>
                                <p className="w-full"><span className="text-icons-color my-[0.2rem] mr-[1rem]">To:</span>{el.addressTo.slice(0, 15)}...</p>

                                <Button classStyle="mt-[0.8rem]" btnName="Message" handleClick={() => (setReadMessage(`${el.message}`), setOpenBox(true))}/>
                            </div>
                        </div>
                    ))}
                </div>


                {openBox == false ? (
                    ""
                ) : (
                    <div className="fixed inset-0 bg-main-bg text-icons-color z-[111111111111]" onClick={() => setOpenBox(false)}>
                        <div className="top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[50%] absolute">
                            <h1 className="text-[2rem] font-bold">Transaction Message</h1>
                            <p className="text-[1.3rem] w-full">{readMessage}</p>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    )
}