"use client";
import { useState, useEffect } from "react";
import { gridItems } from "@/constants";
import React from "react";

const Showcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for conditional rendering
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-24 w-full flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-[80%] gap-8 lg:gap-0">
        <h1 className="uppercase text-4xl lg:text-5xl font-extralight text-center lg:text-left">
          our creations
        </h1>
        <button className="uppercase border border-black text-xs px-8 py-2 hover:bg-black hover:text-white lg:block hidden">
          see all
        </button>
      </div>

      {/* Grid Section */}
      <div className="w-[80%] pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridItems.map((item) => (
          <div className="relative" key={item.id}>
            {/* Conditional Image Rendering */}
            <img
              src={isMobile ? item.mobileImg : item.desktopImg}
              alt={item.label}
              className=""
            />
            <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl absolute bottom-6 left-6 text-white font-semibold">
              {item.label}
            </h1>
          </div>
        ))}
      </div>
      <button className="uppercase border border-black text-xs px-8 py-2 hover:bg-black hover:text-white mt-8 lg:hidden">
        see all
      </button>
    </div>
  );
};

export default Showcase;
