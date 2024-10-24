import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainHeader from "@/container/HomePage/MainHeader";
import Faq from "@/container/HomePage/Faq";
import Team from "@/container/AboutUs/Team";

function About() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      {/* <About /> */}
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default About;
