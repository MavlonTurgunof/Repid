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
import Head from "next/head";

function index() {
  const contactRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Saidoff</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
    </>
  );
}

export default index;
