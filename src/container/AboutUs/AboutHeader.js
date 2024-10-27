import Link from "next/link";
import React from "react";
import Container from "@/components/container";

function AboutHeader() {
  return (
    <header
      className="bg-cover bg-no-repeat placeholder: h-[530px] sm:h-[500px] text-white bg-[url('/img/bg2.png'),url('/img/bg2.png')]"
    >
      <div className="flex flex-col md:flex-row h-full overflow-y-hidden overflow-x-hidden">
        <Container>
          <div className="lg:text-left mt-[40px] md:mt-[80px] text-center lg:w-1/2 w-ful justify-center">
            <h1 className="text-[16px] font-semibold sm:text-[20px] mb-3">
              Texnologiyalar va Innovatsiya Markazi
            </h1>
            <h2 className="text-[24px] font-bold leading-tight sm:text-[30px] sm:leading-[35px] mb-4">
              <span className="text-[#F5941F]">Rapid Agency</span> -
              texnologiyalar va kreativ marketingda yetakchilik qiluvchi
              agentlik
            </h2>
            <p className="lg:text-left text-center text-[18px] sm:text-[16px] mb-16">
              Bizning ekspertlar jamoasi sizga eng zamonaviy dasturlar, raqamli
              marketing strategiyalari va IT maslahati orqali maqsadlaringizga
              tezroq erishishga yordam beradi. Texnologiyalar orqali raqobatda
              yetakchilik qiling.
            </p>
            {/* Buttons */}
            <div
              className="flex flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center"
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
        </Container>
      </div>
    </header>
  );
}

export default AboutHeader;
