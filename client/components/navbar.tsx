'use client'
import { useState } from "react"
import Link from "next/link";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Navbar() {
  const links = [
    { id: 1, name: 'Projects', link: '/projects' },
    { id: 2, name: 'Blog', link: '/blog' },
    { id: 3, name: 'Contact', link: '/contact' },
  ]
  const [showNavItems, setShowNavItems] = useState(false);
  function toggleNavItems() { setShowNavItems(!showNavItems) }

  return (
    <nav className="sticky top-0 px-5 md:px-20 lg:px-32 bg-white w-full">
      <div className="container mx-auto py-4 flex flex-row justify-between">

        <div className="flex">
          <Link href="/" className="font-montserrat font-thin text-2xl transition ease-in-out hover:scale-110 duration-100">Poop</Link>
        </div>

        <ul className={`font-raleway `}>
          <div className={`sm:flex sm:flex-column gap-8 ${showNavItems ? '' : 'hidden md:visible'}`}>

            {links.map(link => (
              <Link href={link.link} key={link.id}>
                <li className="py-1 transition ease-in-out hover:scale-110 duration-100">{link.name}</li>
              </Link>

            ))}
          </div>
        </ul>
        <div onClick={toggleNavItems} className="sm:hidden">
          {showNavItems ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </div>
      </div>
    </nav>
  )
}