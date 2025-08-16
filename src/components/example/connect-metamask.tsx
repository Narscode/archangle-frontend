'use client'

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import lockContract from "@/utils/Smart-Contract.json";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

export default function ConnectMetaMask() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        connectContract();
    }, []);

    async function connectContract() {
        // null safety
        if (!CONTRACT_ADDRESS) return null;

        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, lockContract.abi, signer);

            const value = await contract.getMessage();
            setMessage(value);
        }
    }

    <div>
        <h1 className="font-inter">Smart Contract with adress {CONTRACT_ADDRESS}</h1>
        <p>message {message}</p>
    </div>

}