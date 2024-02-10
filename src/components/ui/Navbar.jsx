"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"// Corrected import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between flex-wrap shadow-sm bg-white p-6">

        <Link href="/">

          <Image src="/frover.png" alt="Frover logo" width={100} height={120} />

        </Link>

        <div className="block lg:hidden">
          {/* <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-purple-500 hover:border-purple-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button> */}
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-purple-500 hover:border-purple-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button> 
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[100vw]">
          <DropdownMenuItem>
         <Link href='/openings'>
         <span className='text-[#5B21FF]'>Openings</span>
         </Link>
          

          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href='/openings'>
         <span className='text-[#5B21FF]'>Contact Us</span>
         </Link>
          
          </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>

          {isOpen && (
            <div className="bg-white rounded mt-2 py-2 w-48">
              <Link href="/jobs">
                <p>Contact us</p>
              </Link>
              <Link href="/contact-us">
              <p>Contact us</p>
              </Link>
            </div>
          )}
        </div>
        {
          !isOpen && (
            <>
               <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'} lg:block`}>
          <div className="text-sm lg:flex-grow ml-5">
            <Link href="/openings" className="text-md  underline underline-offset-2 float-end mr-10 lg:inline-block lg:mt-0 text-purple-700 hover:text-purple-400 ">

              view all openings

            </Link>

          </div>
          <button className='bg-gradient-to-r  from-[#5B21FF] from-20% to-[#8C19FF] text-md text-white p-3'>Contact Us</button>
        </div>

            </>
          )
        }
     
      </nav>
    </>
  );
};

export default Navbar;