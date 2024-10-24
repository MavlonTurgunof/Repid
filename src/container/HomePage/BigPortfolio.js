import React, { useState } from "react";

function BigPortfolio() {
  const [selected, setSelected] = useState("All");

  const projects = [
    {
      image: "/img/Portfolio2.jpg",
      title: "GoldenEld All",
      category: "GoldenEld all",
      width: 596,
      height: 738,
      url: "https://golden-eld.com/",
    },
    {
      image: "/img/Portfolio1.jpg",
      title: "Shaxsiy Brend",
      category: "Shaxsiy Brend",
      width: 596,
      height: 738,
      url: "https://instavibe.uz/",
    },
    {
      image: "/img/Portfolio3.jpg",
      title: "English Campus",
      category: "English Campus",
      width: 596,
      height: 738,
      url: "https://www.theneweducation.uz/",
    },
    {
      image: "/img/Portfolio4.jpg",
      title: "Saidoff - Agency",
      category: "Branding & Web",
      width: 596,
      height: 738,
      url: "https://www.saidoff-academy.uz/",
    },
    {
      image: "/img/Portfolio5.png",
      title: "Portfolio",
      category: "Design & Development",
      width: 596,
      height: 738,
      url: "https://elements.envato.com/web-templates/landing-page-templates/portfolio",
    },
    {
      image: "/img/Portfolio6.png",
      title: "Croma - Agency",
      category: "Branding & Web",
      width: 596,
      height: 738,
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

  return (
    <section className="bg-white text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] text-[#282B4C] font-bold">
            Portfolio
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden shadow-lg w-full sm:w-[417px] h-[400px] sm:h-[409px] group"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1C34] to-[#2B2F53] rounded-[6px]">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BigPortfolio;
