import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Clock = ({ contactRef, formSubmitted }) => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });
  const [discountStatus, setDiscountStatus] = useState(null);

  useEffect(() => {
    const savedStatus = localStorage.getItem("discountStatus");
    const savedEndTime = localStorage.getItem("discountEndTime");

    if (savedStatus) {
      setDiscountStatus(savedStatus);
      return;
    }

    if (savedEndTime) {
      const remainingTime = calculateRemainingTime(savedEndTime);
      if (remainingTime.total > 0) {
        setTime(remainingTime);
      } else {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
      }
    } else {
      const endTime = Date.now() + 3600000; // 1 hour from now
      localStorage.setItem("discountEndTime", endTime);
    }

    const countdown = setInterval(() => {
      const endTime = localStorage.getItem("discountEndTime");
      const remainingTime = calculateRemainingTime(endTime);
      if (remainingTime.total > 0) {
        setTime(remainingTime);
      } else {
        clearInterval(countdown);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (formSubmitted && !discountStatus) {
      handleDiscountGranted();
    }
  }, [formSubmitted]);

  const calculateRemainingTime = (endTime) => {
    const total = endTime - Date.now();
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { total, hours, minutes, seconds };
  };

  const handleDiscountGranted = () => {
    setDiscountStatus("granted");
    localStorage.setItem("discountStatus", "granted");
    localStorage.removeItem("discountEndTime");
    toast.success("Congratulations! You've received the discount!");
  };

  const formatDigits = (value) => String(value).padStart(2, "0").split("");
  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-40 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div
        className="flex flex-col items-center justify-center h-auto text-black max-w-7xl mx-auto rounded-[26px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(43,47,83,1) 0%, rgba(29,28,52,1) 100%)`,
        }}
        data-aos="flip-up"
      >
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
            Agar hoziroq murojaat qilsangiz, barcha xizmatlarimizga 30% chegirma
            taqdim etiladi. Shoshiling, imkoniyatni qo‘ldan boy bermang!
          </p>

          <div className="flex items-center justify-center gap-[25px] max-[750px]:flex-col mb-8">
            <div
              className="flex flex-col items-center text-[#D8D8D8]"
              data-aos="zoom-in"
            >
              <div
                className="w-[280px] min-[750px]:w-[200px] h-[200px] flex items-center flex-col justify-center rounded-[20px]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                }}
              >
                <div className="flex items-center">
                  {formatDigits(time.hours).map((digit, index) => (
                    <p key={index} className="text-[80px] font-black">
                      {digit}
                    </p>
                  ))}
                </div>
                <div className="mt-2 text-[16px] text-center font-light">
                  Soat
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-center text-[#D8D8D8]"
              data-aos="zoom-in"
            >
              <div
                className="w-[280px] min-[750px]:w-[200px] h-[200px] flex items-center flex-col justify-center rounded-[20px]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                }}
              >
                <div className="flex items-center">
                  {formatDigits(time.minutes).map((digit, index) => (
                    <p key={index} className="text-[80px] font-black">
                      {digit}
                    </p>
                  ))}
                </div>
                <div className="mt-2 text-[16px] text-center font-light">
                  Minut
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-center text-[#D8D8D8]"
              data-aos="zoom-in"
            >
              <div
                className="w-[280px] min-[750px]:w-[200px] h-[200px] flex items-center flex-col justify-center rounded-[20px]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(27, 51, 81, 0.3) 30%, rgba(155, 97, 149, 0.3) 70%)`,
                }}
              >
                <div className="flex items-center">
                  {formatDigits(time.seconds).map((digit, index) => (
                    <p key={index} className="text-[80px] font-black">
                      {digit}
                    </p>
                  ))}
                </div>
                <div className="mt-2 text-[16px] text-center font-light">
                  Sekund
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToContacts}
            className="bg-[#FFFFFF0D] border border-[#fff] text-white rounded-lg px-9 py-3 mt-5"
          >
            Murojaat qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;