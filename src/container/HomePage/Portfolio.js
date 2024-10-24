import Image from "next/image";
import React, { useState } from "react";

function BigPortfolio() {
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

  return (
    <section className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] text-[#282B4C] font-bold">
            Portfolio
          </h2>
          {/* <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br className="hidden lg:block" /> has been
            the industry's standard dummy text ever since the 1500s.....
          </p> */}
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-20  justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg w-full sm:w-[417px] h-[400px] sm:h-[409px]"
              style={{ backgroundImage: `url(${project.image})` }}
            >
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

export default BigPortfolio;
