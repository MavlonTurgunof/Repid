import React, { useState, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Clock = ({ contactRef }) => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  // Create a ref for the Contacts section

  useEffect(() => {
    const countdown = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);

  const updateTime = () => {
    const { hours, minutes, seconds } = time;
    if (seconds > 0) {
      setTime({ ...time, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ hours, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
    }
  };

  const formatDigits = (value) => String(value).padStart(2, "0").split("");

  // Function to handle button click and scroll to the "Contacts" section
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center h-auto text-black max-w-7xl mx-auto rounded-[26px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(43,47,83,1) 0%, rgba(29,28,52,1) 100%)`,
          }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-center max-w-[600px] text-[#F5941F]">
            Aksiya!
          </h1>
          <p className="text-[#D8D8D8] mb-6 sm:mb-8 lg:mb-10 w-full max-w-[790px] text-center px-4 sm:px-6">
            1 soat ichida murojaat qiling va 30% chegirma oling! Bizning
            xizmatlarimizni sinab ko‘rmoqchimisiz? Endi bu yanada osonroq! Agar
            hoziroq murojaat qilsangiz, barcha xizmatlarimizga 30% chegirma
            taqdim etiladi. Shoshiling, imkoniyatni qo‘ldan boy bermang!
          </p>
          <div className="flex flex-col items-center justify-center h-auto text-black max-w-7xl mx-auto rounded-lg mb-8">
            <div className="flex items-center space-x-4 lg:flex-row flex-col">
              {/* Hours */}
              <div className="flex flex-col items-center text-[#D8D8D8]">
                <div className="flex space-x-2">
                  {formatDigits(time.hours).map((digit, index) => (
                    <div
                      key={`hour-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg shadow-black text-5xl sm:text-8xl w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <span className="mt-2 text-md sm:text-lg text-[#D8D8D8]">
                  Hours
                </span>
              </div>
              <span className="text-3xl sm:text-4xl text-[#FAD007] mb-4">
                :
              </span>

              {/* Minutes */}
              <div className="flex flex-col items-center text-[#D8D8D8]">
                <div className="flex space-x-2">
                  {formatDigits(time.minutes).map((digit, index) => (
                    <div
                      key={`minute-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg shadow-black text-5xl sm:text-8xl w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <span className="mt-2 text-md sm:text-lg text-[#D8D8D8]">
                  Minutes
                </span>
              </div>
              <span className="text-3xl sm:text-4xl text-[#FAD007] mb-4">
                :
              </span>

              {/* Seconds */}
              <div className="flex flex-col items-center text-[#D8D8D8]">
                <div className="flex space-x-2">
                  {formatDigits(time.seconds).map((digit, index) => (
                    <div
                      key={`second-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg shadow-black text-5xl sm:text-8xl w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <span className="mt-2 text-md sm:text-lg text-[#D8D8D8]">
                  Seconds
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToContacts} // Scroll to "Contacts" section when clicked
            className="mt-8 px-6 py-4 bg-[#1D1C34] border-[#D8D8D8] border-2 rounded-[16px] shadow-md hover:bg-gray-800 text-[#D8D8D8]"
          >
            Bog'lanish
          </button>
          <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 text-sm text-black ">
            <div className="flex items-center text-[#D8D8D8]">
              <span className="mr-2">
                <FaCircleCheck />
              </span>
              <span>Biz bilan bog‘laning</span>
            </div>
            <div className="flex items-center text-[#D8D8D8]">
              <span className="mr-2">
                <FaCircleCheck />
              </span>
              <span> Barcha xizmatlar</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
