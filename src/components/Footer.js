// Footer.js
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo2 from "../../public/icon/Logo2.svg";
import Facebook from "../../public/icon/facebook.svg";
import Instagram from "../../public/icon/instagram.svg";
import Telegram from "../../public/icon/telegram.svg";
import YouTube from "../../public/icon/youtube.svg";
import PhoneIcon from "../../public/icon/phone.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="">
      <div className="overflow-hidden bg-[#222341] py-10 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid-cols-1 flex-col gap-8 max-md:flex max-md:items-center max-md:justify-center md:grid md:grid-cols-3">
            <div
              className="flex flex-col items-start gap-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Link href={"/"}>
                <Image
                  src={Logo2}
                  alt="Logo"
                  width={200}
                  height={40}
                  className="mb-4"
                />
              </Link>
              <div className="mt-4 flex items-center justify-center space-x-4 max-md:mb-6 max-md:w-full max-md:gap-10">
                <Link
                  href={"https://t.me/repidagency6600"}
                  className="max-md:scale-125"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    src={Telegram}
                    width={30}
                    height={30}
                    alt="Telegram icon"
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/repid.agency/"}
                  className="max-md:scale-125"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Image
                    src={Instagram}
                    width={30}
                    height={30}
                    alt="Instagram icon"
                  />
                </Link>
                <Link
                  href="/"
                  className="max-md:scale-125"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <Image
                    src={YouTube}
                    width={30}
                    height={30}
                    alt="YouTube icon"
                  />
                </Link>
                <Link
                  href="/"
                  className="max-md:scale-125"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Image
                    src={Facebook}
                    width={30}
                    height={30}
                    alt="Facebook icon"
                  />
                </Link>
              </div>
            </div>

            <div
              className="max-md:hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="mb-6 text-xl font-semibold">Sahifalar</h3>
              <ul className="mt-12 space-y-4">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    Jamoamiz
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-300">
                    Xizmatlarimiz
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-gray-300">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col items-start"
            >
              <Link
                href="/contact"
                className="mb-12 text-lg font-semibold max-md:hidden"
              >
                Bizga hoziroq qo'ng'iroq qiling
              </Link>
              <p className="mb-4 text-lg max-md:hidden">Bog'lanish</p>
              <ul className="space-y-8 max-md:space-y-7">
                <li className="flex items-center space-x-2 max-md:justify-center max-md:gap-2">
                  <Image
                    src={PhoneIcon}
                    width={35}
                    height={35}
                    alt="Phone icon"
                    className="max-md:translate-y-1 max-md:scale-125"
                  />
                  <Link href={"tel:+998971016600"} className="max-md:text-3xl">
                    (97) 101-66-00
                  </Link>
                </li>
                <li className="flex items-center space-x-2 max-md:justify-center max-md:gap-2">
                  <Image
                    src={PhoneIcon}
                    width={35}
                    height={35}
                    alt="Phone icon"
                    className="max-md:translate-y-1 max-md:scale-125"
                  />
                  <Link href={"tel:+998971016600"} className="max-md:text-3xl">
                    (97) 770-04-78
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center justify-center bg-[#292a44f2] text-center text-sm text-white max-md:h-20 max-md:text-xl">
        <p>{currentYear} "Repid agency”</p>
      </div>
    </footer>
  );
}

export default Footer;
