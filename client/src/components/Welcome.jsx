import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import {Loader} from './'

const Welcome = () => {
  const connectWallet = () => {

  }

  const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 font-thin text-md text-white";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-white text-3xl sm:text-4xl text-gradient py-2 font-semibold">
            Send Crypto <br/> Across the world, Anytime, Anywhere !
          </h1>
          <p className="text-white text-left font-light md:w-9/12 w-11/12 py-4 text-lg">
            Explore the crypo world. Buy and Sell crypto on Kryptoz easiy!
          </p>
          <button 
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center text-lg text-white items-center my-5 bg-indigo-900 cursor-pointer font-semibold hover:bg-slate-100 hover:text-indigo-800 p-3 rounded-full"
          >
          Connect your wallet now
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>
              Reliability
            </div>
            <div className={commonStyles}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={commonStyles}>
              Faster Transactions
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
              Low Charges
            </div>


          </div>
        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default Welcome