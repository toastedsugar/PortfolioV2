'use client'
import { useState } from "react"
import Brand from "./Brand";
import Navbar from "./Navbar";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function MobileNavbar() {

  const [showNav, setShowNav] = useState<boolean>(false);
  function toggleNav() { setShowNav(!showNav) }

  return (
    <nav className="sticky top-0 px-5 md:px-20 lg:px-32 bg-zinc-900 w-full">
      <div className="container mx-auto py-4 flex flex-row justify-between">
        <Brand />
        <div onClick={toggleNav} className="fixed right-8 sm:right-24 md:right-30 pt-3">
          {showNav ? <CloseRoundedIcon className="right-8" /> : <MenuRoundedIcon />}
        </div>
        {showNav && <Overlay showNav={showNav} setShowNav={setShowNav} />}
      </div>
    </nav>
  )
}

type overlayProps  = {
  showNav: boolean,
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>,
}

function Overlay({showNav, setShowNav}: overlayProps) {
  return (
    <div>

      <div className={`fixed top-0 left-0 z-30`}>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
      </div>

      <div 
        className="fixed top-0 left-0 bg-white opacity-20 w-full z-10 h-screen"
        onClick={()=>{setShowNav(false)}}
      ></div>
    </div>
  )
}