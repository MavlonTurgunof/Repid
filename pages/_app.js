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
    gtag("config", "G-4H11K248F7");
  }, []);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Repid Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Repid Agency" />
        <meta
          property="og:description"
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
        />
        <meta property="og:image" content="https://www.repid.uz/repid.png" />
        <meta property="og:url" content="https://www.repid.uz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Repid Agency" />
        <meta
          name="twitter:description"
          content="Welcome to Repid Agency, providing top-tier services to boost your business."
        />
        <meta name="twitter:image" content="https://www.repid.uz/repid.png" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
