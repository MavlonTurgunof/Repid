import { useEffect } from "react";
import "@/styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-4H11K248F7";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-KN63RJ1S92");
  }, []);

  return (
    <>

      <Head>
        {/* HTML Meta Tags */}
        <title>Repid Agency</title>
        <meta
          name="description"
          content="repid agency ga xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://repid.uz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repid Agency" />
        <meta
          property="og:description"
          content="repid agency xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz."
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
          content="repid agency ga xush kelibsiz! Biz sizga o'zimizning xizmatlarimizni taklif qilamiz."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/b1a4cc19-cfd8-42bf-afbe-7c6d08755781.jpg?token=UVywB6mQQK1NOyHt-cSg1xJpM3Zd0QcbmAFpux2YDaw&height=380&width=864&expires=33266045777"
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
