'use client'
import Link from "next/link"
import Brand from "./Brand"
import Image from "next/image"
import github from "../../public/github-mark/github-mark.png"
import linkedin from "../../public/LinkedIn-Logos/LI-In-Bug.png"

type navbarProps  = {
  showNav?: boolean,
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Navbar({showNav, setShowNav}: navbarProps) {
  const links = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Projects', link: '/projects' },
  ]
  const socials = [
    { id: 1, name: 'Github',link: 'https://github.com/MoistSadness', icon: github },
    { id: 2, name: 'LinkedIn', link:'https://www.linkedin.com/in/rohan-shrotri-0711b7137/', icon: linkedin },
  ]
  
  return (
    <nav className="bg-black h-screen w-72">
      <div className="container py-8 px-8">
        {/* Brand */}
        <div className="py-12 lg:py-24 border-b border-zinc-800">
          <Brand />
        </div>
        {/* Page links */}
        <ul className="font-raleway py-20 mx-4 border-b border-zinc-800">
          {links.map(link => (
            <Link href={link.link} key={link.id} onClick={()=>{if (setShowNav) setShowNav(false)}}>
              <li className="py-1 mb-4 font-semibold text-lg transition ease-in-out hover:scale-110 duration-100">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
        {/* Socials */}
        <ul className="flex flex-row justify-between mt-32 mx-12 bottom-0">
          {socials.map(social => (
            <Link key={social.id} href={social.link}>
              <li>
                <Image src={social.icon} alt={social.name} width={40} height={40}/>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}