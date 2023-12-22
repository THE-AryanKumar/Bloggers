"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import{FiMenu} from 'react-icons/fi';
import{BsTwitterX, BsX, BsYoutube} from 'react-icons/bs';
import {useState} from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About Me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Bloggers." className="text-black hover:scale-110 transition-transform duration-500"/>
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item)=>(
            <Link key={item?.title} href={item?.href} className="text-sm uppercase font-semibold relative group overflow-hidden hover:text-blue-400 hover:scale-110 transition-transform duration-500 ">
              {item?.title}
              <span className="w-full h-[1px] bg-blue-400 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200"/>
            </Link>
          ))}
        </div>

        {/* {Mobile Menu} */}
        <div onClick={toggleMenu}className="md:hidden cursor-pointer pl-24">
          <FiMenu className="h8 w-8 text-2xl text-blue-400 " />
        </div>
      </div>
      <div className={menuOpen ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
        <div className="flex w-full items-center justify-end">
          <div onClick={toggleMenu}className="cursor-pointer">
            <BsX className="h-8 w-8 text-blue-400"/>
          </div>
        </div>

        {/* {Mobile Menu Links} */}
        <div className="flex-col py-4">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4 hover:underline hover:decoration-blue-400">
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 hover:underline hover:decoration-blue-400">
            <Link href="/about">Contact us</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 hover:underline hover:decoration-blue-400">
            <Link href="/about">Media</Link>
            </li>
            <li className="flex items-center py-4 text-blue-400">
              <p className="cursor-pointer px-4 py-1 rounded-full bg-blue-400 text-black hover:bg-black hover:text-blue-400 ease-in-out duration-300">Sign In</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link href="https://www.youtube.com">
            <BsYoutube size={30} className="cursor-pointer hover:text-blue-400 ease-in-out duration-300" />
          </Link>
          <Link href="https://www.twitter.com">
            <BsTwitterX size={30} className="cursor-pointer hover:text-blue-400 ease-in-out duration-300" />
          </Link>
        </div>
        <Logo title="Bloggers." className="text-black flex justify-center pt-10 mx-auto hover:scale-110 transition-transform duration-500"/>
      </div>
    </div>
  );
};

export default Navbar;
