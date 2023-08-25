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
        <div className="w-screen lg:pl-72 xl:pl-96 font-poppins text-sm font-lightcontainer lg:flex">
          <div className="lg:hidden"> <MobileNavbar /> </div>
          <div className="fixed left-0 lg:left-8 xl:left-0 hidden lg:block xl:ml-32 lg:border-x lg:border-zinc-800"> <Navbar /> </div>
          <div className="grow min-h-screen mx-4 sm:mx-8 md:px-16  xl:mr-32 lg:border-r h-max lg:border-zinc-800">
            <div className="py-4 lg:py-6">
                {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
