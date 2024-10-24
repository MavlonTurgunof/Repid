import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icon/Logo.svg";
import ActiveLogo from "../../public/icon/Logo2.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.backgroundColor = "#1D1E5A";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [menuOpen]);

  return (
    <nav className="flex justify-between items-center py-4 px-8 container mx-auto relative">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={menuOpen ? ActiveLogo : Logo}
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>

      <div className="hidden md:flex space-x-8 text-[#1D1E5A] font-semibold text-xl">
        <Link href="/" className="hover:text-[#F7941D]">
          Home
        </Link>
        <Link href="/Aboutpage" className="hover:text-[#F7941D]">
          Biz Haqimizda
        </Link>
        <Link href="/OurServices" className="hover:text-[#F7941D]">
          Xizmatlarimiz
        </Link>
        <Link href="/Portfolio" className="hover:text-[#F7941D]">
          Portfolio
        </Link>
        <Link href="/Contactpage" className="hover:text-[#F7941D]">
          Bog'lanish
        </Link>
      </div>

      <div className="hidden md:flex">
        <button className="bg-[#F7941D] text-white font-semibold py-2 px-6 rounded-md transition duration-200">
          Ro'yxatdan o'tish
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-[#1D1E5A]" />
          ) : (
            <FaBars className="text-2xl text-[#1D1E5A]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#1D1E5A] z-50 flex flex-col py-6 px-8">
          <div className="flex justify-between items-center">
            <Image src={ActiveLogo} alt="Logo" width={120} height={120} />
            <button onClick={toggleMenu}>
              <FaTimes className="text-3xl text-white" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 mt-10">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
            >
              Home
            </Link>
            <Link
              href="/Aboutpage"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
            >
              Biz Haqimizda
            </Link>
            <Link
              href="/OurServices"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
            >
              Xizmatlarimiz
            </Link>
            <Link
              href="/Portfolio"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
            >
              Portfolio
            </Link>
            <Link
              href="/Contactpage"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
            >
              Bog'lanish
            </Link>
            <button className="bg-[#F7941D] text-white font-semibold py-2 px-6 rounded-md transition duration-200">
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
