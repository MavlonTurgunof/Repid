import React from "react";
import Services from "@/container/HomePage/Services";
import WhyUs from "@/container/HomePage/WhyUs";
import Footer from "@/components/Footer";
import Contact from "@/container/HomePage/Contact";
import Faq from "@/container/HomePage/Faq";
import Process from "@/container/HomePage/Process";
import Partners from "@/container/HomePage/Partners";
import Navbar from "@/components/Navbar";
import MainHeader from "@/container/HomePage/MainHeader";
import Clock from "@/container/HomePage/Clock";
import Portfolio from "@/container/HomePage/Portfolio";

function index() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <Clock />
      <WhyUs />
      <Services />
      <Contact />
      <Faq />
      <Portfolio />
      <Partners />
      <Process />
      <Footer />
    </div>
  );
}

export default index;
