import Link from "next/link";
import React from "react";
import Head from "next/head";

function AboutHeader({ contactRef }) {
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Texnologiyalar va Innovatsiya Markazi | Rapid Agency</title>
        <meta
          name="description"
          content="Rapid Agency texnologiyalar va kreativ marketingda yetakchilik qiluvchi agentlik. Zamonaviy dasturlar, raqamli marketing va IT maslahati orqali sizning biznesingizni rivojlantirishda yordam beramiz."
        />
        <meta
          name="keywords"
          content="Rapid Agency, texnologiyalar, innovatsiya markazi, kreativ marketing, IT maslahat, raqamli marketing, biznes rivojlanishi, texnologiya yordamida o'sish"
        />
        <meta property="og:title" content="Rapid Agency | Texnologiyalar va Marketingda Yetakchi" />
        <meta
          property="og:description"
          content="Rapid Agency texnologiyalar va kreativ marketingda yetakchilik qiluvchi agentlik bo'lib, zamonaviy yechimlar orqali sizning biznesingizga rivojlanishda yordam beramiz."
        />
        <meta property="og:image" content="/img/bg2.png" />
        <meta property="og:url" content="https://www.repid.uz/" />
        <meta name="twitter:card" content="/img/bg2.png" />
      </Head>

      <header className="relative bg-cover bg-no-repeat bg-[url('/img/bg2.png'),url('/img/bg2.png')] h-[600px] lg:h-[500px] md:h-[450px] sm:h-[400px] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 h-full overflow-hidden">
          <div className="lg:text-left text-center lg:w-1/2 w-full xl:mt-[8%] mt-[20%] space-y-4 flex flex-col justify-center">
            <h1 className="text-[20px] font-bold sm:text-[18px]">
              Texnologiyalar va Innovatsiya Markazi
            </h1>
            <h2 className="text-[20px] font-bold leading-tight sm:text-[30px] sm:leading-[35px]">
              <span className="text-[#F5941F]">Rapid Agency</span> - texnologiyalar va kreativ marketingda yetakchilik qiluvchi agentlik
            </h2>
            <p className="lg:text-left text-center text-[18px] sm:text-[16px]">
              Bizning ekspertlar jamoasi sizga eng zamonaviy dasturlar, raqamli marketing strategiyalari va IT maslahati orqali maqsadlaringizga tezroq erishishga yordam beradi. Texnologiyalar orqali raqobatda yetakchilik qiling.
            </p>
            {/* Buttons */}
            <div className="mt-[40px] flex flex-row gap-6 justify-center lg:justify-start items-center">
              <Link
                href="/Contactpage"
                className="bg-[#F5941F] text-white xl:px-6 px-4 py-3 mt-7 rounded-lg font-medium text-center"
              >
                Biz bilan bog'laning
              </Link>
              <Link
                href="/OurServices"
                className="border border-gray-300 text-white xl:px-6 px-4 py-3 mt-7 rounded-lg hover:bg-gray-700 font-medium text-center"
              >
                Barcha xizmatlar
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AboutHeader;
