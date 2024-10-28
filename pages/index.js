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
        <title>Repid Agency</title>
        <meta
          name="description"
          content="Welcome to repid agency, providing top-tier services to boost your business."
        />

        <meta property="og:url" content="https://repid.uz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repid Agency" />
        <meta
          property="og:description"
          content="Welcome to repid agency, providing top-tier services to boost your business."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />

        <meta
          name="twitter:card"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />
        <meta property="twitter:domain" content="repid.uz" />
        <meta property="twitter:url" content="https://repid.uz/" />
        <meta name="twitter:title" content="repid gency" />
        <meta
          name="twitter:description"
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />
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
        <Clock contactRef={contactRef} formSubmitted={formSubmitted} />
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
