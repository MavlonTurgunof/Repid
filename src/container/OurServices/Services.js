import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-16 flex lg:flex-row flex-col justify-between">
        <div className="relative">
          <Image
            src="/img/Services1.jpg"
            alt="services"
            width={576}
            height={436}
          />
          <Image
            className="absolute top-56 left-[300px] border-white border-[20px] lg:inline-block hidden"
            src="/img/Services.jpg"
            alt="services"
            width={400}
            height={421}
          />
        </div>
        <div className="lg:max-w-[42%] lg:mt-0 mt-8 mx-[2%]">
          <h1 className="lg:text-left text-center text-[#0B0B0B] text-[28px] font-bold mb-4">
            Bizning Xizmatlar
          </h1>
          <p className="text-left text-[#0B0B0B] text-[14px] font-medium leading-10 mb-4">
            Repid Agentligida biz mijozlarimizning o'ziga xos ehtiyojlariga mos
            keladigan keng ko'lamli IT xizmatlarini taqdim etamiz. Bizning
            maqsadimiz o'sishni rag'batlantiruvchi, samaradorlikni oshiruvchi va
            raqamli tajribani yengillashtiruvchi yechimlarni taqdim etishdir.
          </p>
          <p className="text-left text-[#0B0B0B] text-[14px] font-medium leading-10">
            -Maxsus Veb-sayt Dizayni va Ishlab Chiqish: Biznesingiz maqsadlariga
            moslashtirilgan individual yechimlarni yaratish.
            <br />
            -Native Ilovalarni Ishlab Chiqish: iOS yoki Android uchun Swift,
            Kotlin yoki Objective-C yordamida ilovalar yaratish.
            <br />
            -SEO Optimizatsiya: Saytingizning tuzilmasi, mazmuni va meta
            teglarini yaxshilab, uni qidiruv tizimlariga mos qilish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
