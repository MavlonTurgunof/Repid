import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const faqs = [
  {
    id: 1,
    question: " Siz aniq qanday xizmatlar ko'rsatasiz?",
    answer:
      "Biz texnologiyalarga asoslangan kreativ agentlikmiz. Sizning biznesingizga zamonaviy IT yechimlar, raqamli marketing va brend strategiyasini shakllantirishda yordam beramiz.",
  },
  {
    id: 2,
    question:
      "Men brend strategiyasiga muhtoj emasman, ammo kampaniyamni amalga oshirishda yordam kerak. Hamkorlik qila olamizmi?",
    answer:
      "Albatta! Biz kampaniyalarni amalga oshirish va texnik qo‘llab-quvvatlashda mutaxassismiz.",
  },
  {
    id: 3,
    question: "Sizning narxlaringiz raqobatbardoshmi?",
    answer: "Biz yuqori sifatni mos narxlarda taqdim etamiz.",
  },
  {
    id: 4,
    question: " Nima uchun sizda oylik loyihalar chegarasi mavjud?",
    answer:
      "Bu sifatni ta’minlash va har bir mijozga yetarlicha e'tibor qaratish uchun qo‘llaniladi.",
  },
];

function Faq() {
  // Set the first FAQ to be open by default (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:mb-40">
      {/* FAQ Section */}
      <div className="mt-32  max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border rounded-lg ${
              activeIndex === index ? "bg-[#fef6e4]" : "bg-white"
            } transition-all duration-600 shadow-md`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
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
