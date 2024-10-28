// Form.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const botToken = "7298372846:AAG8e18_Kg_GoobvxWCRj1dGR30HonOewhE";
  const chatId = "5050378120";

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      chat_id: chatId,
      text: `New client!\n\nName: ${name}\nPhone: ${phone}\nComment: ${comment}`,
    };

    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, payload)
      .then(() => {
        setName("");
        setPhone("");
        setComment("");
        toast.success("Ma'lumotlaringiz yuborildi!");
      })
      .catch((e) => {
        console.log(e);
      });
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingizni kiriting"
            className="w-full pt-3 pl-14 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div
          className="relative"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <LuPhone className="text-[28px] top-[10px] absolute left-2 text-[#F48C06]" />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+998 99 000 00 00"
            className="w-full pt-3 pl-14 pr-3 pb-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
          <textarea
            name="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="O'zingiz xohlagan xizmatni ayting"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
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
