import React, { useEffect, useRef, useState } from "react";
import Services from "@/container/HomePage/Services";
import WhyUs from "@/container/HomePage/WhyUs";
import Footer from "@/components/Footer";
import Contact from "@/container/Contacts/Contact";
import Faq from "@/container/HomePage/Faq";
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
        <MainHeader contactRef={contactRef} />
        <WhyUs />
        <Clock contactRef={contactRef} formSubmitted={formSubmitted} />
        <Services />
        <BigPortfolio />
        <div ref={contactRef}>
          <Contact handleFormSubmit={handleFormSubmit} />
        </div>
        <Faq />
        <Clock contactRef={contactRef} />
        {/* <Partners /> */}
        <Footer />
      </div>
    </>
  );
}

export default index;
