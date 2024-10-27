import React, { useRef, useState } from "react";
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

function HomePage() {
  const contactRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Repid Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Repid Agency" />
        <meta property="og:description" content="Welcome to Repid Agency, providing top-tier services to boost your business." />
        <meta property="og:image" content="https://www.repid.uz/repid.png" />
        <meta property="og:url" content="https://www.repid.uz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Repid Agency" />
        <meta name="twitter:description" content="Welcome to Repid Agency, providing top-tier services to boost your business." />
        <meta name="twitter:image" content="https://www.repid.uz/repid.png" />
      </Head>

      <div>
        <MainHeader contactRef={contactRef} />
        <WhyUs />
        <Clock contactRef={contactRef} formSubmitted={formSubmitted} />
        <Services />
        <BigPortfolio />
        <Faq />
        {/* Uncomment the Contact and Partners components if needed */}
        {/* <div ref={contactRef}>
          <Contact handleFormSubmit={handleFormSubmit} />
        </div> */}
        {/* <Partners /> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
