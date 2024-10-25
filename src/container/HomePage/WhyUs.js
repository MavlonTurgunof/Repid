import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className="container mx-auto lg:mt-20 mt-4 w-11/12 overflow-hidden lg:px-20">
      <h3 className="px-3 text-center text-5xl leading-[72px] max-sm:text-[30px]" data-aos="fade-up">
        <span className="text-[#f48c06] transition-all font-bold">Nega</span>{" "}
        aynan biz?
      </h3>
      <p className="my-2 mb-10 text-center text-lg text-black max-md:mb-14 max-md:text-base font-semibold" data-aos="fade-up">
        Zamonaviy kasblarni o'rganib Yirik daromad sari qadam tashlashingizda
        <br />
        Repid sizga ko'maklashadi
      </p>
      <div className="grid grid-cols-3 gap-5 pb-20 max-xl:grid-cols-2 max-md:grid-cols-1">
        {[
          {
            color: "#9848ff",
            title: "Tajribali jamoa",
            description:
              "Repid Agency’da bizning jamoamiz marketing va raqamli strategiyalar sohasida katta tajribaga ega. Har bir mutaxassis o'z yo'nalishida yetuk bo'lib, sizning loyihangizni sifatli va professional tarzda amalga oshiradi.",
            aos: "zoom-in",
          },
          {
            color: "#ffcf59",
            title: "Kuchli portfolio",
            description:
              "Bizning keng ko'lamli portfolioimizda ko'plab muvaffaqiyatli loyihalar mavjud. Har bir loyiha mijozlarimizning o'ziga xos ehtiyojlariga mos keluvchi natijalar bergan va bu tajribamiz orqali sizga ham eng yuqori sifatni taqdim etamiz.",
            aos: "zoom-in",
          },
          {
            color: "#f66742",
            title: "Shartnoma asosida ishlaymiz",
            description:
              "Biz siz bilan rasmiy shartnoma asosida ishlaymiz. Bu nafaqat sizning huquqlaringizni himoya qiladi, balki hisob raqamingiz orqali to'lovlarni amalga oshirish imkonini ham beradi, bu esa jarayonni yanada osonlashtiradi.",
            aos: "zoom-in",
          },
          {
            color: "#29b9e7",
            title: "Natija kafolati yoki 100% pulni qaytarish",
            description:
              "Biz siz istagan natijaga erishish uchun astoydil harakat qilamiz. Agar ko'zlangan natijalarga erishmasak, pulingizni 100% qaytarib beramiz. Bu bizning xizmatimiz sifatiga bo'lgan ishonchimizning belgisi.",
            aos: "zoom-in",
          },
          {
            color: "#f48c06",
            title: "Bepul qo'llab-quvvatlash xizmatlari",
            description:
              "Xizmatlarimiz turiga qarab, sizga 1 oydan 3 oygacha bepul qo'llab-quvvatlash xizmatlarini taqdim etamiz. Loyihangiz muvaffaqiyatli amalga oshirilgandan keyin ham, biz har doim yoningizda bo'lamiz.",
            aos: "zoom-in",
          },
          {
            color: "#5b72ee",
            title: "Chegirmalar",
            description:
              "Biz mijozlar uchun chegirmalar tizimini taqdim etamiz: Birinchi xizmatdan foydalanganda, ikkinchi xizmatga 30% chegirma olasiz. Uchta xizmatdan foydalansangiz, to‘rtinchi xizmat 50% chegirmali bo‘ladi. To‘rtta xizmatdan foydalanganda esa, beshinchi xizmat mutlaqo bepul!",
            aos: "zoom-in",
          },
        ].map((item, index) => (
          <div className="h-full" key={index} data-aos={item.aos}>
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl border border-[#e3e5fa] p-6 px-10 md:transition-all md:hover:-translate-y-1 md:hover:scale-105 md:hover:border-none md:hover:shadow-2xl">
              <div className="rounded-xl" style={{ backgroundColor: item.color, padding: '2rem' }}></div>
              <h4 className="text-center text-xl font-bold">{item.title}</h4>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
