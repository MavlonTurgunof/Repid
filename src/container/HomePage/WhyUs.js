import React from "react";
import Head from "next/head"; // Import Head for meta tags
import Image from "next/image";
import sariq from "../../../public/img/sariq.png";
import olovrang from "../../../public/img/olovrang.png";
import kok from "../../../public/img/kok.png";
import havorang from "../../../public/img/havorang.png";
import yashil from "../../../public/img/yashil.png";

function WhyUs() {
  return (
    <>
      <Head>
        <title>Repid Agency</title>
        <meta
          name="description"
          content="Repid agentligi kuchli portfolio, tajribali jamoa va kafolatlangan natijalarni taklif etuvchi zamonaviy professional ta’limdagi hamkoringizdir."
        />
        <meta
          name="keywords"
          content="Repid agentligi, professional xizmat, raqamli strategiyalar, marketing, portfolio, mijozlarni qo'llab-quvvatlash"
        />
        <meta name="author" content="Repid Agency" />
      </Head>
      <div className="container mx-auto lg:mt-20 mt-4 w-11/12 overflow-hidden lg:px-20">
        <h3 className="px-3 text-center text-5xl leading-[72px] max-sm:text-[30px]">
          <span className="text-[#f48c06] transition-all font-bold">Nega</span>{" "}
          aynan biz?
        </h3>
        <p className="my-2 mb-10 text-center text-lg text-gray-600 max-md:mb-14 max-md:text-base font-semibold">
          Zamonaviy kasblarni o'rganib Yirik daromad sari qadam tashlashingizda.
          Repid sizga ko'maklashadi.
        </p>
        <div className="grid grid-cols-3 gap-5 pb-20 max-xl:grid-cols-2 max-md:grid-cols-1">
          {[
            {
              image: kok,
              title: "Tajribali jamoa",
              description:
                "Repid Agency’da bizning jamoamiz marketing va raqamli strategiyalar sohasida katta tajribaga ega. Har bir mutaxassis o'z yo'nalishida yetuk bo'lib, sizning loyihangizni sifatli va professional tarzda amalga oshiradi.",
            },
            {
              image: sariq,
              title: "Kuchli portfolio",
              description:
                "Bizning keng ko'lamli portfolioimizda ko'plab muvaffaqiyatli loyihalar mavjud. Har bir loyiha mijozlarimizning o'ziga xos ehtiyojlariga mos keluvchi natijalar bergan va bu tajribamiz orqali sizga ham eng yuqori sifatni taqdim etamiz.",
            },
            {
              image: olovrang,
              title: "Shartnoma asosida ishlaymiz",
              description:
                "Biz siz bilan rasmiy shartnoma asosida ishlaymiz. Bu nafaqat sizning huquqlaringizni himoya qiladi, balki hisob raqamingiz orqali to'lovlarni amalga oshirish imkonini ham beradi, bu esa jarayonni yanada osonlashtiradi.",
            },
            {
              image: havorang,
              title: "Natija kafolati yoki 100% pulni qaytarish",
              description:
                "Biz siz istagan natijaga erishish uchun astoydil harakat qilamiz. Agar ko'zlangan natijalarga erishmasak, pulingizni 100% qaytarib beramiz. Bu bizning xizmatimiz sifatiga bo'lgan ishonchimizning belgisi.",
            },
            {
              image: yashil,
              title: "Bepul qo'llab-quvvatlash xizmatlari",
              description:
                "Xizmatlarimiz turiga qarab, sizga 1 oydan 3 oygacha bepul qo'llab-quvvatlash xizmatlarini taqdim etamiz. Loyihangiz muvaffaqiyatli amalga oshirilgandan keyin ham, biz har doim yoningizda bo'lamiz.",
            },
            {
              image: kok,
              title: "Chegirmalar",
              description:
                "Biz mijozlar uchun chegirmalar tizimini taqdim etamiz: Birinchi xizmatdan foydalanganda, ikkinchi xizmatga 30% chegirma olasiz. Uchta xizmatdan foydalansangiz, to‘rtinchi xizmat 50% chegirmali bo‘ladi. To‘rtta xizmatdan foydalanganda esa, beshinchi xizmat mutlaqo bepul!",
            },
          ].map((item, index) => (
            <div className="h-full" key={index}>
              <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:border-none md:hover:shadow-2xl">
                <div className="">
                  <Image src={item.image} alt={item.title} />
                </div>
                <h4 className="text-center text-xl font-bold">{item.title}</h4>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyUs;
