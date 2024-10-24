import Marquee from "react-fast-marquee";

const logos = [
  { name: "SilSila", imgSrc: "/img/Sisila.png" },
  { name: "Wave", imgSrc: "/img/proline.png" },
  { name: "Proline", imgSrc: "/img/wavefun.png" },
  { name: "Siolla", imgSrc: "/img/doradesign.png" },
  { name: "Dora Design", imgSrc: "/img/convertkit.png" },
];

const Partners = () => {
  return (
    <div className="bg-white py-20">
      <h3 className="text-center mb-12 text-4xl font-bold text-[#282B4C]">Hamkorlarimiz</h3>
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-16">
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
