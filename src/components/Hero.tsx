"use client";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update screen size state based on the window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 785); // Set breakpoint for mobile screens
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={
          isMobile
            ? "/images/mobile/image-hero.jpg" // Mobile background image
            : "/images/desktop/image-hero.jpg" // Desktop background image
        }
        alt="hero image"
        className="w-full h-[93vh] bg-no-repeat bg-cover bg-center"
      />

      {/* Hero Text */}
      <div
        className={`absolute ${
          isMobile
            ? "bottom-10 left-5 w-[90%]" // Position for mobile
            : "top-60 left-20 w-[460px] h-60" // Position for desktop
        }`}
      >
        <h1
          className={`border-2 border-white py-3 px-4 text-white uppercase ${
            isMobile ? "text-4xl text-left mb-60" : "text-6xl"
          }`}
        >
          immerse experiences that delivers
        </h1>
      </div>
    </div>
  );
};

export default Hero;
