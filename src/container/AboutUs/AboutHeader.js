import Link from "next/link";
import React from "react";

function AboutHeader({ contactRef }) {
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative bg-cover bg-no-repeat  bg-[url('/img/bg2.png'),url('/img/bg2.png')] h-[600px] lg:h-[500px] md:h-[450px] sm:h-[400px] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 h-full overflow-x-hidden">
        <div className="lg:text-left text-center lg:w-1/2 w-full xl:mt-[8%] mt-[20%] space-y-4 flex flex-col justify-center">
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
            className="mt-[40px] flex flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="/Contactpage"
              className="bg-[#F5941F] hover:bg-[#E67C14] duration-150 text-white xl:px-6 px-4 py-3 mt-7 rounded-lg font-medium text-center"
            >
              Biz bilan bog'laning
            </Link>
            <Link
              href="/OurServices"
              className="border border-gray-300 duration-150 text-white xl:px-6 px-4 py-3 mt-7  rounded-lg hover:bg-gray-700 font-medium text-center"
            >
              Barcha xizmatlar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutHeader;
