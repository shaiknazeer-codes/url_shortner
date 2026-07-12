import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
         
         <nav className=' bg-purple-700 flex flex-col md:flex-row justify-between items-center h-auto md:h-15 text-white py-2 md:py-0'>
           <Link href="/">
           <div className='my-4 mx-4 font-bold text-xl'>SnapLink</div>
             </Link>
            <ul className=' flex flex-wrap justify-center items-center gap-4 md:gap-10 mx-6 mb-4 md:mb-0 font-bold text-sm md:text-base'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/Shorten">Shorten</Link>
                <Link href="/Contact">Contact Us</Link>
                
            </ul>
         </nav>
  )
}

export default Navbar