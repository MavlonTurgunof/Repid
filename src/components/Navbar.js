import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icon/Logo.svg";
import ActiveLogo from "../../public/icon/Logo2.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    if (menuOpen) {
      document.body.style.backgroundColor = "#1D1E5A";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [menuOpen]);

  return (
    <nav className="flex justify-between items-center py-4 px-8 container mx-auto relative">
      {/* Logo */}
      <div className="flex items-center space-x-2" data-aos="fade-down">
        <Link href="/">
          <Image
            src={menuOpen ? ActiveLogo : Logo}
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>

      {/* Desktop version */}
      <div className="hidden md:flex space-x-8 text-[#1D1E5A] font-semibold text-xl">
        <Link href="/" className="hover:text-[#F7941D]" data-aos="fade-down">
          Biz haqimizda
        </Link>
        <Link
          href="/Aboutpage"
          className="hover:text-[#F7941D]"
          data-aos="fade-down"
        >
          Jamoamiz
        </Link>
        <Link
          href="/OurServices"
          className="hover:text-[#F7941D]"
          data-aos="fade-down"
        >
          Xizmatlarimiz
        </Link>
        <Link
          href="/Portfolio"
          className="hover:text-[#F7941D]"
          data-aos="fade-down"
        >
         Portfolio
        </Link>
        <Link
          href="/Contactpage"
          className="hover:text-[#F7941D]"
          data-aos="fade-down"
        >
          Bog'lanish
        </Link>
      </div>

      <div className="hidden md:flex" data-aos="fade-left">
        <button
          className="bg-[#F7941D] text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          onClick={toggleModal}
        >
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
        <div
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#1D1E5A] z-50 flex flex-col py-6 px-8"
          data-aos="slide-in"
        >
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
              data-aos="fade-up"
            >
              Biz Haqimizda
            </Link>
            <Link
              href="/Aboutpage"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
              data-aos="fade-up"
            >
              Jamoamiz
            </Link>
            <Link
              href="/OurServices"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
              data-aos="fade-up"
            >
              Xizmatlarimiz
            </Link>
            <Link
              href="/Portfolio"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
              data-aos="fade-up"
            >
              Portfolio
            </Link>
            <Link
              href="/Contactpage"
              className="text-xl font-semibold text-white hover:text-[#F7941D]"
              data-aos="fade-up"
            >
              Bog'lanish
            </Link>
            <button
              className="bg-[#F7941D] text-white font-semibold py-2 px-6 rounded-md transition duration-200"
              onClick={toggleModal}
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-11/12 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Ro'yxatdan o'tish</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Ismingizni</label>
                <input
                  type="text"
                  placeholder="Enter Your Name here"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Telefon raqamingiz</label>
                <input
                  type="tel"
                  placeholder="+998 99 500 50 50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Fikringiz</label>
                <textarea
                  placeholder="Tell me the interior you want"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="mr-4 px-4 py-2 bg-gray-300 rounded-md"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-[#F7941D] text-white rounded-md">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
