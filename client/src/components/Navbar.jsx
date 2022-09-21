import React, {useState} from 'react'
import { HiOutlineMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import logo from '../../images/logo.png'

const NavbarItem = ({title, classProps}) => {
  return (
    <li className={`mx-4 curcor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <nav className="w-full flex md:justify-center font-semibold justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} className="w-36 cursor-pointer" alt="kryptoz"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market","Exchange","Wallets","News"].map((item,index)=>(
            <NavbarItem key={index+item} title={item}/>
        ))}
        <li className=" bg-white text-lg text-indigo-900 py-2 px-8 m-3 mx-4 rounded-full cursor-pointer font-bold hover:bg-slate-100 hover:text-indigo-800">
          Login
        </li>
      </ul>
      <div className="flex relative">
          { toggleMenu
            ? <AiOutlineClose fontSize={32} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} />
            : <HiOutlineMenu fontSize={32} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />
          }
          { toggleMenu && 

            <ul className="text-white z-10 fixed top-0 -right-2 p-10 font-semibold w-[70vw] h-screen shadow-2xl md:hidden list-none 
            flex flex-col justify-start items-end rounded-lg blue-glassmorphism animate-slide-in">
              <li className="text-xl w-full my-2">
              <AiOutlineClose fontSize={24} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} />
              </li>
              {["Market","Exchange","Wallets","News"].map((item,index)=>(
                  <NavbarItem key={index+item} title={item} classProps="my-2 text-lg"/>
              ))}

            </ul>
          }
      </div>
    </nav>
  )
}

export default Navbar