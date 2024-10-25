import React, { useEffect, useRef, useState } from "react";
import Services from "@/container/HomePage/Services";
import WhyUs from "@/container/HomePage/WhyUs";
import Footer from "@/components/Footer";
import Contact from "@/container/Contacts/Contact";
import Faq from "@/container/HomePage/Faq";
import Navbar from "@/components/Navbar";
import MainHeader from "@/container/HomePage/MainHeader";
import Clock from "@/container/HomePage/Clock";
import Portfolio from "@/container/HomePage/Portfolio";
import Partners from "@/container/HomePage/Partners";
import { toast } from "react-toastify";

function index() {
  const contactRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    toast.success("Congratulations! You've received the discount!");
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
      <Portfolio />
      <Partners />
      <Footer />
    </div>
  );
}

export default index;
