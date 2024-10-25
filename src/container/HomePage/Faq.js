import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    id: 1,
    question: " Agentlik qaysi IT xizmatlarini taqdim etadi?",
    answer:
      "Agentligimiz quyidagi xizmatlarni taqdim etadi: Brand Book va Guidebook yaratish, Naming (brend nomini ishlab chiqish), Web-sayt yaratish, Mobil ilovalar ishlab chiqish, SMM xizmatlari, hamda CRM tizimlarini ishlab chiqish.",
  },
  {
    id: 2,
    question: "Loyihani boshlash uchun qanday qadamlar kerak?",
    answer:
      "Biz bilan bog‘lanib, talablaringizni muhokama qilishingiz mumkin. Biz ehtiyojlaringizni tushunib, sizga loyha taklifini  va loyhani tugatish mudatini aytamiz",
  },
  {
    id: 3,
    question: "Aloqa va qo‘llab-quvvatlash xizmatlaringiz qanday ishlaydi?",
    answer:
      "Loyihaning har bir bosqichida bizning mutaxassislarimiz bilan bog‘lanishingiz mumkin. Shuningdek, xizmat ko‘rsatish jarayonida yoki loyiha yakunlanganidan so‘ng ham qo‘llab-quvvatlash imkoniyati mavjud.",
  },
  {
    id: 4,
    question:
      "CRM tizimi qanday qilib xizmat sifatini yaxshilashga yordam beradi?",
    answer:
      "Tizimdan foydalanish juda qulay, chunki biz uni restoran xodimlariga moslashtiramiz. Bu ish jarayonini soddalashtiradi va xizmat sifatini oshirishga yordam beradi. Asosiy vazifamiz – mijozlarning ehtiyojlariga mos ravishda tizimni ishlab chiqish va uni restoran xodimlariga qulay qilib taqdim etishdir.",
  },
  {
    id: 5,
    question: "Sizning narxlaringiz raqobatbardoshmi?",
    answer: "Biz yuqori sifatni mos narxlarda taqdim etamiz.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 lg:mb-20 mb-16">
      {/* FAQ Section */}
      <div className="mt-32 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border rounded-lg ${
              activeIndex === index ? "bg-[#fef6e4]" : "bg-white"
            } transition-all duration-600 shadow-md`}
            data-aos="fade-up"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
              data-aos="fade-right"
            >
              {/* Question Number and Text */}
              <div className="flex items-center space-x-4">
                <div
                  className={`text-2xl font-semibold ${
                    activeIndex === index
                      ? "text-[#7765c4] text-3xl"
                      : "text-[#a1a1a1] text-3xl"
                  }`}
                >
                  {faq.id < 10 ? `0${faq.id}` : faq.id}
                </div>
                <div
                  className={`text-lg md:text-xl font-semibold ${
                    activeIndex === index ? "text-black" : "text-[#333333]"
                  }`}
                >
                  {faq.question}
                </div>
              </div>

              {/* Icon for expanding/collapsing */}
              <div className="text-xl ml-2">
                {activeIndex === index ? (
                  <AiOutlineClose className="text-[#333333]" />
                ) : (
                  <AiOutlinePlus className="text-gray-500" />
                )}
              </div>
            </button>

            {/* Answer Section */}
            <div
              className={`mt-4 text-gray-600 text-sm md:text-base transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
              data-aos="fade-down"
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
