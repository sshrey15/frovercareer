"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between flex-wrap shadow-sm bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-8">
          <Link href="/">
            <span className="font-semibold text-3xl tracking-tight text-purple-500 cursor-pointer">
              Frover<span className='text-gray-900 text-3xl'>Career</span>
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-purple-500 hover:border-purple-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'} lg:block`}>
          <div className="text-sm lg:flex-grow ml-5">
            <Link href="/openings" className="block text-lg lg:inline-block lg:mt-0 text-gray-900 hover:text-purple-400 mr-4">
               
                Openings
              
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;