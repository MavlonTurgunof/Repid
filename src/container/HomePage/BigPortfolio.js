import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function BigPortfolio() {
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      image: "/img/Portfolio1.svg",
      title: "Shaxsiy Brend",
      category: "Shaxsiy Brend",
      url: "https://www.theneweducation.uz/",
    },
    {
      image: "/img/Portfolio3.svg",
      title: "English Campus",
      category: "English Campus",
      url: "https://instavibe.uz/",
    },
    {
      image: "/img/Portfolio4.jpg",
      title: "Saidoff - Agency",
      category: "Branding & Web",
      url: "https://www.saidoff-academy.uz/",
    },
    {
      image: "/img/Portfolio5.svg",
      title: "Bumen",
      category: "Branding & Web",
      url: "https://bumen-guw1i9ofn-oybeks-projects-ffe4c3af.vercel.app/",
    },
    {
      image: "/img/Portfolio6.svg",
      title: "Chery",
      category: "Branding & Business",
      url: "#",
    },
    {
      image: "/img/Portfolio7.svg",
      title: "Gohang",
      category: "Branding",
      url: "#",
    },
    {
      image: "/img/Portfolio8.svg",
      title: "Rosmell",
      category: "Branding",
      url: "#",
    },
    {
      image: "/img/Portfolio9.svg",
      title: "Kork",
      category: "Branding",
      url: "#",
    },
    {
      image: "/img/Portfolio10.svg",
      title: "Premium Education",
      category: "Branding ",
      url: "#",
    },
    {
      image: "/img/Portfolio11.svg",
      title: "Golden Eld",
      category: "Branding",
      url: "#",
    },
    {
      image: "/img/12.svg",
      title: "Tajaraa",
      category: "Branding",
      url: "#",
    },
    {
      image: "/img/Portfolio2.jpg",
      title: "GoldenEld All",
      category: "GoldenEld all",
      url: "https://golden-eld.com/",
    },
  ];

  const buttons = [
    "All",
    "Web sayt",
    "Dizayn xizmatlari",
    "Telegram bot",
    "Mobil ilova",
    "CRM",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const buttonCarouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] text-[#282B4C] font-bold">
            Portfolio
          </h2>
        </div>

        <div
          className="block lg:hidden mb-4 w-auto overflow-hidden"
          data-aos="fade-up"
        >
          <Slider {...buttonCarouselSettings}>
            {buttons.map((button) => (
              <div key={button} className="px-2">
                <button
                  onClick={() => setSelected(button)}
                  className={`text-[10px] w-full px-4 py-2 rounded-full border border-gray-300 transition-transform transform ${
                    selected === button
                      ? "bg-[#1D1C34] text-white scale-110"
                      : "bg-white text-black hover:scale-105"
                  }`}
                >
                  {button}
                </button>
              </div>
            ))}
          </Slider>
        </div>

        {/* Button Grid for Desktop */}
        <div className="hidden lg:flex flex-row gap-4 mb-4" data-aos="fade-up">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setSelected(button)}
              className={`w-full px-4 py-2 rounded-full border border-gray-300 transition-transform transform ${
                selected === button
                  ? "bg-[#1D1C34] text-white scale-110"
                  : "bg-white text-black hover:scale-105"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="block lg:hidden overflow-hidden">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden shadow-lg w-full h-[400px]"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </a>
            ))}
          </Slider>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 xl:gap-8 lg:gap-4 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden shadow-lg w-full h-[400px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${project.image})` }}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              {/* Additional content if needed */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BigPortfolio;
