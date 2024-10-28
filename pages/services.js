import Footer from "@/components/Footer";
import Services from "@/container/OurServices/OurServices";
import ServicesHeader from "@/container/OurServices/ServicesHeader";
import ServicesType from "@/container/HomePage/Services";
import React from "react";
import Head from "next/head";

function OurServices() {
  return (
    <>
     <Head>
        <title>Repid Agency</title>
        <meta
          name="description"
          content="Repid agenstvaga xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://repid.uz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repid Agency" />
        <meta
          property="og:description"
          content="Repid agenstvaga xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="repid.uz" />
        <meta property="twitter:url" content="https://repid.uz/" />
        <meta name="twitter:title" content="Repid Agency" />
        <meta
          name="twitter:description"
          content="Repid agenstvaga xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />
      </Head>

      <div>
        <ServicesHeader />
        <Services />
        <ServicesType />
        <Footer />
      </div>
    </>
  );
}

export default OurServices;
