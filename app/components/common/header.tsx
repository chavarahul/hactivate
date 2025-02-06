'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import MenuIcon from '@/app/assets/menu.svg';
import logo from '@/app/assets/newlogo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative border-b w-full">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-5 transform transition-transform duration-300 ease-in-out z-50 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Logo" height={40} width={40} className='bg-white p-2 py-3 rounded-full' />
          <HiX className="cursor-pointer text-white" size={30} onClick={toggleSidebar} />
        </div>
        <nav className="mt-8">
          <Link href="/" className="block py-2 hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="block py-2 hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="/#services" className="block py-2 hover:text-gray-300 transition-colors">
            Services
          </Link>
        </nav>
      </div>

      <header className="fixed md:w-3/4 w-[94%] z-20 border-b top-0 backdrop-blur-sm">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-6 w-6 md:hidden cursor-pointer" onClick={toggleSidebar} />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="/" className="hover:text-black transition-colors duration-200">
                Home
              </Link>
              <Link href="/#about" className="hover:text-black transition-colors duration-200">
                About Us
              </Link>
              <Link href="/#services" className="hover:text-black transition-colors duration-200">
                Services
              </Link>
              <Link href="/#contact" className="hover:text-black transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
