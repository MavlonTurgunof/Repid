import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick"; // Carousel for react-slick
import "slick-carousel/slick/slick.css"; // react-slick CSS files
import "slick-carousel/slick/slick-theme.css"; // slick themes

function ServicesType() {
  const [selected, setSelected] = useState("All");

  const projects = [
    {
      image: "/img/Portfolio2.jpg",
      title: "GoldenEld All",
      category: "GoldenEld all",
      url: "https://golden-eld.com/",
    },
    {
      image: "/img/Portfolio1.jpg",
      title: "Shaxsiy Brend",
      category: "Shaxsiy Brend",
      url: "https://instavibe.uz/",
    },
    {
      image: "/img/Portfolio3.jpg",
      title: "English Campus",
      category: "English Campus",
      url: "https://www.theneweducation.uz/",
    },
    {
      image: "/img/Portfolio4.jpg",
      title: "Saidoff - Agency",
      category: "Branding & Web",
      url: "https://www.saidoff-academy.uz/",
    },
    {
      image: "/img/Portfolio5.png",
      title: "Portfolio",
      category: "Design & Development",
      url: "https://elements.envato.com/...",
    },
    {
      image: "/img/Portfolio6.png",
      title: "Croma - Agency",
      category: "Branding & Web",
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
    "SEO",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] text-[#282B4C] font-bold">
            Xizmat Turlari
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 sm:space-y-0 py-4">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setSelected(button)}
              className={`px-4 py-2 rounded-full border border-gray-300 transition-transform transform
              ${
                selected === button
                  ? "bg-[#1D1C34] text-white scale-110" // Selected state
                  : "bg-white text-black hover:scale-105" // Default state
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="block sm:hidden">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security feature
              >
                <div
                  className="relative overflow-hidden shadow-lg w-full h-[400px] object-cover sm:h-[409px]"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1C34] to-[#2B2F53] rounded-[6px]">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security feature
            >
              <div
                className="relative overflow-hidden shadow-lg w-full sm:w-[417px] h-[400px] object-cover sm:h-[409px]"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1C34] to-[#2B2F53] rounded-[6px]">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesType;
