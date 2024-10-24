import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const faqs = [
  {
    id: 1,
    question: " Sizda qanday hizmat turlari mavjud?",
    answer:
      "Bizda, Nameng,Logo , Brendbook va Guidebook, Web sayt, yasab berish,  Seo yoqish, App yasash ,Hizmatlarimiz mavjud diyiladi",
  },
  {
    id: 2,
    question: "Loyihani yakunlash uchun qancha vaqt kerak bo‘ladi?",
    answer:
      "Loyihaning muddati xizmat turiga va loyiha hajmiga bog‘liq. Odatda, kichik loyihalar bir necha haftada yakunlanadi, kattaroq loyihalar esa bir necha oy davom etishi mumkin. Har doim mijozlar bilan kelishilgan muddatlarda ishlashga harakat qilamiz.",
  },
  {
    id: 3,
    question: "Xizmatlaringiz narxi qanday belgilanadi?",
    answer:
      "Narxlar xizmat turiga, loyihaning hajmi va murakkabligiga qarab o‘zgaradi. Biz har bir mijozga individual yondashamiz va loyihaga ko‘ra narxni aniqlaymiz. Dastlabki maslahat bepul bo‘lib, uning davomida biz sizga taxminiy narx taklif qilamiz.",
  },
  {
    id: 4,
    question: "Loyihani amalga oshirish jarayoni qanday?",
    answer:
      "Loyihani amalga oshirish quyidagi bosqichlardan iborat: dastlabki maslahat, ehtiyojlarni tahlil qilish, taklif tayyorlash, loyiha ishlab chiqish, tasdiqlash va yakunlash. Har bir qadamda mijozlarimiz bilan yaqin aloqada bo‘lib, ularning fikrlarini inobatga olamiz.",
  },
];

function Faq() {
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
