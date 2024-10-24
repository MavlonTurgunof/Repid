import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainHeader from "@/container/HomePage/MainHeader";
import Services from "@/container/OurServices/Services";
import ServicesType from "@/container/OurServices/ServicesType";
import React from "react";

function OurServices() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <Services />
      <ServicesType />
      <Footer />
    </div>
  );
}

export default OurServices;
