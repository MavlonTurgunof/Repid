import { useState } from "react";
import Link from "next/link";
import Form from "./Form";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

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
        <Form />

        {/* <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg lg:w-1/3 w-full">
          <h3 className="text-xl font-bold text-gray-700 mb-5">Ishingizni</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Enter Your Name here"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06]"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                placeholder="+998 99 000 00 00"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Tell me the service you want"
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f48c06] text-white py-3 rounded-lg hover:bg-[#e07c04] transition-all"
            >
              Send Now
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
