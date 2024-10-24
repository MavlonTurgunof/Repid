import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Image1 from "../../../public/img/image1.png";
import Image2 from "../../../public/img/image2.png";
import Image3 from "../../../public/img/image3.png";

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 lg:mt-20 mt-4">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#282B4C]">
          Bizning Xizmatlar
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-2">
          Biz sizga o'zimizning xizmatlarimizni taklif qilamiz.
        </p>
      </div>

      <Slider {...settings} className="pb-10">
        {/* Service Card 1 */}
        <div className="px-3">
          <div className="bg-white p-7 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image1} alt="Service 1" />
              </div>
              <h4 className="text-xl font-bold">App Xizmati</h4>
              <p>
                APP xizmati mobil foydalanuvchilar uchun qulay va funksional
                ilovalarni yaratish va qo‘llab-quvvatlashni ta'minlaydi.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 2 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image2} alt="Service 2" />
              </div>
              <h4 className="text-xl font-bold">Web sayt Xizmatimiz </h4>
              <p>
                Web sayt kompaniyani internetda ko'rinadigan qilib, savdo,
                muloqot, va marketing imkoniyatlarini kengaytirish uchun muhim
                vositadir.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 3 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">Naming Xizmati</h4>
              <p>
                Bu kompaniyalar, mahsulotlar, xizmatlar yoki brendlar uchun nom
                tanlash jarayonidir. Yaxshi nom bozordagi pozitsiyasiga katta
                ta’sir ko‘rsatadi.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 4 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 4" />
              </div>
              <h4 className="text-xl font-bold">Logo Xizmati</h4>
              <p>
                Bu kompaniyalar, mahsulotlar, xizmatlar yoki brendlar uchun nom
                tanlash jarayonidir. Yaxshi nom bozordagi pozitsiyasiga katta
                ta’sir ko‘rsatadi.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 5 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">Brendbook va Guidebook</h4>
              <p>
                Brendbook — brendning umumiy ko‘rinishi va o‘ziga xosligini
                belgilaydi, Guidebook esa brendni qanday boshqarish va ishga
                tushirish bo‘yicha amaliy ko'rsatma.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 5 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">SEO Xizmati</h4>
              <p>
                SEOning asosiy maqsadi — saytni qidiruv natijalarining yuqori
                pozitsiyalariga chiqarish orqali ko‘proq organik trafik jalb
                qilishdir.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 6 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">CRM Xizmati</h4>
              <p>
                Mijozlar bilan munosabatlarni boshqarish tizimi bo‘lib,
                kompaniyalarga mijozlar bilan aloqalarni yaxshilash, savdo
                jarayonlarini optimallashtirish imkonini beradi.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>{" "}
        {/* Service Card 6 */}
        <div className="px-3">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">Telegram Bot Xizmati</h4>
              <p>
                Telegram botlar kompaniyalar va foydalanuvchilar o‘rtasidagi
                aloqani yaxshilash, ko‘plab vazifalarni qilishda foydali vosita
                hisoblanadi.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
        {/* Service Card 6 */}
        <div className="px-3">
          <div className="bg-white p-[20px] rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">
                Yandex Eats , Uzum Tezkor , Express24 ga ulab berish xizmati
              </h4>
              <p>
                Bu kompaniyalar bilan shartnoma qilish va dastafka xizmatini
                yo'lga qo'yish.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>{" "}
        <div className="px-3">
          <div className="bg-white p-[20px] rounded-lg shadow-md">
            <div className="flex h-full flex-col gap-5">
              <div>
                <Image src={Image3} alt="Service 3" />
              </div>
              <h4 className="text-xl font-bold">SMM Xizmati</h4>
              <p>
                Biz sizning brendingizni ijtimoiy tarmoqlarda kengaytirib
                beramiz. Kontent yaratish va reklama kampaniyalarini
                boshqarishda ko‘maklashib, biznesingizni yangi bosqichga olib
                chiqamiz.
              </p>
            </div>
            <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
              Malumotlar
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Services;
