import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Head from "next/head";

function Services() {
  const [services, setServices] = useState([]);

  const servicesNew = [
    {
      id: 1,
      title: "App Xizmati",
      description:
        "APP xizmati mobil foydalanuvchilar uchun qulay va funksional ilovalarni yaratish va qo‘llab-quvvatlashni ta'minlaydi.",
      image: "/img/image1.png",
    },
    {
      id: 2,
      title: "Web sayt Xizmatimiz",
      description:
        "Web sayt kompaniyani internetda ko'rinadigan qilib, savdo, muloqot, va marketing imkoniyatlarini kengaytirish uchun muhim vositadir.",
      image: "/img/image2.png",
    },
    {
      id: 3,
      title: "Naming Xizmati",
      description:
        "Bu kompaniyalar, mahsulotlar, xizmatlar yoki brendlar uchun nom tanlash jarayonidir. Yaxshi nom bozordagi pozitsiyasiga katta ta’sir ko‘rsatadi.",
      image: "/img/image3.png",
    },
    {
      id: 4,
      title: "Logo Xizmati",
      description:
        "Bu kompaniya brend yoki mahsulotning o'ziga xos vizual identifikatsiyasini yaratish jarayonidir. Yaxshi logo kompaniyaning asosiy qadriyatlarini, missiyasini va biznesini vizual tarzda aks ettiradi.",
      image: "/img/image3.png",
    },
    {
      id: 5,
      title: "Brendbook va Guidebook",
      description:
        "Brendbook — brendning umumiy ko‘rinishi va o‘ziga xosligini belgilaydi, Guidebook esa brendni qanday boshqarish va ishga tushirish bo‘yicha amaliy ko'rsatma.",
      image: "/img/image3.png",
    },
    {
      id: 6,
      title: "SEO Xizmati",
      description:
        "SEOning asosiy maqsadi — saytni qidiruv natijalarining yuqori pozitsiyalariga chiqarish orqali ko‘proq organik trafik jalb qilishdir.",
      image: "/img/image3.png",
    },
    {
      id: 7,
      title: "CRM Xizmati",
      description:
        "Mijozlar bilan munosabatlarni boshqarish tizimi bo‘lib, kompaniyalarga mijozlar bilan aloqalarni yaxshilash, savdo jarayonlarini optimallashtirish imkonini beradi.",
      image: "/img/image3.png",
    },
    {
      id: 8,
      title: "Telegram Bot Xizmati",
      description:
        "Telegram botlar kompaniyalar va foydalanuvchilar o‘rtasidagi aloqani yaxshilash, ko‘plab vazifalarni qilishda foydali vosita hisoblanadi.",
      image: "/img/image3.png",
    },
    {
      id: 9,
      title: "Yandex Eats, Uzum Tezkor, Express24 ga ulab berish xizmati",
      description:
        "Bu kompaniyalar bilan shartnoma qilish va dastafka xizmatini yo'lga qo'yish.",
      image: "/img/image3.png",
    },
    {
      id: 10,
      title: "SMM Xizmati",
      description:
        "Biz sizning brendingizni ijtimoiy tarmoqlarda kengaytirib beramiz. Kontent yaratish va reklama kampaniyalarini boshqarishda ko‘maklashib, biznesingizni yangi bosqichga olib chiqamiz.",
      image: "/img/image3.png",
    },
  ];

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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services, using default data", error);
        setServices(servicesNew);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Head>
        <title>Bizning Xizmatlar | REpid Agency</title>
        <meta
          name="description"
          content="Bizning xizmatlarimiz: mobil ilovalar, web saytlar, brend dizayni, SEO va boshqa ko'plab xizmatlar. Bizning xizmatlarimiz yordamida biznesingizni rivojlantiring."
        />
        <meta
          name="keywords"
          content="mobil ilovalar, web rivojlantirish, SEO xizmatlari, CRM Xizmati, Telegram botlar, brending xizmatlari, logo yasab berish, ijtimoiy media marketing, raqamli marketing, e-commerce, SMM"
        />
      </Head>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 lg:mt-20 mt-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#282B4C]">
            Bizning Xizmatlar
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mt-2">
            Biz sizga o'zimizning xizmatlarimizni taklif qilamiz.
          </p>
        </div>

        <Slider {...settings} className="pb-10">
          {services.map((service) => (
            <div className="px-3" key={service.id}>
              <div className="bg-white p-6 mb-4 rounded-lg shadow-md">
                <div className="flex h-[400px] flex-col gap-5">
                  <div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                    />
                  </div>
                  <h4 className="text-xl font-bold">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
                <button className="mt-4 border border-gray-500 p-2 rounded-md text-xl w-full">
                  Malumotlar
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Services;
