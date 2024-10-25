import { useState } from "react";
import Link from "next/link";
import Form from "./Form";

const Contact = ({ handleFormSubmit }) => {
  return (
    <div className="bg-[url('/img/contact.png')] h-[800px] bg-no-repeat bg-center bg-cover p-5">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-full w-full justify-between container mx-auto space-y-5 lg:space-y-0 lg:mt-[15%]">
        {/* Left Section: Contact Info */}
        <div className="text-white lg:w-1/2 w-full text-center lg:text-left space-y-5">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 max-sm:text-3xl">
            Biz bilan <span className="text-[#f48c06]">bog'lanish </span>
          </h2>
          <div className="flex flex-col space-y-4 text-lg">
            <p className="flex items-center justify-center lg:justify-start">
              <i className="fas fa-phone-alt mr-2"></i> +998 97 101 6600
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <i className="fas fa-map-marker-alt mr-2"></i>Tashkent, Uzbekistan
            </p>
            <Link
              href="repidagency@gmail.com"
              className="flex items-center justify-center lg:justify-start"
            >
              <i className="fas fa-globe mr-2"></i> repidagency@gmail.com
            </Link>
          </div>
        </div>
        <Form onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Contact;
