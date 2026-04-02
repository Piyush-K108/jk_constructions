import React from "react";
import Hero from "../../components/Hero";
import Awards from "./Awards";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div id="home">
      <div className="relative">
        <Hero />
        
      </div>
      
      <Awards />
      <About />

      <motion.section
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-yellow-500 font-semibold uppercase text-sm">
              GET CONSULTATION
            </h3>
            <h2 className="text-3xl font-bold">
              GET STARTED WITH A <br /> FREE CONSULTATION
              <span className="text-yellow-500">!</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              GET CONSULTATION
            </button>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition">
              WORK WITH US
            </button>
          </motion.div>
        </div>
      </motion.section>

      <Services />
      <Works />
      <Testimonials />
    </div>
  );
};

export default Home;
