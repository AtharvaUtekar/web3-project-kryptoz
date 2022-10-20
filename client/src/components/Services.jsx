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
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">


      <div className="flex-1 flex flex-col justify-center items-center m-4">
                {/* <button type="button" onClick={handleSubmit} */}
        <a href="https://coinmarketcap.com/">
        <button           
          type="button"
          className="text-white flex-row w-full m-10 border-none p-2 text-2xl rounded-full cursor-pointer">
            Go to the Exchange Market Market Overview →      
        </button>

        </a>


        <MarketOverview className="" widgetProps={{"theme": "dark"}} />

      </div>
      
      
      
      {/*
      <div className="m-5">
      <MiniChart className=""/>
      </div> */}


         




      <div className="flex-1 m-2 flex flex-col justify-start items-center">
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