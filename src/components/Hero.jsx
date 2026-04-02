import React from "react";
import backgroundImage from "../assets/Hero.jpeg";
import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=" hidden md:flex  absolute bottom-0 left-0 h-full bg-[#0E121D] w-[49vw]"
        style={{
          transform: "skewX(0deg)",
          transformOrigin: "bottom left",
        }}
      ></div>

      <div
        className=" hidden md:flex  absolute bottom-0 left-0 h-full bg-[#0E121D] w-[50vw] skew-x-[-18] origin-bottom-left"
        style={{
          transform: "skewX(-18deg)",
          transformOrigin: "bottom left",
        }}
      ></div>

      <div
        className="hidden md:flex absolute bottom-0 left-0 h-full bg-[#4D5765] opacity-10 w-[38vw] skew-x-[-18] origin-bottom-left"
        style={{
          transform: "skewX(-18deg)",
          transformOrigin: "bottom left",
        }}
      ></div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative text-white w-full flex flex-col items-center text-center px-4 py-10"
      >
        <motion.h1
          variants={slideUpVariants}
          className="font-[Bebas Neue] font-[450] text-[40px] leading-[54px] uppercase"
        >
          <span className="block">Building Beyond</span>
          <span>Expectations</span>
        </motion.h1>

        <motion.p
          variants={slideUpVariants}
          className="text-white font-[Source Sans Pro] text-[16px] leading-[22px] mt-4 max-w-[100%] sm:max-w-[80%] font-[40 0]"
        >
          The construction industry involves the planning, design, and
          implementation of buildings, infrastructure, and various development
          projects.
        </motion.p>

        <motion.button
          variants={slideUpVariants}
          className="mt-6 px-6 py-3 bg-[#FFC200] text-black font-[Bebas Neue] 
             text-[18px] sm:text-[20px] leading-[100%] tracking-wide 
             uppercase rounded-lg hover:bg-[#E6AE00] transition 
             duration-300 shadow-md mb-2"
        >
          GET STARTED
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
