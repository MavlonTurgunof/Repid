import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const logos = [
  { name: "SilSila", imgSrc: "/icon/bumen-logo.svg" },
  { name: "Wave", imgSrc: "/icon/saidoff-logo.svg" },
  { name: "Proline", imgSrc: "/icon/Chere-logo.svg" },
  { name: "SilSila", imgSrc: "/icon/bumen-logo.svg" },
  { name: "Wave", imgSrc: "/icon/saidoff-logo.svg" },
  { name: "Proline", imgSrc: "/icon/Chere-logo.svg" },
];

const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-transparent pb-14 md:pb-20"
      data-aos="fade-up"
    >
      <h3
        className="text-center mb-12 text-4xl font-bold text-[#282B4C]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hamkorlarimiz
      </h3>
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="lg:mx-16 mx-8"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <img
              src={logo.imgSrc}
              alt={`${logo.name} logo`}
              className="h-12 w-auto"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
