import React from "react";
import Footer from "@/components/Footer";
import Faq from "@/container/HomePage/Faq";
import Team from "@/container/AboutUs/Team";
import AboutHeader from "@/container/AboutUs/AboutHeader";

function About() {
  return (
    <div>
      <AboutHeader />
      {/* <About /> */}
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default About;
