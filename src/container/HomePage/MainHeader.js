import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainHeader({ contactRef }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="relative bg-cover bg-no-repeat bg-[url('/img/Shade.png'),url('/img/MainHeader.png')] h-[600px] text-white lg:h-[500px] md:h-[450px] sm:h-[400px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4">
        {/* Left side - Text content */}
        <div
          className="lg:text-left text-center lg:w-1/2 w-full xl:mt-[8%] mt-[20%] space-y-4"
          data-aos="fade-up"
        >
          <h1 className="text-[20px] font-bold sm:text-[18px]">
            Texnologiyalar va Innovatsiya Markazi
          </h1>
          <h2
            className="text-[20px] font-bold leading-tight sm:text-[30px] sm:leading-[35px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-[#F5941F]">Rapid Agency</span> - texnologiyalar va kreativ
            marketingda yetakchilik qiluvchi agentlik
          </h2>
          <p
            className="lg:text-left text-center text-[18px] sm:text-[16px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Bizning ekspertlar jamoasi sizga eng zamonaviy dasturlar, raqamli marketing
            strategiyalari va IT maslahati orqali maqsadlaringizga tezroq erishishga yordam
            beradi. Texnologiyalar orqali raqobatda yetakchilik qiling.
          </p>
          <div
            className="mt-[10%] flex flex-row gap-6 lg:justify-start justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/Contactpage"
              className="bg-[#F5941F] w-full sm:w-auto text-white xl:px-6 px-4 py-3 rounded-lg font-medium"
            >
              Biz bilan bog'laning
            </Link>
            <Link
              href="/OurServices"
              className="w-full sm:w-auto border border-gray-300 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-medium"
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
