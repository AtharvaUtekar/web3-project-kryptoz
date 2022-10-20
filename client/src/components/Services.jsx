import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { TickerTape } from "react-tradingview-embed";
import { MiniChart } from "react-tradingview-embed";
import { MarketOverview } from "react-tradingview-embed";
import { MdArrowRightAlt } from "react-icons/md";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 p-4">


      <div className="flex-1 flex flex-col justify-center items-center m-4">
                {/* <button type="button" onClick={handleSubmit} */}
        <a href="https://coinmarketcap.com/">
        <button           
          type="button"
          className="text-white flex-row w-full border-none p-6 text-2xl rounded-full cursor-pointer">
          Go to the Exchange Market Market Overview →      
        </button>

        </a>


        <MarketOverview className="w-full" widgetPropsAny={{"colorTheme": "dark",
    "tabs": [
      {
        "title": "Crypto Currencies",
        "symbols": [
          {
            "s": "BINANCE:ETHUSDT",
            "d": "Ethereum"
          },
          {
            "s": "BINANCE:ADAUSDT",
            "d": "Cardano"
          },
          {
            "s": "BINANCE:DOGEUSDT",
            "d": "Dogecoin"
          },
          {
            "s": "BITSTAMP:BTCUSD",
            "d": "Bitcoin"
          },
          {
            "s": "BINANCE:SUSHIUSDT",
            "d": "Sushi"
          },
          {
            "s": "BINANCE:APTUSDT",
            "d": "APT"
          },
          {
            "s": "BINANCE:AVAXUSDT",
            "d": "AVAX"
          },
          {
            "s": "BINANCE:EOSUSDT",
            "d": "EOS"
          },
          {
            "s": "BINANCE:ATOMUSDT",
            "d": "Cosmos"
          },
          {
            "s": "BINANCE:SOLUSDT",
            "d": "Solana"
          },
          {
            "s": "BINANCE:XRPUSDT",
            "d": "XRP"
          },
          {
            "s": "BINANCE:AAVEUSDT",
            "d": "AAVE"
          },
          {
            "s": "BINANCE:MATICUSDT",
            "d": "Matic"
          },
          {
            "s": "BINANCE:LINKUSDT",
            "d": "Chainlink"
          },
          {
            "s": "BINANCE:LUNAUSDT",
            "d": "Luna"
          },
          {
            "s": "BINANCE:GALAUSDT",
            "d": "Gala"
          },
          {
            "s": "BINANCE:RUNEUSDT",
            "d": "Rune"
          }
        ]
      },
      {
        "title": "Indices",
        "symbols": [
          {
            "s": "BSE:SENSEX",
            "d": "Sensex"
          },
          {
            "s": "NASDAQ:NDX",
            "d": "NDX"
          },
          {
            "s": "OANDA:SG30SGD",
            "d": "SG30"
          },
          {
            "s": "OANDA:HK33HKD",
            "d": "HKD"
          },
          {
            "s": "VANTAGE:DAX40",
            "d": "DAX"
          }
        ],
        "originalTitle": "Indices"
      }
    ]


        }} />

      </div>
      
      {/*
      <div className="m-5">
      <MiniChart className=""/>
      </div> */}


      <div className="flex-1 m-2 p-6 flex flex-col justify-start items-center">
        <h1 className="text-white text-3xl sm:text-5xl py-4 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-4 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>

        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>

      
    </div>
  </div>
);

export default Services;