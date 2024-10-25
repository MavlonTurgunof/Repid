import React, { useState, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import AOS from "aos";

const Clock = ({ contactRef, formSubmitted }) => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });
  const [discountStatus, setDiscountStatus] = useState(null);

  useEffect(() => {
    const savedStatus = localStorage.getItem("discountStatus");
    if (savedStatus) {
      setDiscountStatus(savedStatus);
      return;
    }

    const countdown = setInterval(() => {
      updateTime();
    }, 1000);

    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      clearInterval(countdown);
      handleMissedDiscount();
    }

    return () => clearInterval(countdown);
  }, [time]);

  useEffect(() => {
    if (formSubmitted && !discountStatus) {
      handleDiscountGranted();
    }
  }, [formSubmitted]);

  const updateTime = () => {
    const { hours, minutes, seconds } = time;

    // Check if the countdown has finished
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return; // Keep the time at 00:00:00 and stop updating
    }

    if (seconds > 0) {
      setTime({ ...time, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ hours, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
    }
  };

  const handleDiscountGranted = () => {
    setDiscountStatus("granted");
    localStorage.setItem("discountStatus", "granted");
    toast.success("Congratulations! You've received the discount!");
  };

  const handleMissedDiscount = () => {
    setDiscountStatus("missed");
    localStorage.setItem("discountStatus", "missed");
    toast.error("You missed the discount!");
  };

  const formatDigits = (value) => String(value).padStart(2, "0").split("");
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div
        className="flex flex-col items-center justify-center h-auto text-black max-w-7xl mx-auto rounded-[26px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(43,47,83,1) 0%, rgba(29,28,52,1) 100%)`,
        }}
        data-aos="fade-up"
      >
        {discountStatus === "granted" && (
          <p className="text-[#28a745] text-xl sm:text-2xl text-center font-bold mb-6">
            Siz allaqachon chegirma olgansiz!
          </p>
        )}
        {discountStatus === "missed" && (
          <p className="text-[#dc3545] text-xl sm:text-2xl text-center font-bold mb-6">
            Siz imkonni qoldan chiqardingiz!
          </p>
        )}

        {discountStatus === null && (
          <div className="flex flex-col items-center justify-center">
            <h1
              className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-center max-w-[600px] text-[#F5941F]"
              data-aos="fade-right"
            >
              Aksiya!
            </h1>
            <p
              className="text-[#D8D8D8] mb-4 sm:mb-6 lg:mb-10 w-full max-w-[790px] text-center px-4 sm:px-6"
              data-aos="fade-left"
            >
              Agar hoziroq murojaat qilsangiz, barcha xizmatlarimizga 30%
              chegirma taqdim etiladi. Shoshiling, imkoniyatni qo‘ldan boy
              bermang!
            </p>

            <div className="flex items-center justify-center space-x-4 sm:space-x-8 flex-wrap lg:flex-nowrap mb-8">
              <div
                className="flex flex-col items-center text-[#D8D8D8]"
                data-aos="zoom-in"
              >
                <div className="flex space-x-1 sm:space-x-2">
                  {formatDigits(time.hours).map((digit, index) => (
                    <div
                      key={`hour-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg text-2xl sm:text-4xl lg:text-6xl w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-sm sm:text-lg text-center">Soat</div>
              </div>

              <span className="text-xl sm:text-2xl lg:text-3xl text-[#FAD007]">
                :
              </span>

              <div
                className="flex flex-col items-center text-[#D8D8D8]"
                data-aos="zoom-in"
              >
                <div className="flex space-x-1 sm:space-x-2">
                  {formatDigits(time.minutes).map((digit, index) => (
                    <div
                      key={`minute-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg text-2xl sm:text-4xl lg:text-6xl w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-sm sm:text-lg text-center">Minut</div>
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl text-[#FAD007]">
                :
              </span>

              <div
                className="flex flex-col items-center text-[#D8D8D8]"
                data-aos="zoom-in"
              >
                <div className="flex space-x-1 sm:space-x-2">
                  {formatDigits(time.seconds).map((digit, index) => (
                    <div
                      key={`second-${index}`}
                      className="p-2 sm:p-4 rounded-xl shadow-lg text-2xl sm:text-4xl lg:text-6xl w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 flex justify-center items-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-sm sm:text-lg text-center">
                  Sekund
                </div>
              </div>
            </div>

            <button
              onClick={scrollToContacts}
              className=" sm:w-64 h-10 sm:h-12 bg-[#F5941F] text-white rounded-lg text-lg font-bold mt-6"
              data-aos="fade-up"
            >
              Murojaat qilish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
