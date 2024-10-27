import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Head from "next/head";

const coworkers = [
  {
    id: "1",
    name: " Oybek Tojiyev",
    position: "Kompaniya Boshlig'i",
    img: "img/Oybek.png",
    rating: 4,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "2",
    name: "Bahrom  Tahirov",
    position: "Marketing Bo'limi Boshlig'i",
    img: "img/Bahrom.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "3",
    name: "Diyorbek Ibrahimov",
    position: "Project Menejer",
    img: "img/Diyor.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "4",
    name: " Nodirbek Soliyev",
    position: "SEO Mutahasisi",
    img: "img/Nodirbek.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "5",
    name: "Afzal Pulatov",
    position: "UX/UI Dizayner",
    img: "img/Afzal.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "6",
    name: "Anvar Maqsudov",
    position: "Grafik Dizayner",
    img: "img/Anvar.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "7",
    name: "Shahzod Burhanov",
    position: "Flutter Dasturchisi",
    img: "img/Shahzod.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "8",
    name: "Mavlon Turgunov",
    position: "Frontend Dastuchisi",
    img: "img/Mavlon.png",
    rating: 5,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <span key={index} className="text-blue-500">
          ★
        </span>
      ));
  };

  return (
    <>
      <Head>
        <title>
          Bizning Jamoamiz | Rapid Agency - Texnologiya va Marketing
          Mutaxassislari
        </title>
        <meta
          name="description"
          content="Rapid Agency jamoasi - texnologiya va marketingda mutaxassislardan iborat. Bizning ekspertlar jamoamiz sizning biznes maqsadlaringizga erishishda yordam beradi."
        />
        <meta
          name="keywords"
          content="Rapid Agency, texnologiya mutaxassislari, marketing jamoasi, raqamli marketing, dasturiy ta'minot jamoasi, texnologiya va innovatsiya markazi"
        />
      </Head>

      <div className="flex flex-col lg:flex-row mt-10 md:mt-20 overflow-hidden">
        <div className="container mx-auto md:pl-2 text-center md:text-left">
          <h1 className="text-4xl text-[#282B4C] sm:text-5xl md:text-6xl font-bold text-center mb-10">
            Bizning jamoamiz
          </h1>
          <p className="text-center text-gray-700 mb-8 px-4">
            Bizning mutaxassislardan iborat jamoamiz - sizning biznes
            maqsadlaringizga erishishda yordam beradi. Oʻz sohasida yetakchi
            texnologiya va marketing ekspertlari bilan tanishing.
          </p>
          <div className="container overflow-visible mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coworkers.map((coworker) => (
                <div
                  key={coworker.id}
                  className="text-center px-4"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden flex justify-center items-center h-[300px]">
                      <img
                        src={coworker.img}
                        alt={`${coworker.name}, ${coworker.position} at Rapid Agency`}
                        className="object-contain h-[300px] w-96 rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-[#2B2F5399] to-[#2B2F5399]"
                      />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">
                      {coworker.name}
                    </h2>
                    <p className="text-gray-500">{coworker.position}</p>
                    <div className="mt-2">{renderStars(coworker.rating)}</div>
                    <div className="flex justify-center space-x-4 mt-4">
                      <Link
                        href={coworker.socials.facebook}
                        aria-label="Facebook"
                      >
                        <FaFacebook className="text-gray-500 hover:text-blue-700" />
                      </Link>
                      <Link
                        href={coworker.socials.twitter}
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-gray-500 hover:text-blue-500" />
                      </Link>
                      <Link
                        href={coworker.socials.instagram}
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-gray-500 hover:text-pink-500" />
                      </Link>
                      <Link
                        href={coworker.socials.linkedin}
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="text-gray-500 hover:text-blue-900" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
