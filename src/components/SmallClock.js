import React, { useState, useEffect } from "react";
import { SemiColon } from "../../public/icons";

const SmallClock = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

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
    } else {
      clearInterval();
    }
  };

  // Helper function to format time values as an array of digits
  const formatDigits = (value) => String(value).padStart(2, "0").split("");

  return (
    <div className="flex flex-col items-center justify-center h-auto text-black max-w-7xl mx-auto mt-16 rounded-lg mb-8">
      <div className="flex items-center space-x-4">
        {/** Hours */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {formatDigits(time.hours).map((digit, index) => (
              <div
                key={`hour-${index}`}
                className=" p-4 rounded-xl shadow-lg text-8xl font-mono flex justify-center items-center w-[103.9px] h-[149px] bg-[#FAD007]"
              >
                {digit}
              </div>
            ))}
          </div>
          <span className="mt-2 text-lg text-white">soat</span>
        </div>
        <span className="text-4xl text-[#FAD007] mb-4">
          <svg
            width="15"
            height="35"
            viewBox="0 0 15 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.27963 0.36853C8.8155 0.36853 10.0334 1.17233 11.9333 2.77993C13.8332 4.38753 14.7831 5.48362 14.7831 6.0682C14.7831 6.60407 13.8332 7.70016 11.9333 9.35648C10.0334 11.0128 8.8155 11.8409 8.27963 11.8409C7.74376 11.8409 6.52588 11.0128 4.62599 9.35648C2.7261 7.70016 1.77616 6.60407 1.77616 6.0682C1.77616 5.48362 2.7261 4.38753 4.62599 2.77993C6.5746 1.17233 7.79248 0.36853 8.27963 0.36853ZM7.47583 23.0942C8.0117 23.0942 9.22957 23.898 11.1295 25.5056C13.0294 27.1132 13.9793 28.2092 13.9793 28.7938C13.9793 29.3297 13.0294 30.4258 11.1295 32.0821C9.22957 33.7384 8.0117 34.5666 7.47583 34.5666C6.93996 34.5666 5.72208 33.7384 3.82219 32.0821C1.9223 30.4258 0.972355 29.3297 0.972355 28.7938C0.972355 28.2092 1.9223 27.1132 3.82219 25.5056C5.7708 23.898 6.98868 23.0942 7.47583 23.0942Z"
              fill="#FAD007"
            />
          </svg>
        </span>

        {/** Minutes */}
        <div className="flex flex-col items-center">
          <div className="flex ">
            {formatDigits(time.minutes).map((digit, index) => (
              <div
                key={`minute-${index}`}
                className="p-4 rounded-xl shadow-lg text-8xl font-mono flex justify-center items-center w-[103.9px] h-[149px] bg-[#FAD007]"
              >
                {digit}
              </div>
            ))}
          </div>
          <span className="mt-2 text-lg text-white">daqiqa</span>
        </div>
        <span className="text-4xl text-[#FAD007] mb-4">
          <svg
            width="15"
            height="35"
            viewBox="0 0 15 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.27963 0.36853C8.8155 0.36853 10.0334 1.17233 11.9333 2.77993C13.8332 4.38753 14.7831 5.48362 14.7831 6.0682C14.7831 6.60407 13.8332 7.70016 11.9333 9.35648C10.0334 11.0128 8.8155 11.8409 8.27963 11.8409C7.74376 11.8409 6.52588 11.0128 4.62599 9.35648C2.7261 7.70016 1.77616 6.60407 1.77616 6.0682C1.77616 5.48362 2.7261 4.38753 4.62599 2.77993C6.5746 1.17233 7.79248 0.36853 8.27963 0.36853ZM7.47583 23.0942C8.0117 23.0942 9.22957 23.898 11.1295 25.5056C13.0294 27.1132 13.9793 28.2092 13.9793 28.7938C13.9793 29.3297 13.0294 30.4258 11.1295 32.0821C9.22957 33.7384 8.0117 34.5666 7.47583 34.5666C6.93996 34.5666 5.72208 33.7384 3.82219 32.0821C1.9223 30.4258 0.972355 29.3297 0.972355 28.7938C0.972355 28.2092 1.9223 27.1132 3.82219 25.5056C5.7708 23.898 6.98868 23.0942 7.47583 23.0942Z"
              fill="#FAD007"
            />
          </svg>
        </span>

        {/** Seconds */}
        <div className="flex flex-col items-center ">
          <div className="flex">
            {formatDigits(time.seconds).map((digit, index) => (
              <div
                key={`second-${index}`}
                className="p-4 rounded-xl shadow-lg text-8xl font-mono flex justify-center items-center w-[103.9px] h-[149px] bg-[#FAD007]"
              >
                {digit}
              </div>
            ))}
          </div>
          <span className="mt-2 text-lg text-white">soniya</span>
        </div>
      </div>
    </div>
  );
};

export default SmallClock;
