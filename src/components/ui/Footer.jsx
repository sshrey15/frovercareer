"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-[#212022] p-6 text-white">
      <Link href="/">
     
          <Image src="/frover.png" alt="Frover logo" width={100} height={120} />
     
      </Link>
      <p className="my-4 md:my-0">© 2024 Frover</p>
      <div  className="text-xl flex space-x-4 ">
        <Link href="/instagram" className="text-xl text-[#b988f8]">
       
            <FaInstagram />
          
        </Link>
        <Link href="/linkedin" className="text-xl text-[#b988f8]">
         
            <FaLinkedin />
      
        </Link>
        <Link href="/twitter" className="text-xl text-[#b988f8]">
         
        <FaXTwitter />
          
        </Link>
      </div>
    </footer>
  );
};

export default Footer;