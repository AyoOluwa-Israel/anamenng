import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const WebsiteLayout = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
