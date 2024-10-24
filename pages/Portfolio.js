import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BigPortfolio from "@/container/HomePage/BigPortfolio";
import MainHeader from "@/container/HomePage/MainHeader";
import React from "react";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <BigPortfolio />
      <Footer />
    </div>
  );
}

export default Portfolio;
