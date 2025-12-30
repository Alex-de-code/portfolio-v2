import { useState } from "react";
import "../App.css";
import BusinessCard from "../components/BusinessCard.jsx";
import AboutMe from "../components/AboutMe.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="bg-teal-900 min-h-screen">
        <div className="sm:py-14 sm:px-8 lg:py-20 lg:px-16 p-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" rounded-md px-4 py-2 col-span-1 ">
              <BusinessCard />
            </div>
            <div className="p-3  md:col-span-1">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
