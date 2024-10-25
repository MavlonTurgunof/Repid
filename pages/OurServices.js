import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/container/OurServices/Services";
import ServicesHeader from "@/container/OurServices/ServicesHeader";
import ServicesType from "@/container/OurServices/ServicesType";
import React from "react";

function OurServices() {
  return (
    <div>
      <Navbar />
      <ServicesHeader />
      <Services />
      <ServicesType />
      <Footer />
    </div>
  );
}

export default OurServices;
