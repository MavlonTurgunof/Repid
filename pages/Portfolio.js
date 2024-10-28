import Footer from "@/components/Footer";
import BigPortfolio from "@/container/HomePage/BigPortfolio";
import MainHeader from "@/container/HomePage/MainHeader";
import Head from "next/head";
import React from "react";

function Portfolio() {
  return (
    <>
     <Head>
        <title>Repid Agency</title>
        <meta
          name="description"
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://repid.uz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repid Agency" />
        <meta
          property="og:description"
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
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
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />
      </Head>

      <div>
        <MainHeader />
        <BigPortfolio />
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
