import Image from "next/image";
import React from "react";
import Head from "next/head";

function Services() {
  return (
    <div>
      <Head>
        <title>Repid Agency - Our Services</title>
        <meta
          name="description"
          content="Repid agentligi tomonidan taqdim etilayotgan turli IT xizmatlarini, maxsus veb-sayt dizayni,  ilovalarni ishlab chiqish va SEO optimallashtirish bilan tanishing."
        />
        <meta name="keywords" content="IT xizmatlari, veb-sayt dizayni, ilovalarni ishlab chiqish, SEO optimallashtirish" />
        <link rel="canonical" href="https://www.repid.uz/OurServices" />
      </Head>

      <div className="max-w-7xl mx-auto my-16 flex lg:flex-row flex-col justify-between">
        <div className="relative">
          <Image
            src="/img/Services1.jpg"
            alt="Professional IT services by Repid Agency"
            width={576}
            height={436}
          />
          <Image
            className="absolute top-56 left-[300px] border-white border-[20px] lg:inline-block hidden"
            src="/img/Services.jpg"
            alt="Comprehensive services offered at Repid Agency"
            width={400}
            height={421}
          />
        </div>
        <div className="lg:max-w-[42%] lg:mt-0 mt-8 mx-[2%]">
          <h1 className="lg:text-left text-center text-[#0B0B0B] text-[28px] font-bold mb-4">
            Bizning Xizmatlar
          </h1>
          <p className="text-left text-[#0B0B0B] text-[18px] font-medium leading-10 mb-4">
            Repid Agentligida biz mijozlarimizning o'ziga xos ehtiyojlariga mos
            keladigan keng ko'lamli IT xizmatlarini taqdim etamiz. Bizning
            maqsadimiz o'sishni rag'batlantiruvchi, samaradorlikni oshiruvchi va
            raqamli tajribani yengillashtiruvchi yechimlarni taqdim etishdir.
          </p>
          <h2 className="text-left text-[#0B0B0B] text-[22px] font-semibold mb-2">Xizmatlarimiz:</h2>
          <p className="text-left text-[#0B0B0B] text-[18px] font-medium leading-10">
            - <strong>Maxsus Veb-sayt Dizayni va Ishlab Chiqish:</strong> Biznesingiz maqsadlariga
            moslashtirilgan individual yechimlarni yaratish.
            <br />
            - <strong>Native Ilovalarni Ishlab Chiqish:</strong> iOS yoki Android uchun Swift,
            Kotlin yoki Objective-C yordamida ilovalar yaratish.
            <br />
            - <strong>SEO Optimizatsiya:</strong> Saytingizning tuzilmasi, mazmuni va meta
            teglarini yaxshilab, uni qidiruv tizimlariga mos qilish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
