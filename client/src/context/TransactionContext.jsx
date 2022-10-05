import React, { useState, useEffect } from 'react'
import {ethers} from 'ethers'
import { contractABI, contractAddress} from '../utils/constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer =provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([])

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const getAllTransactions = async () => {
        try {
            if(!ethereum) return alert("Please connect MetaMask");

            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransactions.map((transaction) => ({ 
                addressTo: transaction.reciever,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message, 
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10**18)

            }))
            setTransactions(structuredTransactions);
            console.log(structuredTransactions)

        } catch (error) {
            console.error(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please connect MetaMask")

            const accounts = await ethereum.request({ method: 'eth_accounts'})
            getAllTransactions();
            if(accounts.length){
                setCurrentAccount(accounts[0])
            }
            else{
                console.log("No accounts found")  
            }
            
        } catch (error) {
            console.error(error);          
            throw new Error("No ethereum object found")  
        }
        
    }

    const checkIfTransactionsExist = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionsCount();

            window.localStorage.setItem("transactionsCount", transactionCount)
        } catch (error) {
            console.error(error);
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please connect MetaMask")

            const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
             
            setCurrentAccount(accounts[0])
            
        } catch (error) {
            console.error(error);          
            throw new Error("No ethereum object found")  
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please connect MetaMask")
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex, 
                }]
            });

            const transactionHash = await transactionContract.addToBlockChain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading: ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success: ${transactionHash.hash}`);

            const transactionsCount = await transactionContract.getTransactionsCount();

            setTransactionCount(transactionsCount.toNumber());

            window.reload();

        } catch (error) {
            console.error(error);          
            throw new Error("No ethereum object found")             
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    }, [])


    

    return(
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setformData, handleChange, sendTransaction, transactions, isLoading }}>
            {children}
        </TransactionContext.Provider>
    )
}