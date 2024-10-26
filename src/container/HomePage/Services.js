import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Head from "next/head";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicesNew = [
    // ...your services data here...
  ];

  const PrevArrow = ({ onClick }) => (
    <div className="slick-prev flex slick-arrow arrow-style" onClick={onClick}>
      <GrFormPrevious className="text-[20px]" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="slick-next flex slick-arrow arrow-style" onClick={onClick}>
      <GrFormNext className="text-[20px]" />
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services, using default data", error);
        setServices(servicesNew);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <Head>
        <title>Repid Agency</title>
        <meta name="description" content="..." />
        <meta name="keywords" content="..." />
      </Head>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 lg:mt-20 mt-4">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#282B4C]">Bizning Xizmatlar</h1>
          <p className="text-lg md:text-xl text-gray-500 mt-2">
            Biz sizga o'zimizning xizmatlarimizni taklif qilamiz.
          </p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <Slider {...settings} className="pb-10">
            {services.map((service) => (
              <div className="px-3" key={service.id}>
                <div className="bg-white p-3 md:p-5 mb-4 rounded-lg shadow-lg">
                  <div className="flex h-[370px] md:h-[400px] flex-col md:gap-4 gap-2">
                    <Image src={service.image} alt={service.title} width={500} height={300} />
                    <h4 className="text-[18px] md:text-xl font-bold">{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                  <button className="mt-4 border border-gray-500 hover:border-[#F7941D] hover:text-[#F7941D] duration-200 p-2 rounded-md text-xl w-full">
                    Malumotlar
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <style jsx>{`
        .arrow-style {
          background: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          color: #F7941D;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
      `}</style>
    </>
  );
}

export default Services;
