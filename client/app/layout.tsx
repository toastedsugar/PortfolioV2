import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/navigation/Navbar'
import MobileNavbar from '../components/navigation/MobileNavbar'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My webdev portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="w-screen font-poppins text-sm font-lightcontainer lg:flex">
          <div className="lg:hidden"> <MobileNavbar /> </div>
          <div className="hidden lg:block"> <Navbar /> </div> 
            {children}
        </div>
      </body>
    </html>
  )
}
