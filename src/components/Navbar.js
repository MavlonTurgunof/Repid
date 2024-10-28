import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icon/Logo.svg";
import ActiveLogo from "../../public/icon/Logo2.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { usePathname } from "next/navigation";
import Container from "./container";
import { IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const modalRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center h-[70px] lg:h-[88px] relative z-50">
          {/* Logo */}
          <div className="w-20 lg:w-[110px]" data-aos="fade-right">
            <Link href="/">
              <Image
                src={menuOpen ? ActiveLogo : Logo}
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-10 text-[#1D1E5A] font-semibold text-lg">
            <Link
              href="/"
              className={
                pathname === "/" ? "text-[#F7941D]" : "hover:text-[#1d1e5ab1]"
              }
              data-aos="fade-down"
            >
              Biz haqimizda
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-[#F7941D]"
                  : "hover:text-[#1d1e5ab1]"
              }
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Jamoamiz
            </Link>
            <Link
              href="/services"
              className={
                pathname === "/services"
                  ? "text-[#F7941D]"
                  : "hover:text-[#1d1e5ab1]"
              }
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Xizmatlarimiz
            </Link>
            <Link
              href="/Portfolio"
              className={
                pathname === "/Portfolio"
                  ? "text-[#F7941D]"
                  : "hover:text-[#1d1e5ab1]"
              }
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-[#F7941D]"
                  : "hover:text-[#1d1e5ab1]"
              }
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Bog'lanish
            </Link>
          </div>
          {/* Registration Button for Desktop */}
          <div className="hidden lg:flex" data-aos="fade-left">
            <button
              className="bg-[#F7941D] text-white font-semibold py-3 px-[32px] rounded-xl transition duration-200 hover:bg-[#E67C14]"
              onClick={toggleModal}
            >
              Ro'yxatdan o'tish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-[#1D1E5A]" />
              ) : (
                <FaBars className="text-2xl text-[#1D1E5A]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="fixed z-50 top-0 left-0 w-full h-screen bg-[#1D1E5A] flex flex-col py-6 px-8"
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
                  data-aos="fade-right"
                  onClick={toggleMenu}
                  data-aos-duration="500"
                >
                  Biz haqimizda
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-semibold text-white hover:text-[#F7941D]"
                  data-aos="fade-right"
                  onClick={toggleMenu}
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  Jamoamiz
                </Link>
                <Link
                  href="/services"
                  className="text-xl font-semibold text-white hover:text-[#F7941D]"
                  data-aos="fade-right"
                  onClick={toggleMenu}
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  Xizmatlarimiz
                </Link>
                <Link
                  href="/Portfolio"
                  className="text-xl font-semibold text-white hover:text-[#F7941D]"
                  data-aos="fade-right"
                  onClick={toggleMenu}
                  data-aos-delay="300"
                  data-aos-duration="500"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="text-xl font-semibold text-white hover:text-[#F7941D]"
                  data-aos="fade-right"
                  onClick={toggleMenu}
                  data-aos-delay="400"
                  data-aos-duration="500"
                >
                  Bog'lanish
                </Link>
                <button
                  className="bg-[#F7941D] text-white font-semibold py-2 px-6 rounded-md transition duration-200 hover:bg-[#E67C14]"
                  onClick={() => {
                    toggleMenu();
                    toggleModal();
                  }}
                >
                  Ro'yxatdan o'tish
                </button>
              </div>
            </div>
          )}

          {/* Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div
                ref={modalRef}
                className="bg-white relative p-6 rounded-md w-[526px] mx-4"
              >
                <button
                  onClick={toggleModal}
                  className="p-[2px] hover:bg-gray-200 rounded-sm duration-200 absolute text-[24px] top-3 right-3"
                >
                  <IoMdClose className="text-[24px]" />
                </button>
                <h2 className="text-2xl font-semibold mb-4">
                  Ro'yxatdan o'tish
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-y-5">
                    <div className="relative flex flex-col gap-2">
                      <label className="text-[14px]">Ismingiz</label>
                      <FiUser className="text-[28px] absolute left-3 top-[40px] text-[#F48C06]" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Ismingizni kiriting"
                        className="w-full pt-3 pl-12 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
                      />
                    </div>
                    <div className="relative flex flex-col gap-2">
                    <label className="text-[14px]">Telefon raqamingiz</label>
                      <LuPhone className="text-[28px] top-[40px] absolute left-3 text-[#F48C06]" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+998 99 000 00 00"
                        className="w-full pt-3 pl-12 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px]">Fikringiz</label>
                      <textarea
                        name="textarea"
                        placeholder="O'zingiz xohlagan xizmatni ayting"
                        rows="4"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#f48c06] text-white py-3 rounded-lg hover:bg-[#e07c04] transition-all"
                    >
                      Yuborish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
