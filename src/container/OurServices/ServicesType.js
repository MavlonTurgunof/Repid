import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesTypes() {
  const [selected, setSelected] = useState("All");

  const projects = [
    {
      image: "/img/Portfolio1.png",
      title: "Fortknox Chat Application",
      category: "Branding & Design",
      width: 596,
      height: 738,
    },
    {
      image: "/img/Portfolio2.png",
      title: "Boston RealEstate App",
      category: "Branding & UI",
      width: 596,
      height: 738,
    },
    {
      image: "/img/Portfolio3.png",
      title: "Portfolio",
      category: "Design & Development",
      width: 596,
      height: 738,
    },
    {
      image: "/img/Portfolio4.png",
      title: "Croma - Agency",
      category: "Branding & Web",
      width: 596,
      height: 738,
    },
    {
      image: "/img/Portfolio5.png",
      title: "Portfolio",
      category: "Design & Development",
      width: 596,
      height: 738,
    },
    {
      image: "/img/Portfolio6.png",
      title: "Croma - Agency",
      category: "Branding & Web",
      width: 596,
      height: 738,
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
        breakpoint: 1024, // For mobile version
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
    slidesToShow: 3, // Show 3 buttons at once on mobile
    slidesToScroll: 1,
    arrows: false, // Disable arrows for mobile
    responsive: [
      {
        breakpoint: 1024, // Only for smaller screens
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
        <div className="text-center mb-8">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] text-[#282B4C] font-bold">
            Xizmat Turlari
          </h2>
        </div>

        {/* Button Carousel for Mobile */}
        <div className="block sm:hidden mb-4">
          <Slider {...buttonCarouselSettings}>
            {buttons.map((button) => (
              <div key={button} className="px-2">
                <button
                  onClick={() => setSelected(button)}
                  className={`w-full px-4 py-2 rounded-full border border-gray-300 transition-transform transform ${
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
        <div className="hidden sm:flex flex-wrap justify-center items-center space-x-4 space-y-4 sm:space-y-0 py-4">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setSelected(button)}
              className={`px-4 py-2 rounded-full border border-gray-300 transition-transform transform ${
                selected === button
                  ? "bg-[#1D1C34] text-white scale-110"
                  : "bg-white text-black hover:scale-105"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        {/* Portfolio Carousel for Mobile */}
        <div className="block sm:hidden overflow-hidden">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg w-full h-[400px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1C34] to-[#2B2F53] rounded-[6px]">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Portfolio Grid for Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg w-full sm:w-[417px] h-[400px] sm:h-[409px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1C34] to-[#2B2F53] rounded-[6px]">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesTypes;
