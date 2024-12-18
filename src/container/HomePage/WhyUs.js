import React from "react";
import sariq from "../../../public/img/sariq.png";
import olovrang from "../../../public/img/olovrang.png";
import kok from "../../../public/img/kok.png";
import havorang from "../../../public/img/havorang.png";
import yashil from "../../../public/img/yashil.png";
import Image from "next/image";
import Container from "@/components/container";

// function Images(props) {
//     return null;
// }

function WhyUs() {
  return (
    <section className="overflow-hidden py-14 md:py-20">
      <Container>
        <h3 className="px-3 text-center text-5xl leading-[72px] max-sm:text-[30px]">
          <span className="text-[#f48c06] transition-all font-bold">Nega</span>{" "}
          aynan biz?
        </h3>
        <p className="my-2 mb-10 text-center text-lg  text-[#8A8A8A] max-md:mb-14">
          Bizning kompaniyamiz xizmatlaridan foydalaning va biznesingizni yangi
          bosqichga olib chiqing!
        </p>
        <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl">
              <div className="">
                <Image src={kok} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold">Tajribali jamoa</h4>
              <p className="text-center">
                Repid Agency’da bizning jamoamiz marketing va raqamli
                strategiyalar sohasida katta tajribaga ega. Har bir mutaxassis
                o'z yo'nalishida yetuk bo'lib, sizning loyihangizni sifatli va
                professional tarzda amalga oshiradi.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl">
              <div className="">
                <Image src={sariq} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold ">
                Kuchli portfolio
              </h4>
              <p className="text-center">
                Bizning keng ko'lamli portfolioimizda ko'plab muvaffaqiyatli
                loyihalar mavjud. Har bir loyiha mijozlarimizning o'ziga xos
                ehtiyojlariga mos keluvchi natijalar bergan va bu tajribamiz
                orqali sizga ham eng yuqori sifatni taqdim etamiz.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl">
              <div className="">
                <Image src={olovrang} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold">
                Shartnoma asosida ishlaymiz
              </h4>
              <p className="text-center">
                Biz siz bilan rasmiy shartnoma asosida ishlaymiz. Bu nafaqat
                sizning huquqlaringizni himoya qiladi, balki hisob raqamingiz
                orqali to'lovlarni amalga oshirish imkonini ham beradi, bu esa
                jarayonni yanada osonlashtiradi.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl">
              <div className="">
                <Image src={havorang} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold">
                Natija kafolati yoki 100% pulni qaytarish
              </h4>
              <p className="text-center">
                Biz siz istagan natijaga erishish uchun astoydil harakat
                qilamiz. Agar ko'zlangan natijalarga erishmasak, pulingizni 100%
                qaytarib beramiz. Bu bizning xizmatimiz sifatiga bo'lgan
                ishonchimizning belgisi.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl">
              <div className="">
                <Image src={yashil} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold">
                Bepul qo'llab-quvvatlash xizmatlari
              </h4>
              <p className="text-center">
                Xizmatlarimiz turiga qarab, sizga 1 oydan 3 oygacha bepul
                qo'llab-quvvatlash xizmatlarini taqdim etamiz. Loyihangiz
                muvaffaqiyatli amalga oshirilgandan keyin ham, biz har doim
                yoningizda bo'lamiz.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:border-none md:hover:shadow-2xl">
              <div className="">
                <Image src={kok} alt={"Repid"} />
              </div>
              <h4 className="text-center text-xl font-bold">Chegirmalar</h4>
              <p className="text-center">
                Biz mijozlar uchun chegirmalar tizimini taqdim etamiz: Birinchi
                xizmatdan foydalanganda, ikkinchi xizmatga 30% chegirma olasiz.
                Uchta xizmatdan foydalansangiz, to‘rtinchi xizmat 50% chegirmali
                bo‘ladi. To‘rtta xizmatdan foydalanganda esa, beshinchi xizmat
                mutlaqo bepul!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
