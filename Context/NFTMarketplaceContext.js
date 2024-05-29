import Router, { useRouter } from "next/router";
import { ethers } from "ethers";
import {
  NFTMarketplaceAdrress,
  NFTMarketplaceABI,
  TransferAddress,
  TransferABI,
} from "./constants";
import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAdrress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Error when connecting smart contract");
  }
};

const fetchTransferContract = (signerOrProvider) =>
  new ethers.Contract(
    TransferAddress,
    TransferABI,
    signerOrProvider
  );

const connectToTransfer = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTransferContract(signer);
    return contract;
  } catch (error) {
    console.log("Error when connecting transfer contract");
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const router = useRouter();

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(getBalance);
      setAccountBalance(bal);
    } catch (error) {
      console.log("Something wrong when connecting wallet");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const uploadToPinata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios({
          method: "POST",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET__KEY,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://beige-necessary-lobster-645.mypinata.cloud/ipfs/${response.data.IpfsHash}`;
        return ImgHash;
      } catch (error) {
        console.log("Error when uploading to pinata");
      }
    }
  };

  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return console.log("Data is missing");
    const data = JSON.stringify({ name, description, image });
    try {
      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET__KEY,
          "Content-Type": "application/json",
        },
      });

      const url = `https://beige-necessary-lobster-645.mypinata.cloud/ipfs/${response.data.IpfsHash}`;
      await createSale(url, price);
      router.push("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });
      await transaction.wait();
    } catch (error) {
      console.log("Error when creating sale", error);
    }
  };

  const fetchNFTs = async () => {
    try {
      if (currentAccount) {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const data = await contract.fetchMarketItems();
        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);
              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );
        return items;
      }
    } catch (error) {
      console.log("Error when fetching NFT", error);
    }
  };

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs()
    }
  }, [currentAccount]);

  const fetchMyNFTsorListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();
      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              name,
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("Error when listing NFTs", error);
    }
  };

  useEffect(() => {
    fetchMyNFTsorListedNFTs();
  }, []);

  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      console.log("Error when buying NFT");
    }
  };

  //--------------------------------------------------
  //---Tranfer---
  const [transactions, setTransactions] = useState([]);
  const [transactionCount, setTransactionCount] = "";
  const transferEther = async (address, ether, message) => {
    try {
      if (currentAccount) {
        const contract = await connectToTransfer();
        const unFormatedPrice = ethers.utils.parseEther(ether);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              gas: "0x5208",
              value: unFormatedPrice._hex,
            },
          ],
        });

        const transaction = await contract.addDataToBlockchain(
          address,
          unFormatedPrice,
          message
        );
        transaction.wait();
        const transactionCount = await contract.getTransactionCount();
        setTransactionCount(transactionCount.toNumber());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //ALL TRANSACTION
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const contract = await connectToTransfer();
        const availableTransaction = await contract.getAllTransactions();
        const readTransaction = availableTransaction.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          message: transaction.message,
          timestamp: new DataTransfer(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        }));

        setTransactions(readTransaction);
      } else {
        console.log("On Ethereum");
      }
    } catch (error) {
      console.log("Error when getting all transactions");
    }
  };

  // --------------------------------------
  // AUCTION

  const fetchActiveAuctions = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const data = await contract.fetchActiveAuctions();
      const activeAuctions = await Promise.all(
        data.map(
          async ({
            tokenId,
            owner,
            seller,
            minBid: unFormatedMinBid,
            highestBid: unFormatedHightestBid,
            highestBidder,
            endTime: unformattedTime,
          }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const minBid = ethers.utils.formatUnits(
              unFormatedMinBid.toString(),
              "ether"
            );
            const highestBid = ethers.utils.formatUnits(
              unFormatedHightestBid.toString(),
              "ether"
            );
            const endTime = new Date(unformattedTime.toNumber() * 1000);
            return {
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              minBid,
              highestBid,
              highestBidder,
              tokenURI,
              endTime,
            };
          }
        )
      );
      return activeAuctions;
    } catch (error) {
      console.log("Error fetching active auctions", error);
    }
  };

  useEffect(() => {
    if (currentAccount) {
      fetchActiveAuctions();
    }
  });

  const createAuction = async (id, minBid, duration) => {
    try {
      const contract = await connectingWithSmartContract();
      const minBidPrice = ethers.utils.parseUnits(minBid, "ether");
      const transaction = await contract.createAuction(
        id,
        minBidPrice,
        duration
      );
      await transaction.wait();
    } catch (error) {
      console.log("Error creating auction", error);
    }
  };

  const bidOnAuction = async (tokenId, bidAmount) => {
    try {
      const contract = await connectingWithSmartContract();
      const transaction = await contract.bidOnAuction(tokenId, {
        value: ethers.utils.parseEther(bidAmount),
      });
      transaction.wait();
    } catch (error) {
      console.log("Error placing bid", error);
    }
  };

  const endAuction = async (tokenId) => {
    try {
      const contract = await connectingWithSmartContract();
      const transaction = await contract.endAuction(tokenId);
      transaction.wait();
    } catch (error) {
      console.log("Error ending auction", error);
    }
  };

  const checkAndEndAuctions = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const activeAuctions = await contract.fetchActiveAuctions();

      for (const auction of activeAuctions) {
        const endTime = new Date(auction.endTime.toNumber() * 1000);
        const currentTime = new Date();

        if (currentTime >= endTime) {
          console.log(`Ending auction for token ID ${auction.tokenId}`);
          const tx = await contract.endAuction(auction.tokenId);
          await tx.wait();
          console.log(
            `Auction for token ID ${auction.tokenId} ended successfully`
          );
        }
      }
    } catch (error) {
      console.error("Error ending auction:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(checkAndEndAuctions, 300000);
    checkAndEndAuctions();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToPinata,
        createNFT,
        fetchNFTs,
        createSale,
        fetchMyNFTsorListedNFTs,
        buyNFT,
        transferEther,
        accountBalance,
        currentAccount,
        titleData,
        transactionCount,
        transactions,
        getAllTransactions,
        fetchActiveAuctions,
        bidOnAuction,
        endAuction,
        createAuction,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
