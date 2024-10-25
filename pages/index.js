import React, { useEffect, useRef, useState } from "react";
import Services from "@/container/HomePage/Services";
import WhyUs from "@/container/HomePage/WhyUs";
import Footer from "@/components/Footer";
import Contact from "@/container/Contacts/Contact";
import Faq from "@/container/HomePage/Faq";
import Navbar from "@/components/Navbar";
import MainHeader from "@/container/HomePage/MainHeader";
import Clock from "@/container/HomePage/Clock";
import Partners from "@/container/HomePage/Partners";
import BigPortfolio from "@/container/HomePage/BigPortfolio";

function index() {
  const contactRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <MainHeader contactRef={contactRef} />
      <Clock contactRef={contactRef} formSubmitted={formSubmitted} />
      <WhyUs />
      <Services />
      <div ref={contactRef}>
        <Contact handleFormSubmit={handleFormSubmit} />
      </div>
      <Faq />
      <Clock contactRef={contactRef} />
      <BigPortfolio />
      {/* <Partners /> */}
      <Footer />
    </div>
  );
}

export default index;
