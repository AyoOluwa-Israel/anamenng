import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WebsiteLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
