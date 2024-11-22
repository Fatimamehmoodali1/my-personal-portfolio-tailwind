import { NAV_LINKS } from '@/constants'
import  Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-5'>
      <div className="flexBetween max-container">
        <Link href="/" className='bold-28 capitalize relative'>
            Fatima<span className='text-blue-700'>MEHMOOD Ali</span><span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10'></span>
        </Link>
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {
            NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className='flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
                {link.label}
              </Link>
            ))
          }
        </ul>
        <Image 
        src="menu.svg" // Provide the path to your image
        alt="menu" // Provide an alt description
        width={28} // Specify width
        height={28} // Specify height
        className='inline-block cursor-pointer lg:hidden flexBetween'
        />

      </div>
    </nav>
  )
} 

export default Navbar;