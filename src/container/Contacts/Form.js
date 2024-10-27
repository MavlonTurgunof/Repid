// Form.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

function Form({ onSubmit }) {
  const REACT_APP_BOT_TOKEN = "7898444291:AAEsP2fA6hz1YgRflnx0qt3faxXq7ovhblg";
  const REACT_APP_CHAT_ID = "1589263429";
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    textarea: "",
  });
  
  const SENDING_TEXT = JSON.stringify(inputValue).replace(/[\\^+[\]{}"-]/g, "");
  const url = `https://api.telegram.org/bot${REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${REACT_APP_CHAT_ID}&parse_mode=html&text=${SENDING_TEXT}`;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url)
      .then((r) => {
        toast.success("Rahmat: " + inputValue.name);
        onSubmit(); // Call the onSubmit prop function to stop the clock
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setInputValue({ name: "", phone: "", textarea: "" }));
  };
  
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 lg:w-[600px] lg:mb-0 mb-20"
        data-aos="fade-up" // Animation for the entire form
        data-aos-duration="700" // Duration of the animation
      >
        <div className="relative" data-aos="fade-up" data-aos-duration="700">
          <FiUser className="text-[28px] absolute left-2 top-[10px] text-[#F48C06]" />
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleChange}
            placeholder="Ismingizni kiriting"
            className="w-full pt-3 pl-14 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div className="relative" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <LuPhone className="text-[28px] top-[10px] absolute left-2 text-[#F48C06]" />
          <input
            type="tel"
            name="phone"
            value={inputValue.phone}
            onChange={handleChange}
            placeholder="+998 99 000 00 00"
            className="w-full pt-3 pl-14 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
          <textarea
            name="textarea"
            value={inputValue.textarea}
            onChange={handleChange}
            placeholder="O'zingiz xohlagan xizmatni ayting"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
          <button
            type="submit"
            className="w-full bg-[#f48c06] text-white py-3 rounded-lg hover:bg-[#e07c04] transition-all"
          >
            Yuborish
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
