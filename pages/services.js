import Footer from "@/components/Footer";
import Services from "@/container/OurServices/OurServices";
import ServicesHeader from "@/container/OurServices/ServicesHeader";
import ServicesType from "@/container/OurServices/ServicesType";
import React from "react";

function OurServices() {
  return (
    <div>
      <ServicesHeader />
      <Services />
      <ServicesType />
      <Footer />
    </div>
  );
}

export default OurServices;
