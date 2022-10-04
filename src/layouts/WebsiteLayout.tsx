import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import { getAllJokes } from "../services/jokesService";

const WebsiteLayout = ({ data, isLoading }: any) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="">
      <Header />
      <HeroSection data={data} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
