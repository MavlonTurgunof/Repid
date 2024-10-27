import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MainHeader({ contactRef }) {
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const pathname = usePathname()

  return (
    <header className={`relative bg-cover bg-no-repeat placeholder: h-[460px] lg:h-[500px] md:h-[450px] text-white ${pathname === "/" ? "bg-[url('/img/MainHeader.png')]" : "bg-[url('/img/portfolio-bg-image.png')]"}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 h-full overflow-y-hidden overflow-x-hidden">
        <div className="lg:text-left text-center lg:w-1/2 w-full xl:mt-[8%] mt-[10%] space-y-4 flex flex-col justify-center">
          <h1 className="text-[20px] font-bold sm:text-[18px]">
            Texnologiyalar va Innovatsiya Markazi
          </h1>
          <h2 className="text-[20px] font-bold leading-tight sm:text-[30px] sm:leading-[35px]">
            <span className="text-[#F5941F]">Rapid Agency</span> -
            texnologiyalar va kreativ marketingda yetakchilik qiluvchi agentlik
          </h2>
          <p className="lg:text-left text-center text-[18px] sm:text-[16px]">
            Bizning ekspertlar jamoasi sizga eng zamonaviy dasturlar, raqamli
            marketing strategiyalari va IT maslahati orqali maqsadlaringizga
            tezroq erishishga yordam beradi. Texnologiyalar orqali raqobatda
            yetakchilik qiling.
          </p>
          {/* Buttons */}
          <div
            className="mt-[20%] flex flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/contact"
              className="bg-[#F5941F] hover:bg-[#E67C14] duration-150 text-white xl:px-6 px-4 py-3 rounded-lg font-medium text-center"
            >
              Biz bilan bog'laning
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 text-white xl:px-6 px-4 py-3 rounded-lg hover:bg-gray-700 duration-150 font-medium text-center"
            >
              Barcha xizmatlar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
