import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

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

  const PrevArrow = ({ onClick }) => (
    <div
      className={`slick-prev:before flex slick-arrow absolute top-[40%] bg-[#fff] -left-[20px]`}
      onClick={onClick}
      style={{
        color: "#F7941D",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="scale-150">
        <GrFormPrevious className="text-[20px]" />
      </div>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className={`slick-next:before flex slick-arrow absolute top-[40%] bg-[#fff] -right-[15px]`}
      onClick={onClick}
      style={{
        color: "#F7941D",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="scale-150">
        <GrFormNext className="text-[20px]" />
      </div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          centerMode: true,
          swipe: true,
          prevArrow: false,
          nextArrow: false,
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
    <div className="container mx-auto px-[26px] md:px-10 lg:px-20">
      <div className="text-center mb-6 md:mb-10">
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
            <div className="bg-white md:p-5 border md:border-none rounded-t-[30px] rounded-b-[24px] mb-4 rounded-lg">
              <div className="flex h-[370px] md:h-[400px] flex-col  md:gap-4 gap-2">
                <div>
                  <Image
                    className="rounded-[30px]"
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                  />
                </div>
                <h4 className="text-[18px] px-4 md:p-0 text-center md:text-start md:text-xl font-bold">
                  {service.title}
                </h4>
                <p className="text-center md:text-start px-4 md:p-0 text-[14px] md:text-[16px] text-[#4A4A4A]">{service.description}</p>
              </div>
              <div className="p-4 md:p-0">
                <button className="md:mt-8 mt-3 md:w-[184px] border border-gray-500 hover:border-[#F7941D] hover:text-[#F7941D] duration-200 p-2 rounded-2xl md:rounded-lg text-xl w-full">
                  Malumotlar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
